import { Fibonacci } from "./presentation/fibonacci";
import { Service } from "./application/fibonacci/service";
export class App {
  constructor() {
    const service = new Service();
    service.recursiveList(100).then((list) => Fibonacci(list, service));
  }
}
