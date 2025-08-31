// import express module
const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const bodyParser = require('body-parser');

// create an express application
const app = express();

// middleware to parse JSON request bodies
// app.use(express.json());
app.use(bodyParser.json());

// define a route
app.use('/todos', todoRouter);

// export the app for use in other files
module.exports = app;