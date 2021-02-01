export class Fibonacci {
  constructor(algorithm) {
    this.algorithm = algorithm;
  }

  exec(number) {
    return BigInt(this.algorithm.exec(number));
  }

  generateList(count) {
    return [...Array(count + 1).keys()].map((i) => this.exec(i));
  }
}

export class FibonacciRecursive {
  exec(number, memo = []) {
    if (memo[number]) return memo[number];
    if (number === 0) return 0;
    if (number === 1) return 1;

    memo[number] = this.exec(number - 2, memo) + this.exec(number - 1, memo);
    return memo[number];
  }
}

export class FibonacciLoop {
  exec(number) {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 0; i < number; i++) {
      a = b;
      b = c;
      c = a + b;
    }
    return c;
  }
}

export class FibonacciGeneralTerm {
  exec(number) {
    let a = ((1 + Math.sqrt(5)) / 2) ** number;
    let b = ((1 - Math.sqrt(5)) / 2) ** number;
    const result = (a - b) / Math.sqrt(5);
    return Math.round(result);
  }
}
