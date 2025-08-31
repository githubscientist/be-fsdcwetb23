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

            // push the new todo object to the todos array
            todos.push(newTodo);

            // send the successful response with the new todo
            res.status(201).json({
                message: 'new todo created successfully',
                data: newTodo
            })
        } catch (error) {
            res.status(500).json({ message: 'error creating a new todo' });
        }
    },
    updateTodo: async (req, res) => {
        try {
            // get the id from the request parameters
            const todoID = req.params.id;

            // get the content and isCompleted from the equest body
            const { content, isCompleted } = req.body;

            const todoIndex = todos.findIndex(todo => todo.id === todoID);

            if (todoIndex !== -1) {
                // update the todo object at the found index
                if (content !== undefined) {
                    todos[todoIndex].content = content;
                }

                if (isCompleted !== undefined) {
                    todos[todoIndex].isCompleted = isCompleted;
                }

                res.json({ message: `todo with id:${todoID} updated successfully`, data: todos[todoIndex] });
            } else {
                return res.status(404).json({ message: `todo with id:${todoID} is not found` });
            }
        } catch (error) {
            res.status(500).json({ message: 'error updating the todo by ID' });
        }
    },
    deleteTodoByID: async (req, res) => {
        try {
            // get the id from the request parameters
            const todoID = req.params.id;

            // find the index of the todo with the matching id
            const todoIndex = todos.findIndex(todo => todo.id === todoID);

            if (todoIndex !== -1) {
                // remove the todo object from the array at the found index
                const deletedTodo = todos.splice(todoIndex, 1);

                res.json({ message: `todo with id:${todoID} deleted successfully`, data: deletedTodo[0] });
            } else {
                return res.status(404).json({ message: `todo with id:${todoID} is not found` });
            }
        } catch (error) {
            res.status(500).json({ message: 'error deleting the todo by ID' });
        }
    }
}

module.exports = todoController;