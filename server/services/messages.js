const db = require('./database.js');
const config = require('../../config/config.js');

//récupération de la date courante
var today = new Date();
var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
var Datetime=(today+' '+time);


//give the messages from the id given
async function getMessages(id) {
    
    const rows = await db.query("SELECT * FROM message where id = '" + id + "';", "");
    return rows;

}
//gives the list of All messages on the platform
async function getAllMessages() {
    const rows = await db.query("SELECT * FROM message;", "");
    return rows;
}
//insert the messages in the database
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

}
//delete the messages
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
    console.log(requete);
    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in updating messages';

    if (results.affectedRows) {
        message = 'Messages updated successfully';
    }

    return { message };

}

module.exports = {
    getMessages,
    getAllMessages,
    insertMessages,
    deleteMessages,
    updateMessages
};
