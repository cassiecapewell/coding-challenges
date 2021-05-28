// // ~~~~~~~~~~~~~~~~ ARRAY METHODS ~~~~~~~~~~~~~~~~
// // Give a short description of:
// // what the method does
// // how it works
// // it's time complexity (if appropriate)
// // and give three examples of it in action
//
//
// // map
// // calls a function for each item in an array, and returns the array of results
//   let newArr = arr.map(element => element * 2)
// // linear time complexity O(n)
// // examples:
let numbers = [4, 9, 16, 25];
let x = numbers.map(Math.sqrt)
//
let numbers = [65, 44, 12, 4];
let newarray = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
}
//
var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];
function getFullName(item) {
  var fullname = [item.firstname,item.lastname].join(" ");
  return fullname;
}
function myFunction() {
  document.getElementById("demo").innerHTML = persons.map(getFullName);
}
//
//
// // reduce
// // returns a single value after iterating through the elements of the array
//   let newSum = arr.reduce((accumulator, currentValue) => {
// 	   return accumulator + currentValue
//   })
// // linear time complexity O(n)
// // examples:
function getSum(total, num) {
  return total + Math.round(num);
}
function myFunction(item) {
  document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);
}
//
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));
//
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x
}, initialValue)
//
//
// // filter
// // returns an array of values that each return ‘true’ to a given condition
//   let newArr = arr.filter(element => element > 5)
// // linear time complexity O(n)
// // examples:
const result = words.filter(word => word.length > 6);
//
function isBigEnough(value) {
  return value >= 10
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
//
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime));
//
//
// // forEach
// // runs a function for every element in an array
//   arr.forEach(element => console.log(element))
// // linear time complexity O(n)
// // examples:
const items = ['item1', 'item2', 'item3']
const copyItems = []
items.forEach(function(item){
  copyItems.push(item)
})
//
let fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
//
const words = ['hello', 'bird', 'table', 'football', 'pipe', 'code'];
const capWords = words.forEach(capitalize);
function capitalize(word, index, arr) {
  arr[index] = word[0].toUpperCase() + word.substring(1);
}
//
//
// // sort
// // sorts the elements in an array according to a given arrow function that does the comparison (a-b is lowest to highest, b-a is highest to lowest)
//   arr.sort((a, b) => a - b)
// // linear time complexity O(n)
// // examples:
let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
//
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
//
let items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});
//
//
// // slice
// // returns a new array with all array elements within given start and end parameters, NOT including the end parameter
//   arr.slice(4,10)
// // linear time complexity O(n)
// // examples:
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
//["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
//
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3, -1);
// Lemon, Apple
//
function list() {
  return Array.prototype.slice.call(arguments)
}
let list1 = list(1, 2, 3)
// [1, 2, 3]
//
//
// // pop
// // deletes the last element in an array
//   arr.pop()
// // constant time complexity O(1)
// // examples:
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
//
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let popped = myFish.pop();
console.log(myFish);
// ['angel', 'clown', 'mandarin' ]
//
let numbers = [1,2,3,4,5]
console.log(numbers.pop())
// 5
//
//
// // shift
// // deletes the first element in an array
//   arr.shift()
// // linear time complexity O(n) because every element gets a new index
// // examples:
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]
//
let names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];
while( typeof (i = names.shift()) !== 'undefined' ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
// every iteration will remove the next element from the array until it's empty
//
let fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
function myFunction() {
  fruits.shift();
  document.getElementById("demo").innerHTML = fruits;
}
//
//
// // push
// // adds an element to the end of an array
//   arr.push()
// // constant time complexity O(1)
// // examples:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
//
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon", "Pineapple");
//
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
//
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
//
//
// // unshift
// // adds an element to the beginning of an array
//   arr.unshift()
// // linear time complexity O(n) because every element gets a new index
// // examples:
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// expected output: 5 (returns new length of array)
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
// expected output: ["Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]
//
arr = [4, 5, 6]
arr.unshift(1)
arr.unshift(2)
arr.unshift(3)
console.log(arr)
// [3, 2, 1, 4, 5, 6]
//
//
// // includes
// // returns true or false if at least one element meets a given condition
//   arr.includes(4)
// // linear time complex O(n)
// // examples:
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true
//
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// expected output: true
console.log(pets.includes('at'));
// expected output: false
//
[1, 2, NaN].includes(NaN)
// expected output: true
//
//
// // indexOf
// // returns the index of a given item, or else -1
//   arr.indexOf(“dog”)
// // linear time complex O(n)
// // examples:
let fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
let a = fruits.indexOf("Apple", 4);
// 4 is index to start searching at
//
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// expected output: 1
//
console.log(beasts.indexOf('bison', 2));
// expected output: 4
//
//
// // every
// // a function is called on every element in an array, and returns ‘true’ if every element is true, otherwise ‘false’
//   arr.every(element => element > 5)
// // linear time complex O(n)
// // examples:
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(array1.every(isBelowThreshold));
//
let ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}
//
let nums = [1,2,3,4,5]
console.log(nums.every(number => number > 5))
// expected output: false



