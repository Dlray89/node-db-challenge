const express = require("express")
const router = express.Router()


const tasksDB = require("../models/task.model")




router.get("/", (req,res) => {
    tasksDB
    .find()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for`})
    })
})

router.get("/:id", (req,res) => {
    const { id } = req.params
    tasksDB
    .findById(id)
    .then(task =>{
        res.status(200).json(task)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for `})
    })
})

router.post("/", (req,res) => {
    const addtasks = req.body
    tasksDB
    .add(addtasks)
    .then(addtasks => {
        res.status(201).json(addtasks)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} Couldn't find what you're looking for`})
    })
})

router.put("/:id", (req,res) => {
    const { id } = req.params
    const updatetasks = req.body
    tasksDB
    .update(id, updatetasks)
    .then(updatetasks => {
        res.status(201).json(updatetasks)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} Couldn't find what you're looking for`})
    })
})

router.delete("/:id", (req,res) => {
    const { id } = req.params
    tasksDB
    .remove(id)
    .then(deltasks => {
        res.status(200).json(deltasks)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for`})
    })
})



module.exports = router