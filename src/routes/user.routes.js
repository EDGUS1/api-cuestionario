const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require('../controllers/user.controller');

const route = [
  {
    url: '/.netlify/functions/api/user',
    method: 'GET',
    handler: getUsers,
  },
  {
    url: '/.netlify/functions/api/user/:id',
    method: 'GET',
    handler: getUser,
  },
  {
    url: '/.netlify/functions/api/user',
    method: 'POST',
    handler: createUser,
  },
  {
    url: '/.netlify/functions/api/user/:id',
    method: 'DELETE',
    handler: deleteUser,
  },
  {
    url: '/.netlify/functions/api/user/:id',
    method: 'PUT',
    handler: updateUser,
  },
];

module.exports = route;
