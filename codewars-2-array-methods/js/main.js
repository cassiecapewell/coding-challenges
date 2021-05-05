// Write a function to split a string and convert it into an array of words. For example:

function stringToArray(string){
  return string.split(' ')
}
console.log(stringToArray("aliens exist"))

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
  return numbers.filter(n => n%divisor === 0)
}
console.log(divisibleBy([1,2,3,4,5], 2))
