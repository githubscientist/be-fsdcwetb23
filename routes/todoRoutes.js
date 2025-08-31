const express = require('express');
const { getTodos, getTodoByID, createTodo, updateTodo, deleteTodoByID } = require('../controllers/todoController');

// create a router object
const todoRouter = express.Router();

// define routes for todos resource
todoRouter.get('/', getTodos);
todoRouter.get('/:id', getTodoByID);
todoRouter.post('/', createTodo);
todoRouter.put('/:id', updateTodo);
todoRouter.delete('/:id', deleteTodoByID);

// export the router
module.exports = todoRouter;