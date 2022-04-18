const db = require('./database.js');

// TODO : DEFINE ALL STATS NEEDED

/*
contactCount()
listCount()
lastSentMessage()
messageCount()
messageCountType()
*/

async function contactCount() {
	//select count(*) from message;
	const rows = await db.query("SELECT COUNT(*) as nbContacts FROM contact", "");
	return rows;
}


async function listCount() {
	//select count(*) from list;
	const rows = await db.query("SELECT COUNT(*) as nbLists FROM list", "");
	return rows;
}


async function lastSentMessage() {
	//SELECT fields FROM table ORDER BY id DESC LIMIT 1;
	//SELECT id FROM message WHERE id_state = 1 ORDER BY id DESC LIMIT 1
	const rows = await db.query("SELECT id as id FROM message WHERE id_state = 1 ORDER BY id DESC LIMIT 1", "");
	return rows;
}


async function messageCount() {
	//select count(*) from message WHERE id_state = 1;
	const rows = await db.query("SELECT COUNT(*) as nbSentMessages FROM message WHERE id_state=1", "");
	return rows;
}


async function messageCountType() {
	//select count(*) from message GROUP BY id_state;
	const rows = await db.query("SELECT COUNT(*) FROM message GROUP BY id_state;", "");
	return rows;
}



module.exports = {
	contactCount,
	listCount,
	lastSentMessage,
	messageCount,
	messageCountType
};
