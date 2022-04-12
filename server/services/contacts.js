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
    const requete = "INSERT INTO contact (id, name, firstName, lastName, mail, creationDate) VALUES (NULL, '" + contactReq.name + "', '" + contactReq.firstName + "', '" + contactReq.lastName + "', '" + contactReq.mail + "','" + today + "');";

    console.log("\n\n" + requete + "\n\n");

    const results = await db.query(requete, "");

    let message = 'Error in creating programming language';

    if (result.affectedRows) {
        message = 'Programming language created successfully';
    }

    return { message };
}

module.exports = {
    getAllContacts,
    insertContact
};
