// import express module
const express = require('express');

// create an express application
const app = express();

// define a route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, Express!' });
});

// export the app for use in other files
module.exports = app;