//Practice Problems

// One:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function multipyingValues(arr){
  return arr.reduce((acc, currentVal) => acc * currentVal)
}
console.log(multipyingValues([1,2,3,4]))

// Two:
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

// notes: sort (a-b), use 0 and arr.length-1 indexes to get first and last, arr.pop those into a new array, and also pop arr[arr.length-1]-arr[0]

function familyAgeDifference(ages){
  let ageDifference = []
  let sorted = ages.sort((a,b) => a-b)
  ageDifference.push(sorted[0], sorted[sorted.length-1], (sorted[sorted.length-1]-sorted[0]))
  return ageDifference
}
console.log(familyAgeDifference([26, 16, 12, 64, 57]))


// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

// notes: arr.sort a-b, arr.shift, arr.pop, arr.reduce

function sumSome(numbers){
  numbers.sort((a,b) => a-b)
  numbers.shift()
  numbers.pop()
  return numbers.reduce((a,c) => a+c)
}
console.log(sumSome([100,54,3,7,61]))


// 5 array codewars


// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// notes: conditional , filter for 'good', if new arr.length > 2, return 'I smell a series' if new arr.length > 0 return 'Publish!' if new arr.length === 0 (else) return 'Fail!'

function well(x){
  let goodArr = x.filter(word => word === 'good')
  if(goodArr.length > 2){
    return 'I smell a series!'
  }else if (goodArr.length > 0){
    return "Publish!"
  }else{
    return 'Fail!'
  }
}
// refactored
const well = x => {
  const goodCount = x.filter(x => x == 'good').length;
  return goodCount < 1 ? 'Fail!' :
         goodCount < 3 ? 'Publish!' : 'I smell a series!';
}
console.log(well(['good', 'good', 'good', 'bad', 'bad', 'bad', 'bad']))

// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
// You will be given an array of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

// notes: sort with localeCompare, grab arr[0], split(''), return arr.join(***)
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
console.log(twoSort(["squirrels", "will", "take", "over", "the", "world", "maybe"]))


// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// notes: forEach, conditional if indexOf element %2 === 1, arr.pop element, return array

function removeEveryOther(arr){
  let x = arr.filter((element, index) => {
    return index % 2 === 0;
})
  return x
}
console.log(removeEveryOther([1,2,3,4,5,6]))

// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array: [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.

// notes: reverse the array, find indexOf()"wolf") then ternary

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

// refactored
function warnTheSheep(q) {
  return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
}

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
// E.g. arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

// notes: map to arrays of squares and cubes, boolean reduce comparison

function arrayMadness(a, b) {
  newA = a.map(x => x**2)
  newB = b.map(x => x**3)
  console.log(newA, newB)
  return (newA.reduce((acc,c) => (acc+c))) > (newB.reduce((acc,c) => (acc+c)))
}

//refactored
const arrayMadness = (a, b) => a.reduce((acc, c) => acc + c**2) > b.reduce((acc, c) => acc + c**3)

console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]))


// // ~~~~~~~~~~~~~~~~ STRING METHODS ~~~~~~~~~~~~~~~~


// Give a short description of:
// what the method does
// how it works
// it's time complexity (if appropriate)
// and give three examples of it in action

// charAt
// returns the character at an index
str.charAt(0)
// constant time complexity O(1)
// examples:
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"

