const express = require("express");
const db = require("../models/project-model");

const route = express.Router();

// POST /api/projects/resources adding resources
route.post("/projects/resources", (req, res) => {
  db.addResources(req.body)
    .then((resources) => {
      res.status(201).json(resources);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error adding the resources" });
    });
});

// GET /api/projects/resources  get resources
route.get("/projects/resources", (req, res) => {
  db.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error getting the resources" });
    });
});

// POST /api/projects
route.post("/projects", (req, res) => {
  db.addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error adding projects" });
    });
});

// GET  /api/projects
route.get("/projects", (req, res) => {
  db.getAllProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error getting the projects" });
    });
});

// GET  /api/projects/:id
route.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  db.getById(id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "there was an error finding a single project" });
    });
});

module.exports = route;
