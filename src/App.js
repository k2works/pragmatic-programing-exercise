import { Fibonacci } from "./presentation/Fibonacci.js";
import { ValueCommand } from "./application/fibonacci/valueCommand";
import { ListCommand } from "./application/fibonacci/listCommand";
import { Recursive } from "./domain/fibonacci/recursive";
export class App {
  constructor() {
    const command = new ListCommand(new ValueCommand(new Recursive()));
    const list = command.exec(100);
    Fibonacci(list);
  }
}
