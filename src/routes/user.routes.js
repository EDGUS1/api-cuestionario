const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require('../controllers/user.controller');

const route = [
  {
    url: '/user',
    method: 'GET',
    handler: getUsers,
  },
  {
    url: '/user/:id',
    method: 'GET',
    handler: getUser,
  },
  {
    url: '/user',
    method: 'POST',
    handler: createUser,
  },
  {
    url: '/user/:id',
    method: 'DELETE',
    handler: deleteUser,
  },
  {
    url: '/user/:id',
    method: 'PUT',
    handler: updateUser,
  },
];

module.exports = route;
