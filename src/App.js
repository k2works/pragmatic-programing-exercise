import { Fibonacci } from "./presentation/Fibonacci.js";

import { Command } from "./domain/fibonacci/command";
import { Recursive } from "./domain/fibonacci/recursive";
export class App {
  constructor() {
    const command = new Command(new Recursive());
    const list = command.generateList(100);
    Fibonacci(list);
  }
}
