const LeaderBoard = require('../models/leaderboard.model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const getLeaderBoards = async (req, reply) => {
  return await LeaderBoard.find();
};

const getLeaderBoard = async (req, reply) => {
  const leader = await LeaderBoard.findById(req.params.id);
  return leader;
};

const createLeaderBoard = async (req, reply) => {
  const newLeader = new LeaderBoard(req.body);
  await newLeader.save();
  return newLeader;
};

const updateLeaderBoard = async (req, reply) => {
  const leader = await LeaderBoard.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return leader;
};

const deleteLeaderBoard = async (req, reply) => {
  await LeaderBoard.findByIdAndDelete(req.params.id);
  reply.code(204).send();
};

const getLeaderBoardByCuestionario = async (req, reply) => {
  const leader = await LeaderBoard.findOne({ cuestionario: req.params.id });
  return leader;
};

const getLBByCuestionarioOrder = async (req, reply) => {
  const leader = await LeaderBoard.aggregate([
    {
      $match: {
        cuestionario: ObjectId(`${req.params.id}`),
      },
    },

    { $unwind: '$participantes' },
    { $project: { _id: 0, participantes: 1 } },
    {
      $sort: {
        'participantes.puntos': -1,
        'participantes.minuto': 1,
        'participantes.segundo': 1,
      },
    },
  ]);
  return leader;
};

module.exports = {
  getLeaderBoards,
  getLeaderBoard,
  createLeaderBoard,
  updateLeaderBoard,
  deleteLeaderBoard,
  getLeaderBoardByCuestionario,
  getLBByCuestionarioOrder,
};
