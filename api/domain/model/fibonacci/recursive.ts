import { Algorithm } from "../../../application/fibonacci/algorithm";
import { Fibonacci } from "./fibonacci";

export class Recursive implements Algorithm {
  exec(number: number, memo: Fibonacci[] = []): Fibonacci {
    if (memo[number]) return memo[number];
    if (number === 0) return new Fibonacci(BigInt(0));
    if (number == 1) return new Fibonacci(BigInt(1));

    memo[number] = this.exec(number - 1, memo).add(this.exec(number - 2, memo));
    return memo[number];
  }
}
