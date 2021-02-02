import { Fibonacci } from "./presentation/Fibonacci.js";
import { Service } from "./application/fibonacci/service";
export class App {
  constructor() {
    const service = new Service();
    const list = service.recursiveList(100);
    Fibonacci(list, service);
  }
}
