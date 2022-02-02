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
    url: '/.netlify/functions/api/leaderboard',
    method: 'GET',
    handler: getLeaderBoards,
  },
  {
    url: '/.netlify/functions/api/leaderboard/:id',
    method: 'GET',
    handler: getLeaderBoard,
  },
  {
    url: '/.netlify/functions/api/leaderboard',
    method: 'POST',
    handler: createLeaderBoard,
  },
  {
    url: '/.netlify/functions/api/leaderboard/:id',
    method: 'DELETE',
    handler: deleteLeaderBoard,
  },
  {
    url: '/.netlify/functions/api/leaderboard/:id',
    method: 'PUT',
    handler: updateLeaderBoard,
  },
  {
    url: '/.netlify/functions/api/leaderboard/c/:id',
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
