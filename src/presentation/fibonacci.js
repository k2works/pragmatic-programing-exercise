import { Command } from "../domain/fibonacci/command";
import { Recursive } from "../domain/fibonacci/recursive";
import { Loop } from "../domain/fibonacci/loop";
import { GeneralTerm } from "../domain/fibonacci/generalTerm";

export const fibonacciComponent = (list) => {
  const contents = `
      <div>
        ${selectComponent(tableComponent).contents}
        <div id="app-table">
          ${tableComponent(list)}
        </div>
      </div>
    `;

  document.getElementById("app").innerHTML = contents;
  document
    .getElementById("app-select")
    .addEventListener("change", selectComponent(tableComponent).changeEvent);
};

const selectComponent = (tableComponent) => {
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
        render(tableComponent(list));
        break;
      case "2":
        command = new Command(new Loop());
        list = command.generateList(100);
        render(tableComponent(list));
        break;
      case "3":
        command = new Command(new GeneralTerm());
        list = command.generateList(100);
        render(tableComponent(list));
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

const tableComponent = (list) => {
  const header = [...Array(10).keys()].map((i) => `<td>${i + 1}</td>`).join("");
  const body = [...Array(10).keys()]
    .map((i) => (i === 0 ? 0 : i * 10))
    .map((j) =>
      [...Array(10).keys()].map((k) => `<td>${list[k + j]}</td>`).join("")
    );
  return `
        <table>
          <thead bgcolor="darkgray">
            <tr>
              ${header}
            </tr>
          </thead>
          <tbody>
            <tr>${body[0]}</tr>
            <tr>${body[1]}</tr>
            <tr>${body[2]}</tr>
            <tr>${body[3]}</tr>
            <tr>${body[4]}</tr>
            <tr>${body[5]}</tr>
            <tr>${body[6]}</tr>
            <tr>${body[7]}</tr>
            <tr>${body[8]}</tr>
            <tr>${body[9]}</tr>
          </tbody>
        </table>
      `;
};
