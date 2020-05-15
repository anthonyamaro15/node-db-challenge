exports.seed = function (knex) {
  // Inserts seed entries
  return knex("projects").insert([
    {
      name: "testing projet 1",
      description: "description of project 1",
      resource_id: 1,
    },
    {
      name: "testing projet 2",
      description: "description of project 2",
      resource_id: 2,
    },
  ]);
};
