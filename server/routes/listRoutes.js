//IMPORTS
const list = require('../services/list.js');
const express = require('express');
listRouter = express.Router();

// =============================================
// TODO getList 
listRouter.get('/:id', async function (_, res) {
	try {
		res.send(await list.getList(req.params.id));
	} catch (error) {
		console.error('Error while getting list', err.message);
		next(err);
	}
});
// TODO getAllList
listRouter.get('/', async function (_, res) {
	try {
		res.send(await list.getAllLists());
	} catch (error) {
		console.error('Error while getting lists', err.message);
		next(err);
	}
});

// TODO insertList
listRouter.post('/', async function (req, res, next) {
	try {
		res.send(await list.insertList(req.body));
	} catch (error) {
		console.error('Error while creating List');
		next(error);
	}
});

// TODO deleteList 
listRouter.delete('/:id', (req, res) => {
	const id = req.query.id;

	res.send(list.deleteList(id));
});

// TODO updateList
listRouter.put('/', async function (req, res) {
	try {
		res.send(await list.updateList(req.body));
	} catch (error) {
		console.error('Error while updating List');
		next(error);
	}
});
// =============================================

module.exports = listRouter;
