const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const vampireRoutes = require('./Vampires/vampiresRouter');
const slayerRoutes = require('./Slayers/slayersRouter');

const server = express();
server.use(express.json());
server.use(morgan('tiny'));
server.use(cors());

server.use('/vampires', vampireRoutes);
server.use('/slayers', slayerRoutes);

server.get('/', (req, res) => {
    res.status(200).send(`<h1>Practice app running</h1>`)
})

module.exports = server;
