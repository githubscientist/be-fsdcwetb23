// import express module
const express = require('express');
const todoRouter = require('./routes/todoRoutes');

// create an express application
const app = express();

// define a route
app.use('/todos', todoRouter);

// export the app for use in other files
module.exports = app;