const express = require("express");
const projectRoute = require("../routes/projectRoute");
const taskRoute = require("../routes/taskRoute");

const server = express();

server.use(express.json());
server.use("/api", taskRoute);
server.use("/api", projectRoute);

module.exports = server;
