// Write your code here
// Use generateBigArray to create a big array numbers.
// Example: generateBigArray(1000000) will create an array of 1 million numbers.

import generateBigArray from "./bigArray.js";

function linear_search(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return target;
  }
  return "unsuccessful";
}

function binary_search(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return "unsuccessful";
}

const target = 123456789;
const experiments = [
  { size: 1000, label: "1k" },
  { size: 100000, label: "100k" },
  { size: 1000000, label: "1M" },
  { size: 10000000, label: "10M" },
];

// --- Linear Search Tests ---
experiments.forEach((exp) => {
  const arr = generateBigArray(exp.size);
  console.time(`Linear Search ${exp.label}`);
  linear_search(arr, target);
  console.timeEnd(`Linear Search ${exp.label}`);
});

console.log("---");

// --- Binary Search Tests ---
experiments.forEach((exp) => {
  const arr = generateBigArray(exp.size);
  console.time(`Binary Search ${exp.label}`);
  binary_search(arr, target);
  console.timeEnd(`Binary Search ${exp.label}`);
});
