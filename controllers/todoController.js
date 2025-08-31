const notes = require('../data');

const todoController = {
    getTodos: (req, res) => {
        res.json(notes);
    }
}

module.exports = todoController;