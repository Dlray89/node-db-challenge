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
    const query = project("projects as p");

    if (id) {
        query.where("p.id", id).first();

        const promises = [query, getProjectTasks(id)];

        return Promise.all(promises).then(function(results) {
            const [project, tasks] = results

            if(project) {
                project.tasks = tasks

                return mapper.projectToBody(project)
            } else{
                return null
            }
        })
    }else {
        return query.then(projects => {
            return projects.map(project => mapper.projectToBody)
        })
    }
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