// import express
const express = require('express');
const { index } = require('../controllers/controller');

// create a router object
const router = express.Router();

// define a route
router.get('/', index);

// export the router object
module.exports = router;