export interface Command {
  exec(number: number): bigint;
}

export class Fibonacci implements Command {
  private algorithm;

  constructor(algorithm: Command) {
    this.algorithm = algorithm;
  }

  exec(number: number): bigint {
    const result = this.algorithm.exec(number);
    return BigInt(result);
  }

  generateList(count: number): bigint[] {
    return Array.from(Array(count + 1).keys()).map((i) => this.exec(i));
  }
}
export class FibonacciRecursive implements Command {
  exec(number: number, memo: bigint[] = []): bigint {
    if (memo[number]) return memo[number];
    if (number === 0) return BigInt(0);
    if (number == 1) return BigInt(1);

    memo[number] = this.exec(number - 1, memo) + this.exec(number - 2, memo);
    return memo[number];
  }
}

export class FibonacciLoop implements Command {
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

export class FibonacciGeneralTerm implements Command {
  exec(number: number): bigint {
    let a: number = ((1 + Math.sqrt(5)) / 2) ** number;
    let b: number = ((1 - Math.sqrt(5)) / 2) ** number;
    const result: number = (a - b) / Math.sqrt(5);
    return BigInt(Math.round(result));
  }
}
