import { Fibonacci, FibonacciRecursive } from "./domain/fibonacci.js";
import { fibonacciComponent } from "./presentation/fibonacci.js";

export class App {
  constructor() {
    const command = new Fibonacci(new FibonacciRecursive());
    const list = command.generateList(100);
    fibonacciComponent(list);
  }
}
