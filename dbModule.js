const mysql = require('promise-mysql');

let db;

let connectionPromise = mysql.createPool({ //create conected to the data base
        connectionLimit: 100,
        host: process.env.MYSQL_URL,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    })
    .then((c) => { //it happend after the conection success
        db = c;
    })
    .catch((e) => {
        console.log("rrr");
        console.error(e);
    });

module.exports = {
    connectionPromise,
    getFees,
    getEexpenses,
    getManagers
}

async function getFees() {
    let d = db.query("select * from fees");
    let fees = await d;
    console.log(fees)
    return fees;
}

async function getEexpenses(req, res) {
    let d = db.query("select * from expenses");
    let expenses = await d;
    return expenses;
}

async function getManagers() {
    let d = db.query("select * from manager");
    let managers = await d;
    return managers;
}