const express = require('express');
const { getTodos, getTodoByID } = require('../controllers/todoController');

// create a router object
const todoRouter = express.Router();

// define routes for todos resource
todoRouter.get('/', getTodos);
todoRouter.get('/:id', getTodoByID);

// export the router
module.exports = todoRouter;