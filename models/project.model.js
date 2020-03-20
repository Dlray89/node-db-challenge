const project = require("../data/db.config")
const mapper = require("./mapper")


module.exports ={
    find,
    findById,
    add,
    update,
    remove,
    getProjectTasks,
  
}

function find(){
 return project("projects")
}

function findById(id){
    return project("projects")
    .where({ id })
    .first()
}

function add(projects){
    return project("projects")
    .insert(projects, "id")
    .then(ids => ({id: ids[0] }))
}

function update(id, changes){
    return project("projects")
    .where({ id })
    .update(changes, "*")
}

function remove(id){
    return project("projects")
    .where({ id })
    .del()
}

function getProjectTasks(projectId){
    return project("tasks")
    .where("project_id", projectId )
    .then(tasks => tasks.map( task => mapper.tasksToBody(task) ))
}