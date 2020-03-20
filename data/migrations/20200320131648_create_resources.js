
exports.up = function(knex) {
  return knex.schema.createTable("resources", function(resources) {
      resources.increments()

      resources
      .integer("task_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tasks")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

      resources.string("name", 128)
      resources.text("description", 300).notNullable
  })
};

exports.down = function(knex) {
  
};
