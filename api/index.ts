import express from "express";

const fibonacci = require("./presentation/fibonacci");
const app = express();
app.use("/api", fibonacci);

module.exports = app;
