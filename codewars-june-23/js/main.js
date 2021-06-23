// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// take in a string
//return: number (of vowels)

// notes: set count to 0, conditional count++

function getCount(str) {
  let vowelsRegex = /[a,e,i,o,u]/g
  let result = str.match(vowelsRegex)
  return result ? result.length : 0
}
console.log(getCount('chs'))

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// take in string
// return string (no vowels)
// "waffle" --> "wffl"

function disemvowel(str){
  let vowels = /[aeiou]/gi
  let noVowels = str.replace(vowels, '')
  return noVowels
}

//refactored
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel('waffle'))

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.

// take in string
// return string of middle character if odd num of chars, or middle two characters if even num of chars
// "middle" --> "dd"
// "the" --> "h"

// conditional, if s.length%2===0 return s.charAt(Math.floor(s.length/2), Math.ceil(s.length/2))
function getMiddle(s){
  return (s.length%2===1) ? s.charAt(s.length/2) : `${s.charAt((s.length/2)-1)}${s.charAt(s.length/2)}`
}
console.log(getMiddle('middle'))

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// takes in an integer
// returns an integer
// 9119 --> 811181
// 22 --> 44
// 321 --> 941

function squareDigits(num){
  let numArray = num.toString().split('')
  let result = numArray.map(number => number**2).join('')
  return Number(result)
}
console.log(squareDigits(321), 941)

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// take in a string of numbers
// return a string with two numbers separated by a space (highest first)

function highAndLow(numbers){
  let sorted = numbers.split(' ').sort((b,a) => b-a)
  return `${sorted[sorted.length-1]} ${sorted[0]}`
}

//refactored
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
console.log(highAndLow('1 2 3 4 5'), '5 1')
