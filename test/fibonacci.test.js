import { ValueCommand } from "../src/application/fibonacci/valueCommand";
import { ListCommand } from "../src/application/fibonacci/listCommand";
import { Recursive } from "../src/domain/fibonacci/recursive";
import { Loop } from "../src/domain/fibonacci/loop";
import { GeneralTerm } from "../src/domain/fibonacci/generalTerm";
import { Service } from "../src/application/fibonacci/service";

describe("フィボナッチ数列", () => {
  describe("ドメイン", () => {
    let recursive;
    let loop;
    let generalTerm;
    beforeEach(() => {
      recursive = new ValueCommand(new Recursive());
      loop = new ValueCommand(new Loop());
      generalTerm = new ValueCommand(new GeneralTerm());
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
      const command = new ListCommand(new ValueCommand(new Recursive()));
      const result = command.exec(40);

      expect(result[0]).toEqual(BigInt(0));
      expect(result[result.length - 1]).toEqual(BigInt(102334155));
    });
  });

  describe("アプリケーション", () => {
    let service;
    beforeEach(() => {
      service = new Service();
    });

    test("再帰リストを返す", () => {
      const result = service.recursiveList(5);

      expect(result[5]).toEqual(BigInt(5));
    });

    test("ループリストを返す", () => {
      const result = service.loopList(5);

      expect(result[5]).toEqual(BigInt(5));
    });

    test("一般項リストを返す", () => {
      const result = service.generalTermList(5);

      expect(result[5]).toEqual(BigInt(5));
    });
  });
});
