import { Command } from "../application/fibonacci/command";
import { List } from "../application/fibonacci/list";
import { Value } from "../application/fibonacci/value";
import { FibonacciType, FibonacciTypeEnum } from "../domain/type/fibonacci";

describe("フィボナッチ数列", () => {
  let recursive: Command;
  let loop: Command;
  let generalTerm: Command;
  beforeEach(() => {
    recursive = new Value(FibonacciTypeEnum.valueOf(FibonacciType.Recursive));
    loop = new Value(FibonacciTypeEnum.valueOf(FibonacciType.Loop));
    generalTerm = new Value(
      FibonacciTypeEnum.valueOf(FibonacciType.GeneralTerm)
    );
  });

  describe("アプリケーション", () => {
    test("40までのフィボナッチ数列を返す", () => {
      const command = new List(
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
      const command = new List(
        FibonacciTypeEnum.valueOf(FibonacciType.Recursive)
      );
      expect(() => command.exec(101)).toThrow("");
    });
  });

  describe("ドメイン", () => {
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
  });
});
