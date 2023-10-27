"use strict"

const Personnel = require("../models/personnel.model")

module.exports={

    list: async ( req, res )=>{

        const data = await res.getModelList(Personnel)

        res.status(200).send({
            error:false,
            data
        })
    },
    create: async ( req, res )=>{

        const isLead = req.body?.isLead || false

        if(isLead){
            await Personnel.updateMany({departmentId: req.body.departmentId, isLead:true},{ isLead: false}) 
        }

        const data = await Personnel.create(req.body)

        res.status(201).send({
            error:false,
            body:req.body,
            data,
        })

    
    },
    read: async ( req, res )=>{

        const data = await Personnel.findOne({_id:req.params.id})

        res.status(200).send({
            error:false,
            data,
        })

    },
    
    update: async ( req, res )=>{

        
        const isLead = req.body?.isLead || false
        
        if(isLead){
            const {departmentId}= await Personnel.findOne({_id:req.params.id},{department:1})
            await Personnel.updateMany({departmentId, isLead:true},{ isLead: false}) 
        }



        const data = await Personnel.update({_id:req.params.id}, req.body)

        res.status(202).send({
            error:false,
            body:req.body,
            data,
            newData: await Personnel.findOne({_id:req.body.id})
        })

    },
    delete: async ( req, res )=>{

        const data = await Personnel.delete({_id:req.params.id})
        
        res.status(data.deletedCount>=1 ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    }
}