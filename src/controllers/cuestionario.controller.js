const Cuestionario = require('../models/cuestionario.model');
const LeaderBoard = require('../models/leaderboard.model');

function makeid(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const getCuestionarios = async (req, reply) => {
  return await Cuestionario.find();
};

const getCuestionario = async (req, reply) => {
  const cuestionario = await Cuestionario.findById(req.params.id);
  return reply.code(200).send(cuestionario);
};

const createCuestionario = async (req, reply) => {
  const newCuestionario = new Cuestionario({ ...req.body, code: makeid(15) });
  await newCuestionario.save();

  const newLeader = new LeaderBoard({
    cuestionario: newCuestionario['_id'],
    participantes: [],
  });
  await newLeader.save();

  reply.code(201).send(newCuestionario);
};

const updateCuestionario = async (req, reply) => {
  const user = await Cuestionario.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return user;
};

const deleteCuestionario = async (req, reply) => {
  await Cuestionario.findByIdAndDelete(req.params.id);
  reply.code(204).send();
};

const getCuestionarioByCode = async (req, reply) => {
  const cuestionario = await Cuestionario.findOne({ code: req.params.code });
  return reply.code(200).send(cuestionario);
};

module.exports = {
  getCuestionarios,
  getCuestionario,
  createCuestionario,
  updateCuestionario,
  deleteCuestionario,
  getCuestionarioByCode,
};
