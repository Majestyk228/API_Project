//IMPORTS
const list = require('../services/list.js');
const express = require('express');
listRouter = express.Router();

// =================================================================================


// * getList 
listRouter.get('/:id', async function (req, res, next) {
	try {
		res.send(await list.getList(req.params.id));
	} catch (error) {
		console.error('Error while getting list', error.message);
		next(error);
	}
});


// * getAllList
listRouter.get('/', async function (_, res, next) {
	try {
		res.send(await list.getAllList());
	} catch (error) {
		console.error('Error while getting lists', error.message);
		next(error);
	}
});


// * insertList
listRouter.post('/', async function (req, res, next) {
	try {
		res.send(await list.insertList(req.body));
	} catch (error) {
		console.error('Error while creating List');
		next(error);
	}
});


// * deleteList 
listRouter.delete('/:id', async function (req, res, next) {
	const id = req.params.id;
	try {
		res.send(list.deleteList(id));
	} catch (error) {
		console.error('Error while deleting List');
		next(error);
	}
});


// * updateList
listRouter.put('/', async function (req, res, next) {
	try {
		res.send(await list.updateList(req.body));
	} catch (error) {
		console.error('Error while updating List');
		next(error);
	}
});


// =================================================================================

module.exports = listRouter;
