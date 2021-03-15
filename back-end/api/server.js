const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const server = express();
server.use(express.json());
server.use(morgan('tiny'));
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).send(`<h1>Practice app running</h1>`)
})

module.exports = server;
