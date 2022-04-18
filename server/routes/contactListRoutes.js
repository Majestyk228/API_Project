//IMPORTS
const contactList = require('../services/contactList.js');
const express = require('express');
contactListRouter = express.Router();

// =============================================
// TODO getContactList
contactListRouter.get('/:id', async function (req, res, next) {
	try {
		res.send(await contactList.getContactList(req.params.id));
	} catch (error) {
		console.error('Error while getting ContactList', error.message);
		next(error);
	}
});
// TODO getAllContactList
contactListRouter.get('/', async function (_, res, next) {
	try {
		res.send(await contactList.getAllContactList());
	} catch (error) {
		console.error('Error while getting ContactList', error.message);
		next(error);
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
contactListRouter.delete('/:id/:id_contact', (req, res) => {
	const id = req.params.id;
	const id_contact = req.params.id_contact;

	res.send(contactList.deleteContactList(id, id_contact));
});

// TODO updateContactList
contactListRouter.put('/', async function (req, res, next) {
	try {
		res.send(await contactList.updateContactList(req.body));
	} catch (error) {
		console.error('Error while updating ContactList');
		next(error);
	}
});
// =============================================

module.exports = contactListRouter;
