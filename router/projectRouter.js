const express = require("express")
const router = express.Router()


const projectDB = require("../models/project.model")




router.get("/", (req,res) => {
    projectDB
    .find()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for`})
    })
})

router.get("/:id", (req,res) => {
    const { id } = req.params
    projectDB
    .findById(id)
    .then(project =>{
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for `})
    })
})

router.post("/", (req,res) => {
    const addProjects = req.body
    projectDB
    .add(addProjects)
    .then(addProjects => {
        res.status(201).json(addProjects)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} Couldn't find what you're looking for`})
    })
})

router.put("/:id", (req,res) => {
    const { id } = req.params
    const updateProject = req.body
    projectDB
    .update(id, updateProject)
    .then(updateProject => {
        res.status(201).json(updateProject)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} Couldn't find what you're looking for`})
    })
})

router.delete("/:id", (req,res) => {
    const { id } = req.params
    projectDB
    .remove(id)
    .then(delProject => {
        res.status(200).json(delProject)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for`})
    })
})



router.get("/:id/tasks", (req,res) => {
    const { project_id } = req.params
    projectDB
    .getprojectfromtasks(project_id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error =>{
        res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for`})
    })
})

// router.get("projects/tasks", (req,res) => {
//     projectDB
//     .getAllTasks()
//     .then(task => {
//         res.status(200).json(task)
//     })
//     .catch(error => {
//         res.status(500).json({errorMessage:`${error} Couldn't find what you're looking for`})
//     })
// })


module.exports = router