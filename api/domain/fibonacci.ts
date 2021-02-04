export class Fibonacci {
  calc(number: number, memo: number[] = []): number {
    if (memo[number]) return memo[number];
    if (number === 0) return 0;
    if (number == 1) return 1;

    memo[number] = this.calc(number - 1, memo) + this.calc(number - 2, memo);
    return memo[number];
  }
}
