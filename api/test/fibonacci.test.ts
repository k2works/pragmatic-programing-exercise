import {
  Command,
  FibonacciValue,
  FibonacciList,
  FibonacciGeneralTerm,
  FibonacciLoop,
  FibonacciRecursive,
  FibonacciTypeEnum,
  FibonacciType,
} from "../domain/fibonacci";

describe("フィボナッチ数列", () => {
  let recursive: Command;
  let loop: Command;
  let generalTerm: Command;
  beforeEach(() => {
    recursive = new FibonacciValue(
      FibonacciTypeEnum.valueOf(FibonacciType.Recursive)
    );
    loop = new FibonacciValue(FibonacciTypeEnum.valueOf(FibonacciType.Loop));
    generalTerm = new FibonacciValue(
      FibonacciTypeEnum.valueOf(FibonacciType.GeneralTerm)
    );
  });

  test.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
  ])("%iを渡したら%pを返す", (number: number, expected: number) => {
    expect(recursive.exec(number)).toEqual(BigInt(expected));
  });

  test("大きな数値で計算する_再帰による実装", () => {
    expect(recursive.exec(40)).toEqual(BigInt(102334155));
  });

  test("大きな数値で計算する_ループによる実装", () => {
    expect(loop.exec(40)).toEqual(BigInt(102334155));
  });

  test("大きな数値で計算する_一般項による実装", () => {
    expect(generalTerm.exec(40)).toEqual(BigInt(102334155));
  });

  test("40までのフィボナッチ数列を返す", () => {
    const command = new FibonacciList(
      FibonacciTypeEnum.valueOf(FibonacciType.Recursive)
    );
    const result = command.exec(40);

    expect(result[0]).toEqual(BigInt(0));
    expect(result[result.length - 1]).toEqual(BigInt(102334155));
  });

  test("100以上は計算できない", () => {
    expect(() => recursive.exec(101)).toThrow("");
  });

  test("リストは100件まで", () => {
    const command = new FibonacciList(
      FibonacciTypeEnum.valueOf(FibonacciType.Recursive)
    );
    expect(() => command.exec(101)).toThrow("");
  });
});
