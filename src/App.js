export class App {
  constructor() {
    const select = () => {
      return `
        <select>
          <option>再帰</option>
          <option>ループ</option>
          <option>一般項</option>
        </select>
      `;
    };

    const table = () => {
      const command = new Fibonacci(new FibonacciRecursive());
      const list = command.generateList(100);
      const header = [...Array(10).keys()]
        .map((i) => `<td>${i + 1}</td>`)
        .join("");
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

    const contents = `
      <div>
        ${select()}
        ${table()}
      </div>
    `;

    document.getElementById("app").innerHTML = contents;
  }
}

export class Fibonacci {
  constructor(algorithm) {
    this.algorithm = algorithm;
  }

  exec(number) {
    return this.algorithm.exec(number);
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
