const dbModule = require("./dbModule.js");

module.exports = {
    newPayments
};

function newPayments(req, res) {
    let dDate = req.body.dDate;
    let electricity = req.body.electricity;
    let cleaning = req.body.cleaning;
    let other = req.body.other;

    let payment = {
        dDate,
        electricity,
        cleaning,
        other
    };
    dbModule.setPayment(payment).then(() => {
        console.log(payment);
        //location.reload(true),
        res.send('add new successful');
    });
}