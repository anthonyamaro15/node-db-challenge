const express = require("express");
const db = require("../models/project-model");

const route = express.Router();

// GET /api/projects/tasks
route.get("/projects/tasks", (req, res) => {
  db.getTasks()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "there was an error" });
    });
});

// POST /api/projects/tasks
route.post("/projects/tasks", (req, res) => {
  db.addTasks(req.body)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "there was an error" });
    });
});

module.exports = route;
