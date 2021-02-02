import { Command } from "../../domain/fibonacci/command";
import { Recursive } from "../../domain/fibonacci/recursive";
import { Loop } from "../../domain/fibonacci/loop";
import { GeneralTerm } from "../../domain/fibonacci/generalTerm";
export const Select = (table) => {
  let list;
  let command;
  const render = (contents) => {
    document.getElementById("app-table").innerHTML = contents;
  };

  const changeEvent = (e) => {
    const value = e.target.value;
    switch (value) {
      case "1":
        command = new Command(new Recursive());
        list = command.generateList(100);
        render(table(list));
        break;
      case "2":
        command = new Command(new Loop());
        list = command.generateList(100);
        render(table(list));
        break;
      case "3":
        command = new Command(new GeneralTerm());
        list = command.generateList(100);
        render(table(list));
        break;
      default:
        throw "該当するアルゴリズムが存在しません";
    }
  };

  const contents = `
        <select id="app-select">
          <option value="1">再帰</option>
          <option value="2">ループ</option>
          <option value="3">一般項</option>
        </select>
      `;

  return { contents, changeEvent };
};
