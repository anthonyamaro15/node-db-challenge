const db = require("../data/config-db");

function getResources() {
  return db("resources");
}

function addResources(body) {
  return db("resources").insert(body, "id");
}

function addProject(body, resource_id) {
  return db("projects").insert(body, "id");
}

function getAllProjects() {
  return db("projects");
}

function getTasks() {
  return db("projects as p")
    .join("tasks as t", "p.id", "t.project_id")
    .select("t.id", "p.name", "p.description");
}

function addTasks(body) {
  return db("tasks").insert(body, "id");
}

async function getById(ids) {
  const [values] = await db("projects as p")
    .select("p.id", "p.name", "p.description", "p.completed")
    .where({ id: ids });
  const { id } = values;

  const tasks = await db("tasks as t")
    .select("t.id", "t.description", "t.notes", "t.completed")
    .where({ project_id: id });

  const [resource] = await db("projects").where({ id: ids });
  const { resource_id } = resource;
  const resources = await db("resources as r").where({ id: resource_id });

  return { ...values, tasks, resources };
}

module.exports = {
  getResources,
  addResources,
  addProject,
  getAllProjects,
  getTasks,
  addTasks,
  getById,
};
