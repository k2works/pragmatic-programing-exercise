import { Command } from "./command";

export class Value implements Command {
  private algorithm;

  constructor(algorithm: Command) {
    this.algorithm = algorithm;
  }

  exec(number: number): bigint {
    if (number > 100) throw "100以上は計算できません";

    const result = this.algorithm.exec(number);
    return result.value;
  }
}
