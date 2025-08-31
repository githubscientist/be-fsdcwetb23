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
    }
}

module.exports = todoController;