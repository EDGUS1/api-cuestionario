require('dotenv').config();

const fastify = require('fastify')({
  logger: true,
});

require('./database');
const userRoute = require('./routes/user.routes');

fastify.get('/', (req, reply) => {
  reply.send({ hello: '2022' });
});

userRoute.forEach(r => fastify.route(r));

const start = async () => {
  fastify.listen(3000);
  fastify.log.info(`server listen on ${fastify.server.address}`);
};

start();
