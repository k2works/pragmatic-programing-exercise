import { GeneralTerm } from "../model/fibonacci/generalTerm";
import { Loop } from "../model/fibonacci/loop";
import { Recursive } from "../model/fibonacci/recursive";

export enum FibonacciType {
  Recursive = 1,
  Loop = 2,
  GeneralTerm = 3,
}

export namespace FibonacciTypeEnum {
  export function valueOf(value: FibonacciType) {
    switch (value) {
      case FibonacciType.Recursive:
        return new Recursive();
      case FibonacciType.Loop:
        return new Loop();
      case FibonacciType.GeneralTerm:
        return new GeneralTerm();
      default:
        throw "該当するアルゴリズムが存在しません";
    }
  }
}
