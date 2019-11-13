const dbModule = require("./dbModule.js");

module.exports = {
    newPayments,
    newResidents
};

// let managers = [];
// dbModule.connectionPromise
//     .then(() => {
//         dbModule.getPayments()
//             .then((d) => {
//                 managers = d;
//             });
//     })

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
        // location.reload();
        res.send('add successfull');
    }).catch((e)=>{
        res.send(e)
});
}


function newResidents(req, res) {
    let apartmentId = req.body.apartmentId;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let phone1 = req.body.phone1;
    let phone2 = req.body.phone2;
    let email = req.body.email;

    let residents = {
        apartmentId,
        firstName,
        lastName,
        phone1,
        phone2,
        email
    };

    console.log(residents);
    dbModule.setResidents(residents).then(() => {
        // location.reload();
        res.send('add successfull');
    })
}