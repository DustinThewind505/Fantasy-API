const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRoutes = require('../auth/authRouter');
const vampireRoutes = require('./Vampires/vampiresRouter');
const slayerRoutes = require('./Slayers/slayersRouter');

const server = express();
server.use(express.json());
server.use(morgan('tiny'));
server.use(cors());

server.use('/auth', userRoutes);
server.use('/vampires', vampireRoutes);
server.use('/slayers', slayerRoutes);

module.exports = server;
