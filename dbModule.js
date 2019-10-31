const mysql = require('promise-mysql');

let db;

mysql.createPool({ //create conected to the data base
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "beitar",
    database: "localhost"
}).then((c) => {
    db = c;
}).then((db) => {
    console.log(db);
}).catch((e) => {
    console.error(e);
});

module.exports = function(req,res){
    res.send(db);
}