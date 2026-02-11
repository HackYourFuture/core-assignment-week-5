import { test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

test("a normal case with valid numbers", () => {
  const numbers = [2, 4, 6];
  const result = calculateAverage(numbers);
  expect(result).toBe(4);
});

test("an array with a single number", () => {
  const numbers = [5];
  const result = calculateAverage(numbers);
  expect(result).toBe(5);
});

test("an empty array", () => {
  const numbers = [];
  const result = calculateAverage(numbers);
  expect(result).toBe(null);
});

test("a non-array input", () => {
  const numbers = "123";
  const result = calculateAverage(numbers);
  expect(result).toBe(null);
});

test("an array containing a non-number value", () => {
  const numbers = [1, 2, "3"];
  const result = calculateAverage(numbers);
  expect(result).toBe(null);
});
