// "use strict"
// /* -------------------------------------------------------
//     EXPRESS - Personnel API
// ------------------------------------------------------- */
// /*
//     $ npm i express dotenv mongoose express-async-errors
//     $ npm i cookie-session
//     $ npm i jsonwebtoken
// */

// const express = require('express')
// const app = express()

// /* ------------------------------------------------------- */

// // continue from here...

// /* ------------------------------------------------------- */

// // errorHandler:
// app.use(require('./src/middlewares/errorHandler'))

// // RUN SERVER:
// app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

// /* ------------------------------------------------------- */
// // Syncronization (must be in commentLine):
// // require('./src/helpers/sync')()

"use strict"

//express
const express = require("express");
const app = express();

//.env
require("dotenv").config();
const PORT = process.env.PORT || 8000;

//asyncErrors
require("express-async-errors")


//Mongo DB Connection
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

//JSON
app.use(express.json());

//Sessions-Cookies
app.use(require("cookie-session")({secret:process.env.SECRET_KEY}))

// res.getModelList():
app.use(require("./src/middlewares/findSearchSortPage"))

//Homepage
app.all("/", (req, res) => {
  res.send("Welcome to PersonnelAPI!");
});

//Routes



//errorHandler
app.use(require("./src/middlewares/errorHandler"))

//Server
app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}`));
