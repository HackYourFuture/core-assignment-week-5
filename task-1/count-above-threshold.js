function countAboveThreshold(numbers, threshold) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.filter((num) => num > threshold).length;
}

console.log(countAboveThreshold([1, 5, 10, 3], 4)); // returns 2
console.log(countAboveThreshold([7, 8, 9], 10)); // returns 0
console.log(countAboveThreshold([], 5)); // returns 0