let str = 'A\uD87E\uDC04Z'
for (let i = 0, chr; i < str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i)
 console.log(chr)
}
function getWholeCharAndI(str, i) {
  let code = str.charCodeAt(i)
  if (Number.isNaN(code)) {
    return ''  // Position not found
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return [str.charAt(i), i]  // Normal character, keeping 'i' the same
  }

let str = "HELLO WORLD";
let res = str.charAt(str.length-1); // “D”

// charCodeAt
// returns the unicode at an index (a UTF-16 code integer between 0 and 65535)
str.charCodeAt(0)
// constant time complexity O(1)
// examples:
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"

'ABC'.charCodeAt(0)  // returns 65

let str = "HELLO WORLD";
let n = str.charCodeAt(0);     // 72

// concat
// concatenates the string arguments to the calling string and returns a new string
str1.concat(' ', str2)
// linear time complexity O(n)
// examples:
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

// includes
// determines if a substring is contained in a larger string and returns true or false
str.includes('alien')
// linear time complexity O(n)
// examples:
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

const str = 'To be, or not to be, that is the question.'
console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false

let str = "Hello world, welcome to the universe.";
let n = str.includes("world", 12);     // false

// indexOf
// returns the index of the substring within the string. If the substring is not contained in the original string, it will return -1.
 str.indexOf(‘q’)
 // linear time complexity O(n)
// examples:
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

// With no fromIndex value, or any fromIndex value lower than the string's length, the returned value is the same as the fromIndex value:
'hello world'.indexOf('') // returns 0
'hello world'.indexOf('', 3) // returns 3

// with any fromIndex value equal to or greater than the string's length, the returned value is the string's length:
'hello world'.indexOf('', 11) // returns 11

// match
// returns the matches when comparing a regular expression (regex) or value against a string
str.match("queen") (returns “queen”)
//  linear time complexity O(n)
// examples:
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
// expected output: 43
console.log(paragraph[paragraph.search(regex)]);
// expected output: "."

let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation

let str = "Visit Canada!";
let n = str.search("Canada");    // 6

// repeat
//  repeats a string a specified number of times
str.repeat(3)
//  linear time complexity O(n)
// examples:
const chorus = 'Because I\'m happy. ';
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError

let str = "Hello world!";
str.repeat(2);

// replace
//  returns a string with a pattern replaced by a replacement string. It takes either a regex or a string as the pattern. With a regex you can globally replace all matches (using the g option), but with a string it will only replace the first occurrence.
str.replace(stringPattern, replacement)     // replaces first occurrence
str.replace(regexPattern, replacement)      // replaces all occurrences
//  linear time complexity O(n)
// examples:
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

// search
// executes a search for a match between a regular expression and this String object, returns the index of the first match between the regular expression and the given string, or -1 if no match was found
let str = "hey JudE"
let re = /[A-Z]/g
console.log(str.search(re))       // 4
// linear time complexity O(n)
// examples:
let str = "Visit Emmanuel!";
let n = str.search("Emmanuel");    // 6

let str = "Mr. Blue has a blue house";
let n = str.search("blue");      // 15

let str = "Mr. Blue has a blue house";
let n = str.search(/blue/i);    // 4

// slice
// returns a section of a string based on the index supplied, optional ending index as the second parameter
str. slice(12, 19)
// linear time complexity O(n)
// examples:
let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""

let str = 'The morning is upon us.'
str.slice(-3)      // returns 'us.'
str.slice(-3, -1)  // returns 'us'
str.slice(0, -1)   // returns 'The morning is upon us'

let str = "Hello world!";
let res = str.slice(3, 8);    // lo wo

// split
// converts string into an array of strings; takes a separator that is what you want to split apart the string on
str.split(' ')
// linear time complexity O(n)
// examples:
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

// substr
// returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards
const str = 'Mozilla'
console.log(str.substr(1, 2));     // "oz"
// linear time complexity O(n)
// examples:
let str = "Hello world!";
let res = str.substring(2);   // “llo world!”

let str = "Hello world!";
let res = str.substring(4, 1);    // “ell”

let str = "Hello world!";
let res = str.substring(-3);    // “Hello world!” If "start" is less than 0, it will start extraction from index position 0.

// toLowerCase
// returns a string with all lower case letters
str.toLowerCase()
// linear time complexity O(n)
// examples:
const sentence = 'The boys are back.';
console.log(sentence.toLowerCase());
// expected output: "the boys are back."

let str = "Hello World!";
let res = str.toLowerCase();   // “hello world!”

let string = “IDK if i can think of another original example, this method is pretty straightforward.”
let res = string.toLowerCase(); // “idk if i can think of another original example, this method is pretty straightforward.”

// toUpperCase
// returns a string with all upper case letters
str.toUpperCase()
// linear time complexity O(n)
// examples:
const sentence = 'The boys are back.';
console.log(sentence.toUpperCase());
// expected output: "THE BOYS ARE BACK."

let str = "Hello World!";
let res = str.toUpperCase();   // “HELLO WORLD!”

let string = “idk”
let res = string.toUpperCase();     // “IDK”


// trim
// removes white space from the beginning and end of a string
str.trim()
// linear time complexity O(n)
// examples:
const greeting = '   Hello world!   ';
console.log(greeting.trim());
// expected output: "Hello world!";

let orig = '   foo  ';
console.log(orig.trim()); // 'foo'

const food = “asparagus     “
return food.trim()     // “asparagus”
