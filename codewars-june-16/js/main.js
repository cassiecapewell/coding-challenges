// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// notes: filter, if >= 0. then reduce that array

function positiveSum(arr) {
  let positiveNums = arr.filter(i => i>=0);
  let sumOfPos = positiveNums.reduce((a,c) =>a+c, 0);
  return sumOfPos
}

//refactored
function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

function findNeedle(haystack) {
   let position = haystack.findIndex(needle => needle === "needle")
   return `found the needle at position ${position}`
}

// refactored
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}


// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example: 348597 => [7,9,5,8,4,3]

function digitize(n) {
  return n.toString().split('').reverse().map(Number)
}


// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.
// Example:
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let result = []
  if((input == null) || (input.length === 0)){
    return result
  }else{
    let countOfPos = input.filter(num => num>0)
    result.push(countOfPos.length)
    let sumOfNeg = input.filter(num => num<0).reduce((a,c)=>a+c,0)
    result.push(sumOfNeg)
    return result
  }
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0
//
// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
function sum (numbers) {
  return numbers.reduce((a,c) => a+c, 0)
};

// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null.
// The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive(arr) {
  for (let i=0; i<arr.length-1; i++) {
    if (arr[i]+1 !== arr[i+1]){
      return arr[i+1];
    }else{
      return null;
    }
}
console.log(firstNonConsecutive([1,2,3,4,5,7,8,10]))
