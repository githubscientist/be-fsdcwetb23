const todos = require('../data');

const todoController = {
    getTodos: async (req, res) => {
        try {
            res.json(todos);
        } catch (error) {
            res.status(500).json({ message: 'error fetching all todos' });
        }
    },
    getTodoByID: async (req, res) => {
        try {
            // get the id from the request parameters
            const todoID = req.params.id;

            // find the todo with the matching id
            const todo = todos.find(todo => todo.id === todoID);

            // send the found todo as a JSON response
            if (todo) {
                res.json(todo);
            } else {
                res.status(404).json({ message: `note with id:${todoID} is not found` });
            }
        } catch (error) {
            res.status(500).json({ message: 'error fetching the todo by ID' });
        }
    },
    createTodo: async (req, res) => {
        try {
            // get the content from the request body
            const { content } = req.body;

            // generate a new id for the todo from the last todo item in the array
            const newID = parseInt(todos[todos.length - 1].id) + 1;

            // create a timestamp for the createdAt field with 2025-07-25T19:13:03.665Z
            const createdAt = new Date().toISOString();

            // create a new todo object
            const newTodo = {
                id: newID.toString(),
                createdAt: createdAt,
                content: content,
                isCompleted: false
            }

            // pushe the new todo object to the todos array
            todos.push(newTodo);

            // send the successful response with the new todo
            res.status(201).json({
                message: 'new todo created successfully',
                data: newTodo
            })
        } catch (error) {
            res.status(500).json({ message: 'error creating a new todo' });
        }
    }
}

module.exports = todoController;