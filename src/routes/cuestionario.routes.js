const {
  getCuestionarios,
  getCuestionario,
  createCuestionario,
  deleteCuestionario,
  updateCuestionario,
} = require('../controllers/cuestionario.controller');

const route = [
  {
    url: '/.netlify/functions/api/cuestionario',
    method: 'GET',
    handler: getCuestionarios,
  },
  {
    url: '/.netlify/functions/api/cuestionario/:id',
    method: 'GET',
    handler: getCuestionario,
  },
  {
    url: '/.netlify/functions/api/cuestionario',
    method: 'POST',
    handler: createCuestionario,
  },
  {
    url: '/.netlify/functions/api/cuestionario/:id',
    method: 'DELETE',
    handler: deleteCuestionario,
  },
  {
    url: '/.netlify/functions/api/cuestionario/:id',
    method: 'PUT',
    handler: updateCuestionario,
  },
];

module.exports = route;
