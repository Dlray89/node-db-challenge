
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {task_id: 1, name: 'Github account', description:"sign-up at www.github.com" },
        {task_id: 2, name: 'Visual Studio code or your favorite coding tool', description:"download Visual Studio Code at www.visualstudiocode.com"},
        {task_id: 3, name: 'An account with either company', description:"Go to the site and figure out which would be best for you"}
      ]);
    });
};
