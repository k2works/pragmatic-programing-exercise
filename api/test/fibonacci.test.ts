import {
  Command,
  FibonacciGeneralTerm,
  FibonacciLoop,
  FibonacciRecursive,
} from "../domain/fibonacci";

describe("フィボナッチ数列", () => {
  let fib: Command;
  beforeEach(() => {
    fib = new FibonacciRecursive();
  });

  test.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
  ])("%iを渡したら%pを返す", (number: number, expected: number) => {
    expect(fib.exec(number)).toEqual(expected);
  });

  test("大きな数値で計算する_再帰による実装", () => {
    const command = new FibonacciRecursive();
    expect(command.exec(40)).toEqual(102334155);
  });

  test("大きな数値で計算する_ループによる実装", () => {
    const command = new FibonacciLoop();
    expect(command.exec(40)).toEqual(102334155);
  });

  test("大きな数値で計算する_一般項による実装", () => {
    const command = new FibonacciGeneralTerm();
    expect(command.exec(40)).toEqual(102334155);
  });
});
