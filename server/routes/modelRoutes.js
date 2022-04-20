//IMPORTS
const model = require('../services/model.js');
const express = require('express');
modelRouter = express.Router();

// =================================================================================


// * getModel
modelRouter.get('/:id', async function (req, res, next) {
	try {
		res.send(await model.getModel(req.params.id));
	} catch (error) {
		console.error('Error while getting Model', error.message);
		next(error);
	}
});


// * getAllModel
modelRouter.get('/', async function (err, res, next) {
	try {
		res.send(await model.getAllModel());
	} catch (err) {
		console.error('Error while getting Model', error.message);
		next(error);
	}
});


// * insertModel
modelRouter.post('/', async function (req, res, next) {
	try {
		res.send(await model.insertModel(req.body));
	} catch (error) {
		console.error('Error while creating Model');
		next(error);
	}
});


// * deleteModel
modelRouter.delete('/:id', async function (req, res, next) {
	const id = req.params.id;

	try {
		res.send(model.deleteModel(id));
	} catch (error) {
		console.error('Error while deleting Model');
		next(error);
	}
});


// * updateModel
modelRouter.put('/', async function (req, res, next) {
	try {
		res.send(await model.updateModel(req.body));
	} catch (error) {
		console.error('Error while updating Model');
		next(error);
	}
});


// =================================================================================

module.exports = modelRouter;
