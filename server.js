require('dotenv').config();
const express = require('express'); //run express direectory (at js) and put an output in it.
const lodash = require('lodash'); //run lodash direectory (at js)  and put an output in it.
const cookiParser = require('cookie-parser');
const loginReg = require("./loginReg.js");
const dbModule = require("./dbModule.js");
const port = process.env.PORT || 80;
const app = express();


app.set('view engine', 'ejs');


//use is happand before every requst - .use = middleware
app.use(express.static('public')); //like app.get/post for all static file (js or html that dosen't re) that in 'pages' director.
app.use(cookiParser()); //parse cookie for comfortable used
app.use(express.json()); //parse the body to comfortable used
app.use(express.urlencoded()); //parse the url to comfortable used

//in express module i can play with server more eazy
app.get('/', function (req, res) {
    res.render('./pages/homePage', {

    })
});

app.get('/login', function (req, res) {
    res.render('./pages/login', {

    })
});

app.get('/registration', function (req, res) {
    res.render('./pages/registration.ejs', {})
});

app.get('/feeses', function (req, res) {
    res.render('./pages/feeses', {

    })
});

app.get('/residentRegistresion', function (req, res) {
    res.render('./pages/residentRegistresion.ejs', {})
});
app.get('/db-fees', async function (req, res) {
    let fees = await dbModule.getFees();

    res.render('./pages/feeses', {
        f: fees
    })
});

app.get('/db-expenses', async function (req, res) {
    db.getExpenses(req, res);
});

app.listen(port, () => {
    console.log("I listen to port " + port);
}); //the server listen to port 80

// let sum = lodash.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log("the sum is: " + sum);

app.post('/loginReg/register', (req, res) => {
    return loginReg.register(req, res);
});
app.post('/loginReg/login', (req, res) => {
    return loginReg.login(req, res);
});

// app.get('/userinfo/:user_id', function (req, res) {
//     res.sendFile('./userInfo.html', {
//         root: __dirname
//     })
//     //     res.send("<h1>hello " + req.params.user_id + "</h1>")
// });

app.get('/userinfo/:user_id/:name', function (req, res) {
    console.log(req.params.user_id)
    res.render('template', {
        name: req.params.name,
        id: req.params.user_id,
        now: new Date()

    })

});