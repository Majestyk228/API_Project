// * IMPORTS
const mysql = require('mysql2');
const express = require('express');
////const contact = require('./controllers/contacts.js');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = require('./routes/routes.js');

// * Tools
/////var today = new Date();
dotenv.config();

//APP
const app = express();
const port = process.env.PORT || 3000;

// * Middlewares
app.use(bodyParser.json());
app.use("/", router);

// * Écoute du serveur
app.listen(port, () => {
    console.log("port '" + port + "' en écoute");
})
