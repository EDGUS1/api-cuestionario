const fastify = require('fastify')({
  logger: true,
});

require('./database');

fastify.get('/', (req, reply) => {
  reply.send({ hello: '2022' });
});

const start = async () => {
  fastify.listen(3000);
  fastify.log.info(`server listen on ${fastify.server.address}`);
};

start();
