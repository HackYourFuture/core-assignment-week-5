import generateBigArray from "./bigArray.js";

export function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      return array[middle];
    }
  }
  return null;
}

export function linearSearch(array, target) {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === target) {
      return target;
    }
  }
  return null;
}

const bigArray1k = generateBigArray(1000);
const bigArray100k = generateBigArray(100000);
const bigArray10m = generateBigArray(10000000);

console.time("binary1k");
binarySearch(bigArray1k, 999);
console.timeEnd("binary1k");

console.time("binary100k");
binarySearch(bigArray100k, 99999);
console.timeEnd("binary100k");

console.time("binary10m");
binarySearch(bigArray10m, 9999999);
console.timeEnd("binary10m");

console.time("linear1k");
linearSearch(bigArray1k, 999);
console.timeEnd("linear1k");

console.time("linear100k");
linearSearch(bigArray100k, 99999);
console.timeEnd("linear100k");

console.time("linear10m");
linearSearch(bigArray10m, 9999999);
console.timeEnd("linear10m");