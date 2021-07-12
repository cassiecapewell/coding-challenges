// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// take in array of nums
// return a num

function squareSum(nums){
  return nums.map(n => (n**2)).reduce(((a,c)=>a+c),0)
}
console.log(squareSum([1,2,2]))

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
// examples:
// [9, 3, '7', '3'], 22
// ['5', '0', 9, 3, 2, 1, '9', 6, 7], 42
// ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'], 41

// take in an array of numbers and string numbers
// return number

function sumOfVals(arr){
  return arr.map(n=>Number(n)).reduce((a,c)=>a+c)
}
console.log(sumOfVals([9, 3, '7', '3']))
