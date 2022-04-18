//IMPORTS
const messages = require('../services/messages.js');
const express = require('express');
messageRouter = express.Router();

// =============================================
// TODO getMessages
messageRouter.get('/:id', async function (req, res, next) {
	try {
		res.send(await messages.getMessages(req.params.id));
	} catch (error) {
		console.error('Error while getting Messages', error.message);
		next(error);
	}
});
// TODO getAllMessages
messageRouter.get('/', async function (err, res, next) {
	try {
		res.send(await messages.getAllMessages());
	} catch (error) {
		console.error('Error while getting Messages', error.message);
		next(error);
	}
});

// TODO insertMessages
messageRouter.post('/', async function (req, res, next) {
	try {
		res.send(await messages.insertMessages(req.body));
	} catch (error) {
		console.error('Error while creating Messages');
		next(error);
	}
});

// TODO deleteMessages 
messageRouter.delete('/:id', async function (req, res, next) {
	try {
		res.send(await messages.deleteMessages(req.params.id));
	} catch (error) {
		console.error('Error while deleting Messages', error.message);
		next(error);
	}
});

// TODO updateMessages
messageRouter.put('/', async function (req, res, next) {
	try {
		res.send(await messages.updateMessages(req.body));
	} catch (error) {
		console.error('Error while updating Messages');
		next(error);
	}
});
// =============================================

module.exports = messageRouter;
