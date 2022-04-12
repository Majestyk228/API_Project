//IMPORTS
const contact = require('../services/contacts.js');
const express = require('express');
const router = express.Router();

//CONTACTS ROUTES
//getAllContacts
router.get('/contacts', async function (_, res) {
    try {
        res.send(await contact.getAllContacts());
    } catch (error) {
        console.error(`Error while getting users `, err.message);
        next(err);
    }
});

//insertContact
router.post('/contacts', async function (req, res, next) {
    //const { name, firstname, lastname, mail } = req.body;

    try {
        res.send(await contact.insertContact(req.body));
    } catch (error) {
        console.error(`Error while creating programming language`);
        next(error);
    }
});

//deleteContact
router.delete('/contacts/:id', (req, res) => {
    const id = req.query.id;

    res.send(contact.deleteContact(id));
})


//Routes Listes

//Routes Messages

//Routes Models

//Routes User

module.exports = router;
