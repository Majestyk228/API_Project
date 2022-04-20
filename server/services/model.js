//IMPORTS
const db = require('./database.js');


// =================================================================================



//gets one model from id passed in parameter
async function getModel(id) {
    const row = await db.query("Select * FROM model where id='" + id + "';");
    return row;
};



//gets all models
async function getAllModel() {
    const rows = await db.query("SELECT * FROM model;", "");
    return rows;
};



//adds one model in db from request body passed in parameter
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
};



//deletes the model specified in id passed in parameter
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
};



//updates the model specified in request body passed in parameter
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
};


// =================================================================================


//EXPORTS
module.exports = {
    getModel,
    getAllModel,
    insertModel,
    deleteModel,
    updateModel
};
