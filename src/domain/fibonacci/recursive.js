export class Recursive {
  exec(number, memo = []) {
    if (memo[number]) return memo[number];
    if (number === 0) return 0;
    if (number === 1) return 1;

    memo[number] = this.exec(number - 2, memo) + this.exec(number - 1, memo);
    return memo[number];
  }
}
