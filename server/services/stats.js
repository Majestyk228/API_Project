//IMPORTS
const db = require('./database.js');


// =================================================================================


//gives the number of contacts in db
async function contactCount() {
	//select count(*) from message;
	const rows = await db.query("SELECT COUNT(*) as nbContacts FROM contact", "");
	return rows;
};


//gives the number of lists in db
async function listCount() {
	//select count(*) from list;
	const rows = await db.query("SELECT COUNT(*) as nbLists FROM list", "");
	return rows;
};


//gives id of last sent message in db
async function lastSentMessage() {
	const rows = await db.query("SELECT id as id FROM message WHERE id_state = 1 ORDER BY id DESC LIMIT 1", "");
	return rows;
};


//gives number of unsent messages
async function messageCount() {
	//select count(*) from message WHERE id_state = 1;
	const rows = await db.query("SELECT COUNT(*) as nbSentMessages FROM message WHERE id_state=1", "");
	return rows;
};


//gives numbers of messages grouped by state
async function messageCountType() {
	//select count(*) from message GROUP BY id_state;
	const rows = await db.query("SELECT COUNT(*) FROM message GROUP BY id_state;", "");
	return rows;
};


// =================================================================================

//EXPORTS
module.exports = {
	contactCount,
	listCount,
	lastSentMessage,
	messageCount,
	messageCountType
};
