const express = require("express")
const router = express.Router()


const resourcesDB = require("../models/project.model")




router.get("/", (req,res) => {
    resourcesDB
    .find()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for`})
    })
})

router.get("/:id", (req,res) => {
    const { id } = req.params
    resourcesDB
    .findById(id)
    .then(resource =>{
        res.status(200).json(resource)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for `})
    })
})

router.post("/", (req,res) => {
    const addResource = req.body
    resourcesDB
    .add(addResource)
    .then(addResource => {
        res.status(201).json(addResource)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} Couldn't find what you're looking for`})
    })
})

router.put("/:id", (req,res) => {
    const { id } = req.params
    const updateresource = req.body
    resourcesDB
    .update(id, updateresource)
    .then(updateresource => {
        res.status(201).json(updateresource)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} Couldn't find what you're looking for`})
    })
})

router.delete("/:id", (req,res) => {
    const { id } = req.params
    resourcesDB
    .remove(id)
    .then(delResources => {
        res.status(200).json(delResources)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for`})
    })
})



// router.get("/:id/tasks", (req,res) => {
//     const { project_id } = req.params
//     resourcesDB
//     .getprojectfromtasks(project_id)
//     .then(tasks => {
//         res.status(200).json(tasks)
//     })
//     .catch(error =>{
//         res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for`})
//     })
// })



module.exports = router