//IMPORTS
const db = require('./database.js');


// =================================================================================


//gets All ContactLists
async function getAllContactList() {
	const rows = await db.query("SELECT * FROM rel_contact_list;", "");
	return rows;
};



//gets one contactList from id passed in parameter
async function getContactList(id) {
	const rows = await db.query("SELECT * FROM rel_contact_list where id = '" + id + "';", "");
	return rows;
};



//adds one contactList in db from request body passed in parameter
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
};



//deletes the state specified by 2 ids passed in parameters
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
};



//updates the ContactList specified in request body passed in parameter
async function updateContactList(contactListReq) {
	//SQL query structure
	const requete = 'UPDATE rel_contact_list SET label = "' + contactListReq.label + '" WHERE id = "' + contactListReq.id + '" and id_contact = "' + contactListReq.id_contact + '";';

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
	getAllContactList,
	insertContactList,
	getContactList,
	deleteContactList,
	updateContactList
};
