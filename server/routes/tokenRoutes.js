//IMPORTS
const express = require('express');
const jwt = require('../../utils/jwt.utils.js');
tokenRouter = express.Router();

// =================================================================================

// * getTokenRoute
tokenRouter.get('/', async function (_, res, next) {
	try {
		//console.log(here);
		res.json({ "token": await jwt.createToken() });
	} catch (error) {
		console.error('Error while creating token');
		next(error);
	}
});

// =================================================================================

module.exports = tokenRouter;
