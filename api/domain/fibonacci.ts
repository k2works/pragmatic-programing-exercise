export interface Command {
  exec(number: number): any;
}

export interface Algorithm {
  exec(number: number): bigint;
}

export class FibonacciValue implements Command {
  private algorithm;

  constructor(algorithm: Command) {
    this.algorithm = algorithm;
  }

  exec(number: number): bigint {
    if (number > 100) throw "100以上は計算できません";

    const result = this.algorithm.exec(number);
    return BigInt(result);
  }
}
export class FibonacciList implements Command {
  private command;

  constructor(command: Command) {
    this.command = command;
  }

  exec(count: number): bigint[] {
    if (count > 100) throw "100件以上は計算できません";

    return Array.from(Array(count + 1).keys()).map((i) => this.command.exec(i));
  }
}

export enum FibonacciType {
  Recursive = 1,
  Loop = 2,
  GeneralTerm = 3,
}

export namespace FibonacciTypeEnum {
  export function valueOf(value: FibonacciType) {
    switch (value) {
      case FibonacciType.Recursive:
        return new FibonacciRecursive();
      case FibonacciType.Loop:
        return new FibonacciLoop();
      case FibonacciType.GeneralTerm:
        return new FibonacciGeneralTerm();
      default:
        throw "該当するアルゴリズムが存在しません";
    }
  }
}
export class FibonacciRecursive implements Algorithm {
  exec(number: number, memo: bigint[] = []): bigint {
    if (memo[number]) return memo[number];
    if (number === 0) return BigInt(0);
    if (number == 1) return BigInt(1);

    memo[number] = this.exec(number - 1, memo) + this.exec(number - 2, memo);
    return memo[number];
  }
}

export class FibonacciLoop implements Algorithm {
  exec(number: number): bigint {
    let a: number = 0;
    let b: number = 1;
    let c: number = 0;

    for (let i: number = 0; i < number; i++) {
      a = b;
      b = c;
      c = a + b;
    }

    return BigInt(c);
  }
}

export class FibonacciGeneralTerm implements Algorithm {
  exec(number: number): bigint {
    let a: number = ((1 + Math.sqrt(5)) / 2) ** number;
    let b: number = ((1 - Math.sqrt(5)) / 2) ** number;
    const result: number = (a - b) / Math.sqrt(5);
    return BigInt(Math.round(result));
  }
}
