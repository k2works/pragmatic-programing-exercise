import { Service } from "../../application/fibonacci/service";
export const Select = (table) => {
  let list;
  let command;
  const render = (contents) => {
    document.getElementById("app-table").innerHTML = contents;
  };

  const changeEvent = (e) => {
    const value = e.target.value;
    const service = new Service();
    switch (value) {
      case "1":
        list = service.recursiveList(100);
        render(table(list));
        break;
      case "2":
        list = service.loopList(100);
        render(table(list));
        break;
      case "3":
        list = service.generalTermList(100);
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
