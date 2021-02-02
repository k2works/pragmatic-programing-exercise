import { GeneralTerm } from "../../domain/fibonacci/generalTerm";
import { Loop } from "../../domain/fibonacci/loop";
import { Recursive } from "../../domain/fibonacci/recursive";
import { ListCommand } from "./listCommand";
import { ValueCommand } from "./valueCommand";

export class Service {
  recursiveList(count) {
    const command = new ListCommand(new ValueCommand(new Recursive()));
    return command.exec(count);
  }

  loopList(count) {
    const command = new ListCommand(new ValueCommand(new Loop()));
    return command.exec(count);
  }

  generalTermList(count) {
    const command = new ListCommand(new ValueCommand(new GeneralTerm()));
    return command.exec(count);
  }
}
