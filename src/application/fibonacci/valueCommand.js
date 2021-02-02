export class ValueCommand {
  constructor(algorithm) {
    this.algorithm = algorithm;
  }

  exec(number) {
    return BigInt(this.algorithm.exec(number));
  }
}
