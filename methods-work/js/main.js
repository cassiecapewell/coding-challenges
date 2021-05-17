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
