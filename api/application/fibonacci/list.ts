import { Command } from "./command";

export class List implements Command {
  private command;

  constructor(command: Command) {
    this.command = command;
  }

  exec(count: number): bigint[] {
    if (count > 100) throw "100件以上は計算できません";

    return Array.from(Array(count + 1).keys()).map(
      (i) => this.command.exec(i).value
    );
  }
}
