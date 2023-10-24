"use strict";

const { default: mongoose } = require("mongoose");

/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// MongoDB Connection:

// const mongoose = require('mongoose')

// const dbConnection = function() {
//     // Connect:
//     mongoose.connect(process.env.MONGODB)
//         .then(() => console.log('* DB Connected * '))
//         .catch((err) => console.log('* DB Not Connected * ', err))
// }

// /* ------------------------------------------------------- */
// module.exports = {
//     mongoose,
//     dbConnection
// }

const mongoose = require(mongoose);

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB)
        .then(() => console.log("DB Connected"))
        .catch((err) => console.log("DB not Connected", err))
};

module.exports={
    dbConnection,
    mongoose 
}