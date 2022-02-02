const {
  getLeaderBoards,
  getLeaderBoard,
  createLeaderBoard,
  deleteLeaderBoard,
  updateLeaderBoard,
  getLeaderBoardByCuestionario,
  getLBByCuestionarioOrder,
} = require('../controllers/leaderboard.controller');

const route = [
  {
    url: '/leaderboard',
    method: 'GET',
    handler: getLeaderBoards,
  },
  {
    url: '/leaderboard/:id',
    method: 'GET',
    handler: getLeaderBoard,
  },
  {
    url: '/leaderboard',
    method: 'POST',
    handler: createLeaderBoard,
  },
  {
    url: '/leaderboard/:id',
    method: 'DELETE',
    handler: deleteLeaderBoard,
  },
  {
    url: '/leaderboard/:id',
    method: 'PUT',
    handler: updateLeaderBoard,
  },
  {
    url: '/leaderboard/c/:id',
    method: 'GET',
    handler: getLeaderBoardByCuestionario,
  },
  {
    url: '/leaderboard/l/:id',
    method: 'GET',
    handler: getLBByCuestionarioOrder,
  },
];

module.exports = route;
