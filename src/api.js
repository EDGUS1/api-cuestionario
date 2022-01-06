const serverless = require('serverless-http');
require('dotenv').config();

const fastify = require('fastify')({
  logger: true,
});

require('./database');
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
