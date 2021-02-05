import { Algorithm } from "../../../application/fibonacci/algorithm";
import { Fibonacci } from "./fibonacci";

export class Loop implements Algorithm {
  exec(number: number): Fibonacci {
    let a: number = 0;
    let b: number = 1;
    let c: number = 0;

    for (let i: number = 0; i < number; i++) {
      a = b;
      b = c;
      c = a + b;
    }

    return new Fibonacci(BigInt(c));
  }
}
