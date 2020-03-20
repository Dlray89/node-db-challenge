const resources = require("../data/db.config")


module.exports ={
    find,
    findById,
    add,
    update,
    remove
}

function find(){
 return resources("resources")
}

function findById(id){
    return resources("resources")
    .where({ id })
    .first()
}

function add(resources){
    return resources("resources")
    .insert(resources, "id")
    .then(ids => ({id: ids[0] }))
}

function update(id, changes){
    return resources("resources")
    .where({ id })
    .update(changes, "*")
}

function remove(id){
    return resources("resources")
    .where({ id })
    .del()
}