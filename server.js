//import express and middlewear here
const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")



//import routers here
const projectRouter = require("./router/projectRouter")
// const taskRouter = require("./router/taskRouter")
// const resourceRouter = require("./router/resourceRouter")

//set express to server
const server = express()

//use middlewear & routers here
server.use(helmet())
server.use(morgan("dev"))
server.use(express.json())
server.use("/api/projects", projectRouter)
// server.use("/api/tasks", taskRouter)
// server.use("/api/resources", resourceRouter)


//test GET REQUEST
server.get("/test", (req,res) => {
    res.status(200).json({successMessage: "Basic server was a success"})
})


//export server here

module.exports = server



