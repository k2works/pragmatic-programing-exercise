export class Command {
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
