//IMPORTS
const state = require('../services/state.js');
const express = require('express');
stateRouter = express.Router();

// =============================================
// TODO getState
stateRouter.get('/:id', async function (req, res, next) {
	try {
		res.send(await state.getState(req.params.id));
	} catch (error) {
		console.error('Error while getting State', error.message);
		next(error);
	}
});
// TODO getAllState
stateRouter.get('/', async function (_, res) {
	try {
		res.send(await state.getAllState());
	} catch (error) {
		console.error('Error while getting State', err.message);
		next(err);
	}
});

// TODO insertState
stateRouter.post('/', async function (req, res, next) {
	try {
		res.send(await state.insertState(req.body));
	} catch (error) {
		console.error('Error while creating State');
		next(error);
	}
});

// TODO deleteState
stateRouter.delete('/:id', (req, res) => {
	const id = req.params.id;

	res.send(state.deleteState(id));
});

// TODO updateState
stateRouter.put('/', async function (req, res) {
	try {
		res.send(await state.updateState(req.body));
	} catch (error) {
		console.error('Error while updating State');
		next(error);
	}
});
// =============================================

module.exports = stateRouter;
