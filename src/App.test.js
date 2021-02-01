import {
  Fibonacci,
  FibonacciGeneralTerm,
  FibonacciLoop,
  FibonacciRecursive,
} from "./App.js";

describe("フィボナッチ数列", () => {
  let recursive;
  let loop;
  let generalTerm;
  beforeEach(() => {
    recursive = new Fibonacci(new FibonacciRecursive());
    loop = new Fibonacci(new FibonacciLoop());
    generalTerm = new Fibonacci(new FibonacciGeneralTerm());
  });

  test.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
  ])("%iを渡したら%pを返す", (number, expected) => {
    expect(recursive.exec(number)).toEqual(expected);
  });

  test("大きな数値を計算する_再起処理による実装", () => {
    expect(recursive.exec(40)).toEqual(102334155);
  });

  test("大きな数値を計算する_ループ処理による実装", () => {
    expect(loop.exec(40)).toEqual(102334155);
  });

  test("大きな数値を計算する_一般項による実装", () => {
    expect(generalTerm.exec(40)).toEqual(102334155);
  });
});
