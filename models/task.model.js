const task = require("../data/db.config")


module.exports ={
    find,
    findById,
    add,
    update,
    remove
}

function find(){
 return task("tasks")
}

function findById(id){
    return task("tasks")
    .where({ id })
    .first()
}

function add(task){
    return task("tasks")
    .insert(task, "id")
    .then(ids => ({id: ids[0] }))
}

function update(id, changes){
    return task("tasks")
    .where({ id })
    .update(changes, "*")
}

function remove(id){
    return task("tasks")
    .where({ id })
    .del()
}