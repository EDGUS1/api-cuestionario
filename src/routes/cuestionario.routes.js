const route = [
  {
    url: '/pregunta',
    method: 'GET',
    handler: getPreguntas,
  },
  {
    url: '/pregunta/:id',
    method: 'GET',
    handler: (req, reply) => {
      reply.send(`product: ${req.params.id}`);
    },
  },
  {
    url: '/pregunta',
    method: 'POST',
    handler: savePregunta,
  },
];

module.exports = route;
