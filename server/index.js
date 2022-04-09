//IMPORTS
const mysql = require('mysql');
const express = require('express');
const contact = require('./controllers/contacts/contacts.js');
const dotenv = require('dotenv');

//Tools
var today = new Date();
dotenv.config();

//APP
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(bodyParser.json());
app.use(router);

//Écoute du serveur
app.listen(port, () => {
    console.log("port '" + port + "' en écoute");
})