const dbModule = require("./dbModule.js");

module.exports = {
    register,
    login
};


let managers = [];
dbModule.connectionPromise
    .then(() => {
        dbModule.getManagers()
            .then((d) => {
                managers = d;
            });
    })

function register(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;
    let managerId = req.body.managerId;
    let apartmentId = req.body.apartmentId;

    for (let m of managers) {
        if (m.userName == userName && m.managerPassword == password) {
            res.send('you already exist');
            return;
        }
    }
    let manager = {
        managerId,
        apartmentId,
        userName,
        managerPassword: password,
    };
    console.log(manager);
    dbModule.setManager(manager).then(() => {
        managers.push(manager);
        res.send('registration successful');
    });
}

function login(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;
    for (let m of managers) {
        if (m.userName == userName && m.managerPassword == password) {
            console.log(userName);
            res.send('hello to ' + userName);
        }
    }
    res.status(500);
    res.send('Login Failed. Please check email/password.');
}