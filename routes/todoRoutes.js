const express = require('express');
const { getTodos } = require('../controllers/todoController');

// create a router object
const todoRouter = express.Router();

// define routes for todos resource
todoRouter.get('/', getTodos);

// export the router
module.exports = todoRouter;