const {
  getCuestionarios,
  getCuestionario,
  createCuestionario,
  deleteCuestionario,
  updateCuestionario,
  getCuestionarioByCode,
} = require('../controllers/cuestionario.controller');

const route = [
  {
    url: '/cuestionario',
    method: 'GET',
    handler: getCuestionarios,
  },
  {
    url: '/cuestionario/:id',
    method: 'GET',
    handler: getCuestionario,
  },
  {
    url: '/cuestionario',
    method: 'POST',
    handler: createCuestionario,
  },
  {
    url: '/cuestionario/:id',
    method: 'DELETE',
    handler: deleteCuestionario,
  },
  {
    url: '/cuestionario/:id',
    method: 'PUT',
    handler: updateCuestionario,
  },
  {
    url: '/cuestionario/code/:code',
    method: 'GET',
    handler: getCuestionarioByCode,
  },
];

module.exports = route;
