"use strict"

const { default: mongoose } = require('mongoose')
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const DepartmentSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        unique:true
    }
},{
    collection:"departments",
    timestamps:true
})

module.exports = mongoose.model("Department",DepartmentSchema)