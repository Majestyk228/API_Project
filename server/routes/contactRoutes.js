//IMPORTS
const contact = require('../services/contacts.js');
const express = require('express');
contactRouter = express.Router();

// =============================================
// TODO getContact 
contactRouter.get('/:id', async function (req, res, next) {
	try {
		res.send(await contact.getContact(req.params.id));
	} catch (error) {
		console.error('Error while getting contact', error.message);
		next(error);
	}
});
//getAllContacts
contactRouter.get('/', async function (_, res, next) {
	try {
		res.send(await contact.getAllContacts());
	} catch (error) {
		console.error('Error while getting contacts', error.message);
		next(error);
	}
});

//getContacts
contactRouter.get('/:id', async function (req, res, next) {
	try {
		res.send(await contact.getContact(req.query.id));
	} catch (error) {
		console.error('Error while getting contact', error.message);
		next(error);
	}
});

//insertContact
contactRouter.post('/', async function (req, res, next) {
	try {
		res.send(await contact.insertContact(req.body));
	} catch (error) {
		console.error('Error while creating contact');
		next(error);
	}
});

// TODO deleteContact 
contactRouter.delete('/:id', async function (req, res, next) {
	try {
		res.send(contact.deleteContact(req.params.id));
	} catch (error) {
		console.error('Error while deleting contact');
		next(error);
	}
});

// TODO updateContact
contactRouter.put('/', async function (req, res, next) {
	try {
		res.send(await contact.updateContact(req.body));
	} catch (error) {
		console.error('Error while updating contact');
		next(error);
	}
});

// =============================================

module.exports = contactRouter;
