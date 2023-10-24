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

"use strict";

//express
const express = require("express");
const app = express();

//.env
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.all("/", (req, res) => {
  res.send("Welcome to PersonnelAPI!");
});





app.use(require("./src/middlewares/errorHandler"))

app.listen(PORT, () => console.log(`Running:http://127.0.0.1:${PORT}`));
