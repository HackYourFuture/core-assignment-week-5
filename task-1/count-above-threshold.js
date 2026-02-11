export function countAboveThreshold(numbers, threshold) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) {
      count++;
    }
  }

  return count;
}

console.log(countAboveThreshold([1, 5, 10, 3], 4));
console.log(countAboveThreshold([7, 8, 9], 10));
console.log(countAboveThreshold([], 5));
