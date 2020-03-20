const project = require("../data/db.config")
const mappers = require("./mappers")

module.exports ={
    find,
    findById,
    add,
    update,
    remove,
    getprojectfromtasks,
}

function find(){
 return project("projects")
}

function findById(id){
    return project("projects")
    .where({ id })
    .first()
}

function add(project){
    return project("projects")
    .insert(project, "id")
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

function getprojectfromtasks(project_id){
return project("task")
.where("project_id", project_id)
.then(tasks => tasks.map(task => mappers.actionToBody(task)))
}