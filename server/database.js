const mysql = require('mysql');

module.exports({
    connect: mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "api"
    })
});

/*connect.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sql = "INSERT INTO contact (id,name,firstname,lastname,mail,creationDate) VALUES (null,'Etienne DAHO','Etienne','DAHO','e.daho@gmail.com','" + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + "');";

    connect.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});*/