import { Fibonacci } from "./presentation/fibonacci";
import { Service } from "./application/fibonacci/service";
export class App {
  constructor(params) {
    const service = new Service(params);
    service.recursiveList(100).then((list) => Fibonacci(list, service));
  }
}
