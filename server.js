const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(express.json());
server.use('/recipes', recipesRouter);

module.exports = server;
