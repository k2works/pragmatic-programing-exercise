export class App {
  constructor() {
    document.getElementById("app").innerHTML = Fibonacci.fib(0);
  }
}
export class Fibonacci {
  static fib(number) {
    if (number === 0) return 0;
    if (number === 1) return 1;

    return this.fib(number - 2) + this.fib(number - 1);
  }
}
