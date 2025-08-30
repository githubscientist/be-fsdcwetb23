// import express module
const express = require('express');

// create an express application
const app = express();

// define a route
app.get('/', (req, res) => {
    res.send('Hello Express!');
});

// start the server on port 3001
app.listen(3001, 'localhost', () => {
    console.log(`Server is running at http://localhost:3001`);
});