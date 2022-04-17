const db = require('./database.js');
const config = require('../../config/config.js');

//give the model from the id given
async function getModel(id) {
    const row = await db.query("Select * FROM model where id='" + id + "';");
    return row;

}
//gives the list of All model on the platform
async function getAllModel() {
    const rows = await db.query("SELECT * FROM model;", "");
    return rows;
}
//insert the model in the database
async function insertModel(modelReq) {
    //SQL query structure
    const requete = 'INSERT INTO model (id, name, filename) VALUES (null, "' + modelReq.name + '","' + modelReq.filename + '");';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in creating model';

    if (results.affectedRows) {
        message = 'model created successfully';
    }

    return { message };

}
//delete the model
async function deleteModel(id) {
    //SQL query structure
    const requete = 'DELETE from model where id="' + id + '";';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in deleting model';

    if (results.affectedRows) {
        message = 'model deleted successfully';
    }

    return { message };

}
//update the model
async function updateModel(modelReq) {
    //SQL query structure
    const requete = 'update model SET name ="' + modelReq.name + '", filename="' + modelReq.filename + '" where id="' + modelReq.id + '";';

    //sending query
    const results = await db.query(requete, "");

    //message to output at the end of the function
    let message = 'Error in updating model';

    if (results.affectedRows) {
        message = 'model updated successfully';
    }

    return { message };

}

module.exports = {
    getModel,
    getAllModel,
    insertModel,
    deleteModel,
    updateModel
};
