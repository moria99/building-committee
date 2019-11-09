
const dbModule = require("./dbModule.js");

module.exports = {
    register,
    login
};


let managers;
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
    let apartmentId=req.body.apartmentId;
    let userId=req.body.userId;
    for (let m of managers) {
        if (m.userName == userName && m.managerPassword == password)
            res.send('you alraedy exist');
    }
    let manager = {
        id:userId,
        apartmentId:apartmentId,
        userName:userName,
        password:password
    };
   // managers.push(maneger);
    debugger;
    dbModule.setManager(manager).then(()=>{
    res.send('registration successful');
    });
}

function login(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;
    console.log(userName);
    console.log(password);
    for (let m of managers) {
        if (m.userName == userName && m.managerPassword == password)
            res.send('hello to ' + userName);
    }
    res.status(500);
    res.send('Login Failed. Please check email/password.');
}