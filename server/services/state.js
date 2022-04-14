const db = require('./database.js');
const config = require('../../config/config.js');

//give the state from the id given
async function getState(id) {
    const row = await db.query("Select * FROM state where id='" + id + "';");
    return row;

}
//gives the list of All state on the platform
async function getAllState() {
    const rows = await db.query("SELECT * FROM state;", "");
    return rows;
}
//insert the state in the database
async function insertState(stateReq) {
    //SQL query structure
    const requete = 'INSERT INTO state (id, label) VALUES (null, "' + stateReq.name + '");';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in creating state';

    if (results.affectedRows) {
        message = 'State created successfully';
    }

    return { message };

}
//delete the state
async function deleteState(id) {
    //SQL query structure
    const requete = 'DELETE from state where id="' + id + '";';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in deleting state';

    if (results.affectedRows) {
        message = 'State deleted successfully';
    }

    return { message };

}
//update the state
async function updateState(stateReq) {
    //SQL query structure
    const requete = 'update state SET label ="' + stateReq.label + '"where id="' + stateReq.id + '";';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in deleting state';

    if (results.affectedRows) {
        message = 'State deleted successfully';
    }

    return { message };

}

module.exports = {
    getState,
    getAllState,
    insertState,
    deleteState,
    updateState
};