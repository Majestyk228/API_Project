//IMPORTS
const db = require('./database.js');
const config = require('../../config/config.js');


// =================================================================================



//gets one state from id passed in parameter
async function getState(id) {
    const row = await db.query("Select * FROM state where id='" + id + "';");
    return row;
};



//gets all states
async function getAllState() {
    const rows = await db.query("SELECT * FROM state;", "");
    return rows;
};



//adds one state in db from request body passed in parameter
async function insertState(stateReq) {
    //SQL query structure
    const requete = 'INSERT INTO state (id, label) VALUES (null, "' + stateReq.label + '");';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in creating state';

    if (results.affectedRows) {
        message = 'State created successfully';
    }

    return { message };
};



//deletes the state specified in id passed in parameter
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
};



//updates the state specified in request body passed in parameter
async function updateState(stateReq) {
    //SQL query structure
    const requete = 'update state SET label ="' + stateReq.label + '"where id="' + stateReq.id + '";';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in updating state';

    if (results.affectedRows) {
        message = 'State updated successfully';
    }

    return { message };
};


// =================================================================================

//EXPORTS
module.exports = {
    getState,
    getAllState,
    insertState,
    deleteState,
    updateState
};
