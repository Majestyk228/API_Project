//IMPORTS
const model = require('../services/model.js');
const express = require('express');
modelRouter = express.Router();

// =============================================
// TODO getModel
modelRouter.get('/:id', async function (req, res, next) {
	try {
		res.send(await model.getModel(req.params.id));
	} catch (error) {
		console.error('Error while getting Model', error.message);
		next(error);
	}
});
// TODO getAllModel
modelRouter.get('/', async function (_, res) {
	try {
		res.send(await model.getAllModel());
	} catch (error) {
		console.error('Error while getting Model', err.message);
		next(err);
	}
});

// TODO insertModel
modelRouter.post('/', async function (req, res, next) {
	try {
		res.send(await model.insertModel(req.body));
	} catch (error) {
		console.error('Error while creating Model');
		next(error);
	}
});

// TODO deleteModel
modelRouter.delete('/:id', (req, res) => {
	const id = req.params.id;

	res.send(model.deleteModel(id));
});

// TODO updateModel
modelRouter.put('/', async function (req, res) {
	try {
		res.send(await model.updateModel(req.body));
	} catch (error) {
		console.error('Error while updating Model');
		next(error);
	}
});
// =============================================

module.exports = modelRouter;
