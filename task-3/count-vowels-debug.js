function countVowels(text) {
  let count = 0;
  const textToLowerCase = text.textToLowerCase();
  for (let i = 0; i < textToLowerCase.length; i++) {
    if (
      textToLowerCase[i] === "a" ||
      textToLowerCase[i] === "e" ||
      textToLowerCase[i] === "i" ||
      textToLowerCase[i] === "o" ||
      textToLowerCase[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello")); // returns 2
console.log(countVowels("javascript")); // returns 3
console.log(countVowels("")); // returns 0
