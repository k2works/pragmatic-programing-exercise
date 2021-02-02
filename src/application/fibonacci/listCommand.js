export class ListCommand {
  constructor(command) {
    this.command = command;
  }

  exec(count) {
    return [...Array(count + 1).keys()].map((i) => this.command.exec(i));
  }
}
