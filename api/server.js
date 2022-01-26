const express = require("express");
const server = express();
const crewRouter = require("./crew/crew_router");

server.use(express.json());
server.use("/zissou/crew", crewRouter);

// server.use((err, req, res, next) => {
//   // eslint-disable-line
//   res.status(err.status || 500).json({
//     message: err.message,
//     stack: err.stack,
//   });
// });

module.exports = server;
