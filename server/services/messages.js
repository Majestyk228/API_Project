//IMPORTS
const db = require('./database.js');
const config = require('../../config/config.js');
const jwt = require('jsonwebtoken');

//getting current date and time
var today = new Date();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
var Datetime = (today + ' ' + time);



// =================================================================================



//gets the message from the id given
async function getMessages(id) {

    const rows = await db.query("SELECT * FROM message where id = '" + id + "';", "");
    return rows;
};



//gets all messages
async function getAllMessages() {
    const rows = await db.query("SELECT * FROM message;", "");
    return rows;
};



//adds one message in db from request body passed in parameter
async function insertMessages(messagesReq) {

    //SQL query structure
    const requete = 'INSERT INTO message (id, object,content,sendDate,sendHour,id_list,id_state,id_model) VALUES (null, "' + messagesReq.object + '", "' + messagesReq.content + '", "' + today + '", "' + Datetime + '", "' + messagesReq.id_list + '", "' + messagesReq.id_state + '", "' + messagesReq.id_model + '");';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in creating message';

    if (results.affectedRows) {
        message = 'Messages created successfully';
    }

    return { message };
};



//deletes the message specified in id passed in parameter
async function deleteMessages(id) {
    //SQL query structure
    const requete = 'DELETE from message where id="' + id + '";';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in deleting messages';

    if (results.affectedRows) {
        message = 'Messages deleted successfully';
    }

    return { message };

}
//update the messages
async function updateMessages(messagesReq) {
    //SQL query structure
    const requete = 'update message SET object ="' + messagesReq.object + '",content ="' + messagesReq.content + '",sendDate ="' + messagesReq.sendDate + '",sendHour ="' + messagesReq.sendHour + '",id_list ="' + messagesReq.id_list + '",id_state ="' + messagesReq.id_state + '",id_model ="' + messagesReq.id_model + '"where id="' + messagesReq.id + '";';
    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in updating messages';

    if (results.affectedRows) {
        message = 'Messages updated successfully';
    }

    return { message };
};



//updates the message specified in request body passed in parameter
async function updateMessageStatus(messagesReq) {
    //message to output at the end of the function
    let message = 'Error in updating messages';

    //verifying token validity
    try {
        jwt.verify(messagesReq.token, config.jwt.signString);
    } catch (error) {
        message = 'Error while verifying token';
        return message;
    }

    //SQL query structure
    const requete = 'update message SET id_state =' + messagesReq.id_state + ' where id=' + messagesReq.id + ';';
    //sending query
    const results = await db.query(requete, "");

    if (results.affectedRows) {
        message = 'Messages updated successfully';
    }

    return { message };
};


// =================================================================================

//EXPORTS
module.exports = {
    getMessages,
    getAllMessages,
    insertMessages,
    deleteMessages,
    updateMessages,
    updateMessageStatus
};
