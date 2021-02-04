import express from "express";
import { List } from "./application/fibonacci/list";
import { Value } from "./application/fibonacci/value";
import { FibonacciTypeEnum } from "./domain/type/fibonacci";

const app = express();

app.get("/api/value/:type/:number", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { type, number } = req.params;
  const command = new Value(FibonacciTypeEnum.valueOf(parseInt(type, 10)));
  const result = command.exec(parseInt(number, 10));
  res.send(result.toString());
});

app.post("/api/list/:type/:number", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { type, number } = req.params;
  const command = new List(FibonacciTypeEnum.valueOf(parseInt(type, 10)));
  const result = command.exec(parseInt(number, 10));
  const json = JSON.stringify(result, (k, v) =>
    typeof v === "bigint" ? v.toString() : v
  );
  res.send(json);
});

module.exports = app;
