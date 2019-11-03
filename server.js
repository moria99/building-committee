const express = require('express'); //run express direectory (at js) and put an output in it.
const lodash = require('lodash'); //run lodash direectory (at js)  and put an output in it.
const cookiParser = require('cookie-parser');
const myModule = require("./myModule.js");
const dbModule = require("./dbModule.js");
const port = process.env.PORT || 80;
const app = express();

app.set('view engine', 'ejs');

//use is happand before every requst
app.use(express.static('public')); //like app.get/post for all static file (js or html that dosen't re) that in 'pages' director.
app.use(cookiParser()); //parse cookie for comfortable used
app.use(express.json()); //parse the body to comfortable used
app.use(express.urlencoded()); //parse the url to comfortable used

//in express module i can play with server more eazy
app.get('/', function (req, res) {
    res.sendFile('./public/pages/homePage.html', {
        root: __dirname
    })
});

app.get('/login', function (req, res) {
    res.sendFile('./public/pages/login.html', {
        root: __dirname
    })
});

app.get('/registration', function (req, res) {
    res.sendFile('./public/pages/registration.html', {
        root: __dirname
    })
});

app.get('/residentRegistresion', function (req, res) {
    res.sendFile('./public/pages/residentRegistresion.html', {
        root: __dirname
    })
});

app.get('/fees', function (req, res) {
    res.render('./fees',{

    })
});

app.get('/db-fees',async function (req, res) {
    let fees=await dbModule.getFees();
    console.log(fees);
    res.render('./template', {       //find temlate.ejs that exist in views directory
        feess: fees
    });
});
app.get('/db-expenses', function (req, res) {
    dbModule.getEexpenses(req, res);
});

// app.get('/userinfo/:user_id', function (req, res) {
//     console.log(req.params.user_id);    //params - get information from url
//     res.sendFile('./try.html', {
//         root: __dirname
//     })
// });

app.get('/userinfo/:user_id/:name', function (req, res) {
    console.log(req.params.user_id); //params - get information from url like :enithing
    res.render('./template', {       //find temlate.ejs that exist in views directory
        name: req.params.name,       //this is a data that send to template file
        id: req.params.user_id,
        now: new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()
    })
});

app.listen(port, () => {
    console.log("I listen to port " + port);
}); //the server listen to port 3000

// let sum = lodash.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log("the sum is: " + sum);

app.post('/myModule/register', (req, res) => {
    return myModule.register(req, res);
});
app.post('/myModule/login', (req, res) => {
    return myModule.login(req, res);
});