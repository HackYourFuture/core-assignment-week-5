function countVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase(); //  Convert to lowercase to catch "A" and "a"

    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("hello")); // returns 2
console.log(countVowels("javascript")); // returns 3
console.log(countVowels("")); // returns 0
console.log(countVowels("Apple")); // returns 1
