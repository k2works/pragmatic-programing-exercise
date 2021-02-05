import { Algorithm } from "../../../application/fibonacci/algorithm";
import { Fibonacci } from "./fibonacci";

export class GeneralTerm implements Algorithm {
  exec(number: number): Fibonacci {
    let a: number = ((1 + Math.sqrt(5)) / 2) ** number;
    let b: number = ((1 - Math.sqrt(5)) / 2) ** number;
    const result: number = (a - b) / Math.sqrt(5);
    return new Fibonacci(BigInt(Math.round(result)));
  }
}
