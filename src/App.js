import { Fibonacci } from "./presentation/fibonacci";
import { Service } from "./application/fibonacci/service";
export class App {
  constructor() {
    const service = new Service();
    const list = service.recursiveList(100);
    Fibonacci(list, service);
  }
}
