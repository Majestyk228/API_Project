//IMPORTS
const contact = require('../services/contacts.js');
const list = require('../services/list.js');
const messages = require('../services/messages.js');
const model = require('../services/model.js');
const state = require('../services/state.js');
const send = require('../services/send.js');
const contactList = require('../services/contactList.js');

const express = require('express');
const router = express.Router();

// * CONTACTS ROUTES

// TODO getContact 
router.get('/contacts/:id', async function (_, res) {
    try {
        res.send(await contact.getContact(req.params.contact));
    } catch (error) {
        console.error('Error while getting contact', err.message);
        next(err);
    }
});
//getAllContacts
router.get('/contacts', async function (_, res) {
    try {
        res.send(await contact.getAllContacts());
    } catch (error) {
        console.error('Error while getting contacts', err.message);
        next(err);
    }
});

//insertContact
router.post('/contacts', async function (req, res, next) {
    try {
        res.send(await contact.insertContact(req.body));
    } catch (error) {
        console.error('Error while creating contact');
        next(error);
    }
});

// TODO deleteContact 
router.delete('/contacts/:id', (req, res) => {
    const id = req.query.id;

    res.send(contact.deleteContact(id));
});

// TODO updateContact
router.put('/contacts', async function (req, res) {
    try {
        res.send(await contact.updateContact(req.body));
    } catch (error) {
        console.error('Error while updating contact');
        next(error);
    }
});



//* LIST ROUTES
// TODO getList 
router.get('/list/:id', async function (_, res) {
    try {
        res.send(await list.getList(req.params.id));
    } catch (error) {
        console.error('Error while getting list', err.message);
        next(err);
    }
});
// TODO getAllList
router.get('/list', async function (_, res) {
    try {
        res.send(await list.getAllLists());
    } catch (error) {
        console.error('Error while getting lists', err.message);
        next(err);
    }
});

// TODO insertList
router.post('/list', async function (req, res, next) {
    try {
        res.send(await list.insertList(req.body));
    } catch (error) {
        console.error('Error while creating List');
        next(error);
    }
});

// TODO deleteList 
router.delete('/list/:id', (req, res) => {
    const id = req.query.id;

    res.send(list.deleteList(id));
});

// TODO updateList
router.put('/list', async function (req, res) {
    try {
        res.send(await list.updateList(req.body));
    } catch (error) {
        console.error('Error while updating List');
        next(error);
    }
});

//* Routes Messages
// TODO getMessages
router.get('/messages/:id', async function (_, res) {
    try {
        res.send(await messages.getMessages(req.params.id));
    } catch (error) {
        console.error('Error while getting Messages', err.message);
        next(err);
    }
});
// TODO getAllMessages
router.get('/messages', async function (_, res) {
    try {
        res.send(await messages.getAllMessages());
    } catch (error) {
        console.error('Error while getting Messages', err.message);
        next(err);
    }
});

// TODO insertMessages
router.post('/messages', async function (req, res, next) {
    try {
        res.send(await messages.insertMessages(req.body));
    } catch (error) {
        console.error('Error while creating Messages');
        next(error);
    }
});

// TODO deleteMessages 
router.delete('/messages/:id', (req, res) => {
    const id = req.query.id;

    res.send(messages.deleteMessages(id));
});

// TODO updateMessages
router.put('/messages', async function (req, res) {
    try {
        res.send(await messages.updateMessages(req.body));
    } catch (error) {
        console.error('Error while updating Messages');
        next(error);
    }
});

//* Routes Model
// TODO getModel
router.get('/model/:id', async function (_, res) {
    try {
        res.send(await model.getModel(req.params.id));
    } catch (error) {
        console.error('Error while getting Model', err.message);
        next(err);
    }
});
// TODO getAllModel
router.get('/model', async function (_, res) {
    try {
        res.send(await model.getAllModel());
    } catch (error) {
        console.error('Error while getting Model', err.message);
        next(err);
    }
});

// TODO insertModel
router.post('/model', async function (req, res, next) {
    try {
        res.send(await model.insertModel(req.body));
    } catch (error) {
        console.error('Error while creating Model');
        next(error);
    }
});

// TODO deleteModel
router.delete('/model/:id', (req, res) => {
    const id = req.query.id;

    res.send(model.deleteMessages(id));
});

// TODO updateModel
router.put('/model', async function (req, res) {
    try {
        res.send(await model.updateModel(req.body));
    } catch (error) {
        console.error('Error while updating Model');
        next(error);
    }
});

//* Routes State
// TODO getState
router.get('/state/:id', async function (_, res) {
    try {
        res.send(await state.getState(req.params.id));
    } catch (error) {
        console.error('Error while getting State', err.message);
        next(err);
    }
});
// TODO getAllState
router.get('/state', async function (_, res) {
    try {
        res.send(await state.getAllState());
    } catch (error) {
        console.error('Error while getting State', err.message);
        next(err);
    }
});

// TODO insertState
router.post('/state', async function (req, res, next) {
    try {
        res.send(await state.insertState(req.body));
    } catch (error) {
        console.error('Error while creating State');
        next(error);
    }
});

// TODO deleteState
router.delete('/state/:id', (req, res) => {
    const id = req.query.id;

    res.send(state.deleteState(id));
});

// TODO updateState
router.put('/state', async function (req, res) {
    try {
        res.send(await state.updateState(req.body));
    } catch (error) {
        console.error('Error while updating State');
        next(error);
    }
});

//* Routes Send
// TODO getSend
router.get('/send/:id', async function (_, res) {
    try {
        res.send(await send.getSend(req.params.id));
    } catch (error) {
        console.error('Error while getting Send', err.message);
        next(err);
    }
});
// TODO getAllSend
router.get('/send', async function (_, res) {
    try {
        res.send(await send.getAllSend());
    } catch (error) {
        console.error('Error while getting Send', err.message);
        next(err);
    }
});

// TODO insertSend
router.post('/send', async function (req, res, next) {
    try {
        res.send(await send.insertSend(req.body));
    } catch (error) {
        console.error('Error while creating Send');
        next(error);
    }
});

// TODO deleteSend
router.delete('/send/:id', (req, res) => {
    const id = req.query.id;

    res.send(send.deleteSend(id));
});

// TODO updateSend
router.put('/send', async function (req, res) {
    try {
        res.send(await send.updateSend(req.body));
    } catch (error) {
        console.error('Error while updating Send');
        next(error);
    }
});

//* Routes ContactList

// TODO getContactList
router.get('/contactList/:id', async function (_, res) {
    try {
        res.send(await contactList.getContacList(req.params.id));
    } catch (error) {
        console.error('Error while getting ContactList', err.message);
        next(err);
    }
});
// TODO getAllContactList
router.get('/contactList', async function (_, res) {
    try {
        res.send(await contactList.getAllContactList());
    } catch (error) {
        console.error('Error while getting ContactList', err.message);
        next(err);
    }
});

// TODO insertContactList
router.post('/contactList', async function (req, res, next) {
    try {
        res.send(await contactList.insertContactList(req.body));
    } catch (error) {
        console.error('Error while creating ContactList');
        next(error);
    }
});

// TODO deleteContactList
router.delete('/contactList/:id', (req, res) => {
    const id = req.query.id;

    res.send(contactList.deleteContactList(id));
});

// TODO updateContactList
router.put('/contactList', async function (req, res) {
    try {
        res.send(await contactList.updateContactList(req.body));
    } catch (error) {
        console.error('Error while updating ContactList');
        next(error);
    }
});



module.exports = router;
