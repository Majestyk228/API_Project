//IMPORTS
const contactList = require('../services/contactList.js');
const express = require('express');
contactListRouter = express.Router();

// =============================================
// TODO getContactList
contactListRouter.get('/:id', async function (_, res) {
	try {
		res.send(await contactList.getContacList(req.params.id));
	} catch (error) {
		console.error('Error while getting ContactList', err.message);
		next(err);
	}
});
// TODO getAllContactList
contactListRouter.get('/', async function (_, res) {
	try {
		res.send(await contactList.getAllContactList());
	} catch (error) {
		console.error('Error while getting ContactList', err.message);
		next(err);
	}
});

// TODO insertContactList
contactListRouter.post('/', async function (req, res, next) {
	try {
		res.send(await contactList.insertContactList(req.body));
	} catch (error) {
		console.error('Error while creating ContactList');
		next(error);
	}
});

// TODO deleteContactList
contactListRouter.delete('/:id', (req, res) => {
	const id = req.query.id;

	res.send(contactList.deleteContactList(id));
});

// TODO updateContactList
contactListRouter.put('/', async function (req, res) {
	try {
		res.send(await contactList.updateContactList(req.body));
	} catch (error) {
		console.error('Error while updating ContactList');
		next(error);
	}
});
// =============================================

module.exports = contactListRouter;
