exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Set up DataBase",
          description: "Building the back-end for a application",
          completed: false
        },
        {
          id: 2,
          name: "Set up front-end application",
          description: "Set up front end application for the backend",
          completed: false
        },
        {
          id: 3,
          name: "Deploy Application",
          description: "deploy the entire application",
          completed: false
        }
      ]);
    });
};
