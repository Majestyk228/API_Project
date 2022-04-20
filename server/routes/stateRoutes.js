//IMPORTS
const state = require('../services/state.js');
const express = require('express');
stateRouter = express.Router();

// =================================================================================


// * getState
stateRouter.get('/:id', async function (req, res, next) {
	try {
		res.send(await state.getState(req.params.id));
	} catch (error) {
		console.error('Error while getting State', error.message);
		next(error);
	}
});


// * getAllState
stateRouter.get('/', async function (_, res, next) {
	try {
		res.send(await state.getAllState());
	} catch (error) {
		console.error('Error while getting State', error.message);
		next(error);
	}
});


// * insertState
stateRouter.post('/', async function (req, res, next) {
	try {
		res.send(await state.insertState(req.body));
	} catch (error) {
		console.error('Error while creating State');
		next(error);
	}
});


// * deleteState
stateRouter.delete('/:id', async function (req, res, next) {
	const id = req.params.id;
	try {
		res.send(state.deleteState(id));
	} catch (error) {
		console.error('Error while deleting State');
		next(error);
	}
});


// * updateState
stateRouter.put('/', async function (req, res, next) {
	try {
		res.send(await state.updateState(req.body));
	} catch (error) {
		console.error('Error while updating State');
		next(error);
	}
});


// =================================================================================

module.exports = stateRouter;
