const express = require('express');
const routes = require('./api/routes');

const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

const server = express();

server.use(express.json(), helmet(), cors(), logger('dev'));
server.use('/api', routes);

module.exports = server;