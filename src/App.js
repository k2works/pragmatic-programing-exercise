import { fibonacciComponent } from "./presentation/fibonacci.js";

import { Command } from "./domain/fibonacci/command";
import { Recursive } from "./domain/fibonacci/recursive";
export class App {
  constructor() {
    const command = new Command(new Recursive());
    const list = command.generateList(100);
    fibonacciComponent(list);
  }
}
