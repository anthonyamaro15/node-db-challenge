const db = require("../data/config-db");

function findTask() {
  //   return db("projects as p")
  //     .join("tasks as t", "p.id", "t.project_id")
  //     .select("t.id", "p.name", "p.description");
  return db("tasks as t").select("t.id", "t.description", "t.notes");
}

function addTasks(body) {
  return db("tasks").insert(body, "id");
}

function findById(id) {
  return db("tasks as t")
    .where({ id })
    .first()
    .select("t.id", "t.description", "t.notes", "t.completed");
}

async function update(id, changes) {
  //   const project = await findById(project_id);
  //   console.log("projects ", project);
  return db("tasks").where({ id }).update(id, changes);
}

function remove(id) {
  return db("tasks").where({ id }).del();
}

module.exports = {
  findTask,
  addTasks,
  findById,
  update,
  remove,
};
