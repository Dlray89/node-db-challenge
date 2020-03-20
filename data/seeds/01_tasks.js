
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'Create git repo', notes:"random", completed:false},
        {project_id: 2, description: 'install npx create-react-app', notes:"random", completed:false},
        {project_id: 3, description: 'heroku and netify', notes:"random", completed:false}
      ]);
    });
};
