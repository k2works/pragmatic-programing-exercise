import { Fibonacci } from "../domain/fibonacci";

describe("フィボナッチ数列", () => {
  test("挨拶する", () => {
    const fib = new Fibonacci();
    expect(fib.greeting()).toEqual("hello world");
  });
});
