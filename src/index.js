require('dotenv').config();

const fastify = require('fastify')({
  logger: true,
});
fastify.register(require('fastify-cors'), {
  // put your options here
});

require('./database');
const userRoute = require('./routes/user.routes');
const leaderRoute = require('./routes/leaderboard.routes');
const cuestionarioRoute = require('./routes/cuestionario.routes');

fastify.get('/', (req, reply) => {
  reply.send({ hello: '2022' });
});

userRoute.forEach(r => fastify.route(r));
leaderRoute.forEach(r => fastify.route(r));
cuestionarioRoute.forEach(r => fastify.route(r));

const start = async () => {
  fastify.listen(3001);
  fastify.log.info(`server listen on ${fastify.server.address}`);
};

start();
