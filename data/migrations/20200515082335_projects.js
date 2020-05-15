exports.up = function (knex) {
  return knex.schema
    .createTable("resources", (table) => {
      table.increments();
      table.string("name", 255).notNullable();
      table.string("description", 255);
    })

    .createTable("tasks", (table) => {
      table.increments();
      table.string("description", 255).notNullable();
      table.string("notes", 255);
      table.boolean("completed").defaultTo("false");
      table.integer("project_id").notNullable();
      //   .unsigned().notNullable().references('projects.id').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable("projects", (table) => {
      table.increments();
      table.string("name", 255).notNullable().unique();
      table.string("description", 255);
      table.boolean("completed").defaultTo("false");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("tasks.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources");
};
