//IMPORTS
const messages = require('../services/messages.js');
const express = require('express');
const jwt = require('../../utils/jwt.utils.js');
messageRouter = express.Router();

// =================================================================================


// * getMessages
messageRouter.get('/:id', async function (req, res, next) {
	try {
		res.send(await messages.getMessages(req.params.id));
	} catch (error) {
		console.error('Error while getting Messages', error.message);
		next(error);
	}
});


// * getAllMessages
messageRouter.get('/', async function (err, res, next) {
	try {
		res.send(await messages.getAllMessages());
	} catch (error) {
		console.error('Error while getting Messages', error.message);
		next(error);
	}
});


// * insertMessages
messageRouter.post('/', async function (req, res, next) {
	try {
		res.send(await messages.insertMessages(req.body));
	} catch (error) {
		console.error('Error while creating Messages');
		next(error);
	}
});


// * deleteMessages 
messageRouter.delete('/:id', async function (req, res, next) {
	try {
		res.send(await messages.deleteMessages(req.params.id));
	} catch (error) {
		console.error('Error while deleting Messages', error.message);
		next(error);
	}
});


// * updateMessages
messageRouter.put('/', async function (req, res, next) {
	try {
		res.send(await messages.updateMessages(req.body));
	} catch (error) {
		console.error('Error while updating Messages');
		next(error);
	}
});


// * updateMessages
messageRouter.put('/send', async function (req, res, next) {
	try {
		res.send(await messages.updateMessageStatus(req.body));
	} catch (error) {
		console.error('Error while updating Messages');
		next(error);
	}
});


// * getTokenRoute
messageRouter.get('/token', async function (_, res, next) {
	try {
		console.log(here);
		res.send(await jwt.createToken());
	} catch (error) {
		console.error('Error while creating token');
		next(error);
	}
});


// =================================================================================

module.exports = messageRouter;
