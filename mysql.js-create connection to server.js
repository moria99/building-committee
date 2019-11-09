const mysql = require('promise-mysql');

let db;

mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "beitar",
    database: "your db name"
}).then((c) => {
    db = c;
}).catch((e) => {
    console.error(e);
});

module.exports = function (req, res) {

}