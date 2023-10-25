"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department = require("../models/department.model")

const DepartmentSchema = mongoose.Schema({
    list: async ( req, res )=>{
        const data = await res.getModelList(Department)

        res.status(200).send({
            error:false,
            data
        })
    },.çn m7
    create: async ( req, res )=>{

    },
    read: async ( req, res )=>{

    },
    update: async ( req, res )=>{

    },
    delete: async ( req, res )=>{

    }
},{})