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
        console.error(e);
    });

module.exports = {
    connectionPromise,
    getFees,
    getPayments,
    getManagers,
    getResidents,
    setManager,
    setPayment,
    setResidents

}

async function getFees() {
    let d = db.query("select * from fees");
    let fees = await d;
    return fees;
}

async function getPayments(req, res) {
    let d = db.query("select * from expenses");
    let payments = await d;
    return payments;
}


async function getManagers() {
    let d = db.query("select * from manager");
    let managers = await d;
    return managers;
}


async function getResidents() {
    let d = db.query("select * from residents");
    let residents = await d;
    return residents;
}

async function setManager(m) {
    let d = db.query("insert into manager (`managerId`, `apartmentId`, `userName`, `managerPassword`) values(" + m.managerId + "," + m.apartmentId + ",'" + m.userName + "','" + m.managerPassword + "')");
    let a = await d;
    return a;
}


async function setManager(m) {
    let d = db.query("insert into manager (`managerId`, `apartmentId`, `userName`, `managerPassword`) values(" + m.managerId + "," + m.apartmentId + ",'" + m.userName + "','" + m.managerPassword + "')");
    let a = await d;
    return a;
}

async function setPayment(p) {
    let d = db.query("INSERT INTO `localhost`.`expenses` ('dDate', `electricity`, `cleaning`, `other`) VALUES('" + p.dDate + "'," + p.electricity + "," + p.cleaning + "," + p.other + ")");
    let a = await d;
    return a;
}

async function setResidents(r) {
    let d = db.query("INSERT INTO `localhost`.`residents` (`apartmentId`, `firstName`, `lastName`, `phone1`, `phone2`, `email`) VALUES('" + r.apartmentId + "'," + r.firstName + "," + r.lastName + "," + r.phone1 + "," + r.phone2 + "," + r.email + ")");
    let a = await d;
    return a;
} 
