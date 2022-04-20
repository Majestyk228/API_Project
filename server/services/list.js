const db = require('./database.js');
const config = require('../../config/config.js');

//get current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;



// =================================================================================


//gets one list from id passed in parameter
async function getList(id) {
	const row = await db.query("Select * FROM list WHERE id='" + id + "';");
	return row;

};



//gets all lists
async function getAllList() {
	const rows = await db.query("SELECT * FROM list;", "");
	return rows;
};



//adds one list in db from request body passed in parameter
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
};



//deletes the list specified in id passed in parameter
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
};



//updates the list specified in request body passed in parameter
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
};


// =================================================================================

//EXPORT
module.exports = {
	getList,
	getAllList,
	insertList,
	deleteList,
	updateList
};
