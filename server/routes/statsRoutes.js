//IMPORTS
const stats = require('../services/stats.js');
const express = require('express');
statsRouter = express.Router();

/*
	TotalUtilisateurs
	Total contacts
	total liste
	dernier message envoyé (id)
	nombre total de messages envoyés
	nombre de messages envoyés par type
*/

// =============================================

// TODO : Number of contacts
statsRouter.get('/contacts', async function (_, res, next) {
	try {
		res.send(await stats.contactCount());
	} catch (error) {
		console.error('Error while counting contacts');
		next(error);
	}
});


// TODO : Number of lists
statsRouter.get('/lists', async function (req, res, next) {
	try {
		res.send(await stats.listCount());
	} catch (error) {
		console.error('Error while counting lists');
		next(error);
	}
});


// TODO : Last message sent
statsRouter.get('/last_message', async function (req, res, next) {
	try {
		res.send(await stats.lastSentMessage());
	} catch (error) {
		console.error("Error while getting last message's id");
		next(error);
	}
});


// TODO : Number of messages sent
statsRouter.get('/messages', async function (req, res, next) {
	try {
		res.send(await stats.messageCount());
	} catch (error) {
		console.error('Error while counting sent messages');
		next(error);
	}
});


// TODO : Number of messages per type
statsRouter.get('/messages_per_type', async function (req, res, next) {
	try {
		res.send(await stats.messageCountType());
	} catch (error) {
		console.error('Error while counting messages');
		next(error);
	}
});

// =============================================

module.exports = statsRouter;
