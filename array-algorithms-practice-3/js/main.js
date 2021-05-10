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
