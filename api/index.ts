import express from "express";
import { FibonacciRecursive } from "./domain/fibonacci";
const app = express();

app.get("/api/:number", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { number } = req.params;
  const fib = new FibonacciRecursive();
  const result = fib.exec(parseInt(number, 10));
  res.send(result.toString());
});

module.exports = app;
