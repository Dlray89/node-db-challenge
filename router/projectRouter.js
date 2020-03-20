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

module.exports = router