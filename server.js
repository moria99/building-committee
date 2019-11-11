require('dotenv').config(); //anable decleare veriable in env from hide this veriable in gitHub
const express = require('express'); //run express direectory (at js) and put an output in it.
const lodash = require('lodash'); //run lodash direectory (at js)  and put an output in it.
const cookiParser = require('cookie-parser');
const loginReg = require("./loginReg.js");
const dbModule = require("./dbModule.js");
const createData = require("./createData.js");
const port = process.env.PORT || 80;
const app = express();

app.set('view engine', 'ejs');

//use is happand before every requst
app.use(express.static('public')); //like app.get/post for all static file (js or html that dosen't re) that in 'pages' director.
app.use(cookiParser()); //parse cookie for comfortable used
app.use(express.json()); //parse the body to comfortable used
app.use(express.urlencoded()); //parse the url to comfortable used

//in express module i can used with server more eazy
app.get('/', function (req, res) {
    res.render('./pages/homePage', {})
});

app.get('/login', function (req, res) {
    res.render('./pages/login', {})
});

app.get('/registration', function (req, res) {
    res.render('./pages/registration', {})
});

app.get('/residentRegistresion', function (req, res) {
    res.render('./pages/residentRegistresion', {})
});



app.get('/fees', async function (req, res) {
    let fees = await dbModule.getFees();
    //console.log(fees[0].feesDate.getDate());
    res.render('./pages/fees', { //find temlate.ejs that exist in views directory
        feess: fees
    });
});

app.get('/payments', async function (req, res) {
    let expenses = await dbModule.getPayments();
    res.render('./pages/payments', {
        expenses: expenses
    })
});

app.get('/residents', async function (req, res) {
    let residents = await dbModule.getResidents();
    //console.log(fees[0].feesDate.getDate());
    res.render('./pages/residents', { //find temlate.ejs that exist in views directory
        residents: residents
    });
});



// app.get('/userinfo/:user_id', function (req, res) {
//     console.log(req.params.user_id);    //params - get information from url
//     res.sendFile('./try.html', {
//         root: __dirname
//     })
// });

app.get('/userinfo/:user_id/:name', function (req, res) {
    console.log(req.params.user_id); //params - get information from url like :enithing
    res.render('./template', { //find temlate.ejs that exist in views directory
        name: req.params.name, //this is a data that send to template file
        id: req.params.user_id,
        now: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()
    })
});

app.listen(port, () => {
    console.log("I listen to port " + port);
}); //the server listen to port 80

// let sum = lodash.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log("the sum is: " + sum);

app.post('/loginReg/register', (req, res) => {
    loginReg.register(req, res);
});
app.post('/loginReg/login', (req, res) => {
    loginReg.login(req, res);
});

app.post('/createData/newPayment', (req, res) => {
    createData.newPayments(req, res)
})