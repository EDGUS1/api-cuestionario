const LeaderBoard = require('../models/leaderboard.model');

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

module.exports = {
  getLeaderBoards,
  getLeaderBoard,
  createLeaderBoard,
  updateLeaderBoard,
  deleteLeaderBoard,
};
