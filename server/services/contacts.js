const db = require('./database.js');
const config = require('../../config/config.js');

//gives the list of All users on the platform
async function getAllContacts() {
    const rows = await db.query("SELECT * FROM contact;", "");
    return rows;
}

module.exports = {
    getAllContacts
}