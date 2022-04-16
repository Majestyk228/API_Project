const db = require('./database.js');
const config = require('../../config/config.js');

//get current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

//give the list from the id given
async function getList(id) {
	const row = await db.query("Select * FROM list WHERE id='" + id + "';");
	return row;

}
//gives the list of All lists on the platform
async function getAllList() {
	const rows = await db.query("SELECT * FROM list;", "");
	return rows;
}
//insert the list in the database
async function insertList(listReq) {
	//SQL query structure
	const requete = 'INSERT INTO list (id, name, description, creationDate) VALUES (NULL, "' + listReq.name + '" , "' + listReq.description + '", "' + today + '");';

	//sending query
	const results = await db.query(requete, "");

	//message to output at the end of the function
	let message = 'Error in creating list';

	if (results.affectedRows) {
		message = 'List created successfully';
	}

	return { message };

}
//delete the model
async function deleteList(id) {
	//SQL query structure
	const requete = 'DELETE FROM list WHERE id="' + id + '";';

	//sending query
	const results = await db.query(requete, "");

	//message to output at the end of the function
	let message = 'Error in deleting list';

	if (results.affectedRows) {
		message = 'List deleted successfully';
	}

	return { message };

}
//update the model
async function updateList(listReq) {
	//SQL query structure
	const requete = 'UPDATE list SET name = "' + listReq.name + '", description = "' + listReq.description + '", creationDate = "' + today + '" WHERE id = "' + listReq.id + '";';

	//sending query
	const results = await db.query(requete, "");

	//message to output at the end of the function
	let message = 'Error in updating list';

	if (results.affectedRows) {
		message = 'List updated successfully';
	}

	return { message };

}

module.exports = {
	getList,
	getAllList,
	insertList,
	deleteList,
	updateList
};
