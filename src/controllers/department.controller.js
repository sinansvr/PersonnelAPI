"use strict"

const Department = require("../models/department.model")

module.exports={

    list: async ( req, res )=>{

        const data = await res.getModelList(Department)

        res.status(200).send({
            error:false,
            data
        })
    },
    create: async ( req, res )=>{

        const data = await Department.create(req.body)

        res.status(201).send({
            error:false,
            body:req.body,
            data,
        })

    
    },
    read: async ( req, res )=>{

        const data = await Department.findOne({_id:req.params.id})

        res.status(200).send({
            error:false,
            data,
        })

    },
    
    update: async ( req, res )=>{

        const data = await Department.update({_id:req.params.id}, req.body)

        res.status(202).send({
            error:false,
            body:req.body,
            data,
            newData: await Department.findOne({_id:req.body.id})
        })

    },

    delete: async ( req, res )=>{

        const data = await Department.deleteOne({_id:req.params.id})
        
        console.log(data)
        
        res.status(data.deletedCount>=1 ? 204 : 404).send({
            error: !data.deletedCount,
            data: data
        })

    }
}