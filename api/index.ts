import express from "express";
import { Fibonacci, FibonacciRecursive } from "./domain/fibonacci";
const app = express();

app.get("/api/:number", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { number } = req.params;
  const command = new Fibonacci(new FibonacciRecursive());
  const result = command.exec(parseInt(number, 10));
  res.send(result.toString());
});

app.get("/api/list/:number", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { number } = req.params;
  const command = new Fibonacci(new FibonacciRecursive());
  const result = command.generateList(parseInt(number, 10));
  res.send(result);
});

module.exports = app;
