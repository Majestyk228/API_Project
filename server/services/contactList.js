const db = require('./database.js');
////const config = require('../../config/config.js');

//gives the list of All users on the platform
async function getAllContactList() {
	const rows = await db.query("SELECT * FROM rel_contact_list;", "");
	return rows;
}

async function getContactList(id) {
	const rows = await db.query("SELECT * FROM rel_contact_list where id = '" + id + "';", "");
	return rows;
}

async function insertContactList(contactListReq) {
	//SQL query structure
	const requete = 'INSERT INTO rel_contact_list (id, id_contact, label) VALUES ("' + contactListReq.id + '", "' + contactListReq.id_contact + '", "' + contactListReq.label + '");';

	//sending query
	const results = await db.query(requete, "");

	//message to output at the end of the function
	let message = 'Error in creating contact list';

	if (results.affectedRows) {
		message = 'Contact list created successfully';
	}

	return { message };
}

//delete the state
async function deleteContactList(id, id_contact) {
	//SQL query structure
	const requete = 'DELETE FROM rel_contact_list where id ="' + id + '" and id_contact = "' + id_contact + '";';

	//sending query
	const results = await db.query(requete, "");

	//message to output at the end of the function
	let message = 'Error in deleting contact';

	if (results.affectedRows) {
		message = 'Contact deleted successfully';
	}

	return { message };
}

//update the Contact
async function updateContactList(contactListReq) {
	//SQL query structure
	const requete = 'UPDATE rel_contact_list SET id_contact = "' + contactListReq.id_contact + '", label = "' + contactListReq.label + '" WHERE id = "' + contactListReq.id + '"';

	//sending query
	const results = await db.query(requete, "");

	//message to output at the end of the function
	let message = 'Error in updating contact';

	if (results.affectedRows) {
		message = 'Contact updated successfully';
	}

	return { message };

}

module.exports = {
	getAllContactList,
	insertContactList,
	getContactList,
	deleteContactList,
	updateContactList
};
