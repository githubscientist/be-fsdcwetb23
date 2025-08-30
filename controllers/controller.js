const controller = {
    index: (req, res) => {
        res.json({ message: 'Hello, Controller!' });
    }
}

module.exports = {
    index: controller.index
}