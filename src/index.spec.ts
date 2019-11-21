import { expectType } from "ts-expect";
import { flatten } from "./index";

describe("flatten", () => {
  it("should flatten an array", () => {
    const result = flatten([1, [2, [3, [4, [5]]], 6, [[7], 8], 9], 10]);

    expectType<number[]>(result);

    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should work with array-like", () => {
    const result = flatten("test");

    expectType<string[]>(result);

    expect(result).toStrictEqual(["t", "e", "s", "t"]);
  });

  it("should work with readonly array", () => {
    const input = [1, [2, [3, [4]]]] as const;
    const result = flatten(input);

    expectType<(1 | 2 | 3 | 4)[]>(result);

    expect(result).toStrictEqual([1, 2, 3, 4]);
  });

  it("should work with arguments", () => {
    const input = (function() {
      return arguments;
    })();
    const result = flatten(input);

    expectType<any[]>(result);

    expect(result).toStrictEqual([]);
  });

  it("should work with mixed types", () => {
    const fn = (x: string) => x;
    const input = [1, ["test", [fn, [true]]]];
    const result = flatten(input);

    expectType<(number | string | boolean | typeof fn)[]>(result);

    expect(result).toStrictEqual([1, "test", fn, true]);
  });

  it("should work with tuples", () => {
    const input: [number, [number, number], [number]] = [1, [1, 2], [3]];
    const result = flatten(input);

    expectType<number[]>(result);

    expect(result).toStrictEqual([1, 1, 2, 3]);
  });
});
