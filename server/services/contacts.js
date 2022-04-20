//IMPORTS
const db = require('./database.js');

//getting current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;


// =================================================================================


//gets all Contacts
async function getAllContacts() {
    const rows = await db.query("SELECT * FROM contact;", "");
    return rows;
};



//gets one contact from id passed in parameter
async function getContact(id) {
    const rows = await db.query("SELECT * FROM contact where id = '" + id + "';", "");
    return rows;
};



//adds one contact in db from request body passed in parameter
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
};



//deletes the contact specified in id passed in parameter
async function deleteContact(id) {
    //SQL query structure
    console.log(id);
    const requete = 'DELETE FROM contact where id ="' + id + '";';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in deleting contact';

    if (results.affectedRows) {
        message = 'Contact deleted successfully';
    }

    return { message };
};



//updates the Contact specified in request body passed in parameter
async function updateContact(contactReq) {
    //SQL query structure
    const requete = 'UPDATE contact SET name = "' + contactReq.name + '", firstName = "' + contactReq.firstName + '", lastName = "' + contactReq.lastName + '", mail = "' + contactReq.mail + '", creationDate = "' + today + '" WHERE id = "' + contactReq.id + '"';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in updating contact';

    if (results.affectedRows) {
        message = 'Contact updated successfully';
    }

    return { message };
};


// =================================================================================

//EXPORTS
module.exports = {
    getAllContacts,
    insertContact,
    getContact,
    deleteContact,
    updateContact
};
