exports.seed = function (knex) {
  // Inserts seed entries
  return knex("resources").insert([
    { name: "name for resource 1", description: "mini desc" },
    { name: "name for resource 2", description: "mini desc for num2" },
    { name: "name for resource 3", description: "mini desc for num3" },
  ]);
};
