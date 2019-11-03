const mysql = require('promise-mysql');

module.exports = {
    getFees,
    getEexpenses
}

let db;

mysql.createPool({ //create conected to the data base
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "beitar",
    database: "localhost"
}).then((c) => { //it happend after the conection success
    db = c;
}).catch((e) => {
    console.log("rrr");
    console.error(e);
});

async function getFees() {
    let d = db.query("select * from expenses");
    let fees = await d;
    console.log(fees)
    return fees;
}

async function getEexpenses(req, res) {
    let d = db.query("select * from expenses");
    let expenses = await d;
    console.log(expenses)
    res.send(expenses);
}