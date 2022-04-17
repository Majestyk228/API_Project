//IMPORTS
const stats = require('../services/stats.js');
const express = require('express');
statsRouter = express.Router();

// =============================================

// TODO : CONFIGURE ROUTES AFTER DEFINING FUNCTION
statsRouter.get('/', async function (req, res, next) {
	res.send("Statistics will be added soon...");
});

// =============================================

module.exports = statsRouter;
