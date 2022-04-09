//IMPORTS
//const contact = require('../controllers/contacts/contacts.js');
const contact = require('../services/contacts.js');
const express = require('express');

const router = express.Router();

//CONTACTS ROUTES
//getAllContacts
router.get('/contacts', (_, res) => {
    res.send(contact.getAllContacts());
});

//insertContact
router.post('/contacts', (req, res) => {
    const { name, firstname, lastname, mail } = req.body;

    const r = contact.insertContact(name, firstname, lastname, mail);

    if (r instanceof Error) {
        res.status(400);
        res.send(r.message);
        res.end();

        return;
    }

    res.send(r);
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