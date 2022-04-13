//IMPORTS
const contact = require('../services/contacts.js');
const list = require('../services/list.js');
const messages = require('../services/messages.js');
const models = require('../services/models.js');
const user =require('../services/user.js');
const send =require('../services/send.js');
const contactList=require('../services/contactList.js');

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
router.put('/contacts', async function(req,res)  {
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
router.put('/list', async function(req,res)  {
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
router.put('/messages', async function(req,res)  {
    try {
        res.send(await messages.updateMessages(req.body));
    } catch (error) {
        console.error('Error while updating Messages');
        next(error);
    }
});

//* Routes Models
// TODO getModels
router.get('/models/:id', async function (_, res) {
    try {
        res.send(await models.getModels(req.params.id));
    } catch (error) {
        console.error('Error while getting Models', err.message);
        next(err);
    }
});
// TODO getAllModels
router.get('/models', async function (_, res) {
    try {
        res.send(await models.getAllModels());
    } catch (error) {
        console.error('Error while getting Models', err.message);
        next(err);
    }
});

// TODO insertModels
router.post('/models', async function (req, res, next) {
    try {
        res.send(await models.insertModels(req.body));
    } catch (error) {
        console.error('Error while creating Models');
        next(error);
    }
});

// TODO deleteModels
router.delete('/models/:id', (req, res) => {
    const id = req.query.id;

    res.send(models.deleteMessages(id));
});

// TODO updateModels
router.put('/models', async function(req,res)  {
    try {
        res.send(await models.updateModels(req.body));
    } catch (error) {
        console.error('Error while updating Models');
        next(error);
    }
});

//* Routes User
// TODO getUser
router.get('/user/:id', async function (_, res) {
    try {
        res.send(await user.getUser(req.params.id));
    } catch (error) {
        console.error('Error while getting User', err.message);
        next(err);
    }
});
// TODO getAllUser
router.get('/user', async function (_, res) {
    try {
        res.send(await user.getAllUser());
    } catch (error) {
        console.error('Error while getting User', err.message);
        next(err);
    }
});

// TODO insertUser
router.post('/user', async function (req, res, next) {
    try {
        res.send(await user.insertUser(req.body));
    } catch (error) {
        console.error('Error while creating User');
        next(error);
    }
});

// TODO deleteUser
router.delete('/user/:id', (req, res) => {
    const id = req.query.id;

    res.send(user.deleteUser(id));
});

// TODO updateUser
router.put('/user', async function(req,res)  {
    try {
        res.send(await user.updateUser(req.body));
    } catch (error) {
        console.error('Error while updating User');
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
router.get('/user', async function (_, res) {
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
router.put('/send', async function(req,res)  {
    try {
        res.send(await user.updateSend(req.body));
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
router.put('/contactList', async function(req,res)  {
    try {
        res.send(await user.updateContactList(req.body));
    } catch (error) {
        console.error('Error while updating ContactList');
        next(error);
    }
});



module.exports = router;
