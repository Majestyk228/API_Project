const db = require('./database.js');
////const config = require('../../config/config.js');

//gives the list of All users on the platform
async function getAllSend() {
	const rows = await db.query("SELECT * FROM send;", "");
	return rows;
}

async function getSend(id) {
	const rows = await db.query("SELECT * FROM send where id = '" + id + "';", "");
	return rows;
}

async function insertSend(contactListReq) {
	//SQL query structure
	const requete = 'INSERT INTO send (id, id_contact, label) VALUES ("' + contactListReq.id + '", "' + contactListReq.id_contact + '", "' + contactListReq.label + '");';

	//sending query
	const results = await db.query(requete, "");

	//message to output at the end of the function
	let message = 'Error in creating contact list';

	if (results.affectedRows) {
		message = 'Send created successfully';
	}

	return { message };
}

//delete the state
async function deleteSend(id, id_contact) {
	//SQL query structure
	const requete = 'DELETE FROM send where id ="' + id + '" ;';

	//sending query
	const results = await db.query(requete, "");

	//message to output at the end of the function
	let message = 'Error in deleting contact';

	if (results.affectedRows) {
		message = 'Send deleted successfully';
	}

	return { message };
}

//update the Contact
async function updateSend(contactListReq) {
	//SQL query structure
	const requete = 'UPDATE send SET label = "' + contactListReq.label + '" WHERE id = "' + contactListReq.id + '" and id_contact = "' + contactListReq.id_contact + '";';

	//sending query
	const results = await db.query(requete, "");

	//message to output at the end of the function
	let message = 'Error in updating contact';

	if (results.affectedRows) {
		message = 'Send updated successfully';
	}

	return { message };

}

module.exports = {
	getAllSend,
	insertSend,
	getSend,
	deleteSend,
	updateSend
};
