import { Fibonacci } from "../../domain/model/fibonacci/fibonacci";

export interface Algorithm {
  exec(number: number): Fibonacci;
}
