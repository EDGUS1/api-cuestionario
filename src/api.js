require('dotenv').config();

const fastify = require('fastify')({
  logger: true,
});
const serverless = require('serverless-http');
fastify.register(require('fastify-cors'), {
  // put your options here
});

require('./utils/database');
const userRoute = require('./routes/user.routes');
const leaderRoute = require('./routes/leaderboard.routes');
const cuestionarioRoute = require('./routes/cuestionario.routes');

fastify.get('/.netlify/functions/api', (req, reply) => {
  reply.send({ hello: '2022' });
});

userRoute.forEach(r => fastify.route(r));
leaderRoute.forEach(r => fastify.route(r));
cuestionarioRoute.forEach(r => fastify.route(r));

module.exports = fastify;
module.exports.handler = serverless(fastify);
/* const start = async () => {
  fastify.listen(3001);
  fastify.log.info(`server listen on ${fastify.server.address}`);
};

start(); */
