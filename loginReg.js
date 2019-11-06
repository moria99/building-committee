const dbModule = require('./dbmodule.js')

module.exports = {
    register,
    login
};

let managers = dbModule.getManager().then((d) => {
    managers = d;
});

function register(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;
    for (let m of manegers) {
        if (m.userName == userName && m.password == password)
            res.send('you alraedy exist');
    }
    let manager = {
        userName,
        password
    };
    managers.push(manager);
    res.send('registration successful');
}

function login(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;
    console.log(userName);
    console.log(password);
    for (let m of manegers) {
        if (m.userName == userName && m.password == password)
            res.send('hello to ' + userName);
    }
    res.status(500);
    res.send('try again');
}