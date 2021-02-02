import { Fibonacci } from "./presentation/Fibonacci.js";
import { ValueCommand } from "./domain/fibonacci/valueCommand";
import { ListCommand } from "./domain/fibonacci/listCommand";
import { Recursive } from "./domain/fibonacci/recursive";
export class App {
  constructor() {
    const command = new ListCommand(new ValueCommand(new Recursive()));
    const list = command.exec(100);
    Fibonacci(list);
  }
}
