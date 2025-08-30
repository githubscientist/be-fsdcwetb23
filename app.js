// import express module
const express = require('express');
const router = require('./routes/router');

// create an express application
const app = express();

// define a route
app.use('/', router);

// export the app for use in other files
module.exports = app;