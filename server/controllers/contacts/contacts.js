//Imports
var today = new Date();
const mysql = require('mysql');
const connect = require('../../database.js');

//(id,name,firstname,lastname,mail,creationDate)
module.exports({
    insertContact: (name, firstname, lastname, mail) => {
        var sql = "INSERT INTO contact (id,name,firstname,lastname,mail,creationDate) VALUES (null,'" + name + "','" + firstname + "','" + lastname + "','" + mail + "','" + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + "');";
        return sql;
    },

    getAllContacts: () => {
        var sql = "SELECT * FROM contacts;";

        connect.query(sql, function (err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result));
        });
    },

    deleteContact: () => {
        //code...
    }
})


//=== TODO ===
//updateContact