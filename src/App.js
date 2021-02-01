export class App {
  constructor() {
    const command = new Fibonacci(new FibonacciRecursive());
    const list = command.generateList(100);
    this.render(list);
  }

  render(list) {
    const contents = `
      <div>
        ${select(table).contents}
        <div id="app-table">
          ${table(list)}
        </div>
      </div>
    `;

    document.getElementById("app").innerHTML = contents;
    document
      .getElementById("app-select")
      .addEventListener("change", select(table).changeEvent);
  }
}

const select = (table) => {
  let list;
  let command;
  const render = (contents) => {
    document.getElementById("app-table").innerHTML = contents;
  };
  const changeEvent = (e) => {
    const value = e.target.value;
    switch (value) {
      case "1":
        command = new Fibonacci(new Fibonacci(new FibonacciRecursive()));
        list = command.generateList(100);
        render(table(list));
        break;
      case "2":
        command = new Fibonacci(new Fibonacci(new FibonacciLoop()));
        list = command.generateList(100);
        render(table(list));
        break;
      case "3":
        command = new Fibonacci(new Fibonacci(new FibonacciGeneralTerm()));
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

const table = (list) => {
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

export class Fibonacci {
  constructor(algorithm) {
    this.algorithm = algorithm;
  }

  exec(number) {
    return BigInt(this.algorithm.exec(number));
  }

  generateList(count) {
    return [...Array(count + 1).keys()].map((i) => this.exec(i));
  }
}

export class FibonacciRecursive {
  exec(number, memo = []) {
    if (memo[number]) return memo[number];
    if (number === 0) return 0;
    if (number === 1) return 1;

    memo[number] = this.exec(number - 2, memo) + this.exec(number - 1, memo);
    return memo[number];
  }
}

export class FibonacciLoop {
  exec(number) {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 0; i < number; i++) {
      a = b;
      b = c;
      c = a + b;
    }
    return c;
  }
}

export class FibonacciGeneralTerm {
  exec(number) {
    let a = ((1 + Math.sqrt(5)) / 2) ** number;
    let b = ((1 - Math.sqrt(5)) / 2) ** number;
    const result = (a - b) / Math.sqrt(5);
    return Math.round(result);
  }
}
