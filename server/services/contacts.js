const db = require('./database.js');
const config = require('../../config/config.js');

//récupération de la date courante
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

//gives the list of All users on the platform
async function getAllContacts() {
    const rows = await db.query("SELECT * FROM contact;", "");
    return rows;
}

async function insertContact(contactReq) {
    //SQL query structure
    const requete = 'INSERT INTO contact (id, name, firstName, lastName, mail, creationDate) VALUES (null, "' + contactReq.name + '", "' + contactReq.firstName + '", "' + contactReq.lastName + '", "' + contactReq.mail + '","' + today + '");';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in creating contact';

    if (results.affectedRows) {
        message = 'Contact created successfully';
    }

    return { message };
}

module.exports = {
    getAllContacts,
    insertContact
};
