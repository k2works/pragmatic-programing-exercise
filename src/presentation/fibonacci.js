import { Select } from "./component/Select";
import { Table } from "./component/Table";

export const Fibonacci = (list) => {
  const contents = `
      <div>
        ${Select(Table).contents}
        <div id="app-table">
          ${Table(list)}
        </div>
      </div>
    `;

  document.getElementById("app").innerHTML = contents;
  document
    .getElementById("app-select")
    .addEventListener("change", Select(Table).changeEvent);
};
