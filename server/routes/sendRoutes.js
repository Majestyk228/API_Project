//IMPORTS
const send = require('../services/send.js');
const express = require('express');
sendRouter = express.Router();

// =============================================
// TODO getSend
sendRouter.get('/:id', async function (_, res) {
	try {
		res.send(await send.getSend(req.params.id));
	} catch (error) {
		console.error('Error while getting Send', err.message);
		next(err);
	}
});
// TODO getAllSend
sendRouter.get('/', async function (_, res) {
	try {
		res.send(await send.getAllSend());
	} catch (error) {
		console.error('Error while getting Send', err.message);
		next(err);
	}
});

// TODO insertSend
sendRouter.post('/', async function (req, res, next) {
	try {
		res.send(await send.insertSend(req.body));
	} catch (error) {
		console.error('Error while creating Send');
		next(error);
	}
});

// TODO deleteSend
sendRouter.delete('/:id', (req, res) => {
	const id = req.query.id;

	res.send(send.deleteSend(id));
});

// TODO updateSend
sendRouter.put('/', async function (req, res) {
	try {
		res.send(await send.updateSend(req.body));
	} catch (error) {
		console.error('Error while updating Send');
		next(error);
	}
});
// =============================================

module.exports = sendRouter;
