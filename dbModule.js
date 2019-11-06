const mysql = require('promise-mysql');

let db;

module.exports = {
    connectionPromise,
    getFees,
    getExpenses,
    getManager
}



let connectionPromise = mysql.createPool({ //create conected to the data base
    connectionLimit: 100,
    host: process.env.MYSQL_,
    user: "root",
    password: "beitar",
    database: "localhost"
}).then((c) => {
    db = c;
}).catch((e) => {
    console.log("rrr");
    console.error(e);
});

async function getFees() {
    let d = db.query("select * from fees");
    let fees = await d;
    console.log(fees)
    return fees;
}

async function
getExpenses() {
    let d = db.query("select * from expenses");
    let expenses = await d;
    console.log(expenses)
    return expenses;
}

async function
getManager() {
    let d = db.query("select * from manager");
    let managers = await d;
    return managers;
}