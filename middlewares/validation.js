const Project = require("../models/project-model");
const Task = require("../models/task-model");

function validateProjectId(req, res, next) {
  const { id } = req.params;
  Project.getById(id)
    .then((project) => {
      console.log("project here ", project);
      if (!Object.keys(project).length) {
        res.status(404).json({ errorMessage: "Invalid Id" });
      } else {
        req.project = project;
        next();
      }
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "there was an error" });
    });
}

module.exports = {
  validateProjectId,
};
