import { expectType } from "ts-expect";
import { flatten } from "./index";

describe("flatten", function() {
  it("should flatten an array", function() {
    const result = flatten([1, [2, [3, [4, [5]]], 6, [[7], 8], 9], 10]);

    expectType<number[]>(result);

    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should work with array-like", function() {
    const result = flatten("test");

    expectType<string[]>(result);

    expect(result).toStrictEqual(["t", "e", "s", "t"]);
  });

  it("should work with arguments", function() {
    const result = flatten(arguments);

    expectType<any[]>(result);

    expect(result).toStrictEqual([]);
  });
});
