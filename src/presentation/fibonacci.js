import { Select } from "./component/Select";
import { Table } from "./component/Table";

export const Fibonacci = (list, service) => {
  const select = Select(Table, service);
  const contents = `
      <div>
        ${select.contents}
        <div id="app-table">
          ${Table(list)}
        </div>
      </div>
    `;

  document.getElementById("app").innerHTML = contents;
  document
    .getElementById("app-select")
    .addEventListener("change", select.changeEvent);
};
