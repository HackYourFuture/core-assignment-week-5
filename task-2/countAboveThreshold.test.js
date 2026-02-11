import { describe, it, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

describe("calculateAverage", () => {
  it("returns the average for a normal array of numbers", () => {
    expect(calculateAverage([2, 4, 6])).toBe(4);
  });

  it("returns the number itself when the array has one element", () => {
    expect(calculateAverage([5])).toBe(5);
  });

  it("returns null for an empty array", () => {
    expect(calculateAverage([])).toBeNull();
  });

  it("returns null when input is not an array", () => {
    expect(calculateAverage("123")).toBeNull();
    expect(calculateAverage(null)).toBeNull();
  });

  it("returns null when the array contains a non-number value", () => {
    expect(calculateAverage([1, 2, "3"])).toBeNull();
  });
});
