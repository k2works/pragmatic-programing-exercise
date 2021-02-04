import express from "express";
import {
  FibonacciValue,
  FibonacciList,
  FibonacciRecursive,
  FibonacciTypeEnum,
} from "./domain/fibonacci";
const app = express();

app.get("/api/value/:type/:number", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { type, number } = req.params;
  const command = new FibonacciValue(
    FibonacciTypeEnum.valueOf(parseInt(type, 10))
  );
  const result = command.exec(parseInt(number, 10));
  res.send(result.toString());
});

app.post("/api/list/:type/:number", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { type, number } = req.params;
  const command = new FibonacciList(
    FibonacciTypeEnum.valueOf(parseInt(type, 10))
  );
  const result = command.exec(parseInt(number, 10));
  const json = JSON.stringify(result, (k, v) =>
    typeof v === "bigint" ? v.toString() : v
  );
  res.send(json);
});

module.exports = app;
