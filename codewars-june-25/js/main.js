// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


String.prototype.toJadenCase = function () {
  let jadenArray = this.split(' ')
  let upperCase = jadenArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return upperCase
};

console.log(("How can mirrors be real if our eyes aren't real").toJadenCase())

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort((a,b) => a-b)
  return sorted[0]+sorted[1]
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77], 7))


// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  return array.reduce(((a,c) => a+c),0)%2 ? "even" : "odd"
}
console.log(oddOrEven([0,1,4], "odd"))
