exports.seed = function (knex) {
  // Inserts seed entries
  return knex("tasks").insert([
    {
      description: "description for task num 1",
      notes: "notes for task 1",
      project_id: 1,
    },
    {
      description: "description for task num 1",
      notes: "notes for task 1",
      project_id: 1,
    },
    {
      description: "description for task num 2",
      notes: "notes for task 2",
      project_id: 2,
    },
    {
      description: "description for task num 3",
      notes: "notes for task 3",
      project_id: 1,
    },
    {
      description: "description for task num 4",
      notes: "notes for task 4",
      // completed: false,
      project_id: 2,
    },
  ]);
};
