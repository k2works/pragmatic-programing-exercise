export class App {
  constructor() {
    document.getElementById("app").innerHTML = Fibonacci.fib(0);
  }
}
export class Fibonacci {
  static fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return this.fib(n - 2) + this.fib(n - 1);
  }
}
