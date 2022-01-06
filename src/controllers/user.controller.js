const Usuario = require('../models/user.model');

const getUsers = async (req, reply) => {
  const usuarios = await Usuario.find();
  return usuarios;
};

const getUser = async (req, reply) => {
  const user = await Usuario.findById(req.params.id);
  return reply.code(200).send(user);
};

const createUser = async (req, reply) => {
  const newUser = new Usuario(req.body);
  await newUser.save();
  reply.code(201).send(newUser);
};

const updateUser = async (req, reply) => {
  const user = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return user;
};

const deleteUser = async (req, reply) => {
  await Usuario.findByIdAndDelete(req.params.id);
  reply.code(204).send();
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
