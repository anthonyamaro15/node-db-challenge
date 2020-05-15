const express = require("express");
const db = require("../models/task-model");

const route = express.Router();

// GET /api/projects/tasks
route.get("/projects/tasks", (req, res) => {
  db.findTask()
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

route.get("/projects/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "there was an error" });
    });
});

route.put("/projects/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.update(id, req.body)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "there was an error" });
    });
});

route.delete("/projects/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "there was an error" });
    });
});

module.exports = route;
