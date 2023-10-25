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

//departments
app.use("/departments", require("./src/routes/department.router"))

//personnels
app.use("/personnels", require("./src/routes/department.router"))




//errorHandler
app.use(require("./src/middlewares/errorHandler"))

//Server
app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}`));
