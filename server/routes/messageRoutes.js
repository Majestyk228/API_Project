//IMPORTS
const message = require('../services/messages.js');
const express = require('express');
messageRouter = express.Router();

// =============================================
// TODO getMessages
messageRouter.get('/:id', async function (_, res) {
	try {
		res.send(await messages.getMessages(req.params.id));
	} catch (error) {
		console.error('Error while getting Messages', err.message);
		next(err);
	}
});
// TODO getAllMessages
messageRouter.get('/', async function (_, res) {
	try {
		res.send(await messages.getAllMessages());
	} catch (error) {
		console.error('Error while getting Messages', err.message);
		next(err);
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
messageRouter.delete('/:id', (req, res) => {
	const id = req.query.id;

	res.send(messages.deleteMessages(id));
});

// TODO updateMessages
messageRouter.put('/', async function (req, res) {
	try {
		res.send(await messages.updateMessages(req.body));
	} catch (error) {
		console.error('Error while updating Messages');
		next(error);
	}
});
// =============================================

module.exports = messageRouter;
