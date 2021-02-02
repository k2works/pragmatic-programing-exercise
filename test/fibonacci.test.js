import { Command } from "../src/domain/fibonacci/command";
import { Recursive } from "../src/domain/fibonacci/recursive";
import { Loop } from "../src/domain/fibonacci/loop";
import { GeneralTerm } from "../src/domain/fibonacci/generalTerm";

describe("フィボナッチ数列", () => {
  let recursive;
  let loop;
  let generalTerm;
  beforeEach(() => {
    recursive = new Command(new Recursive());
    loop = new Command(new Loop());
    generalTerm = new Command(new GeneralTerm());
  });

  test.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
  ])("%iを渡したら%pを返す", (number, expected) => {
    expect(recursive.exec(number)).toEqual(BigInt(expected));
  });

  test("大きな数値を計算する_再起処理による実装", () => {
    expect(recursive.exec(40)).toEqual(BigInt(102334155));
  });

  test("大きな数値を計算する_ループ処理による実装", () => {
    expect(loop.exec(40)).toEqual(BigInt(102334155));
  });

  test("大きな数値を計算する_一般項による実装", () => {
    expect(generalTerm.exec(40)).toEqual(BigInt(102334155));
  });

  test("10までのフィボナッチ配列を返す", () => {
    const command = new Command(new Recursive());
    const result = command.generateList(40);

    expect(result[0]).toEqual(BigInt(0));
    expect(result[result.length - 1]).toEqual(BigInt(102334155));
  });
});
