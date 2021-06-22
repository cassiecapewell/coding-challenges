// Write a function that rearranges an integer into its largest possible value.
// Example (Input --> Output)
// 123456 --> 654321
// 105 --> 510
// 12 --> 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

// notes: toString, split, sort, join, make a number

function superSize(num){
  return Number(num.toString().split('').sort((a,b) => b-a).join(''))
}
console.log(superSize(123456))

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// notes: arr.sort, push first index, last index, and the difference

function differenceInAges(ages){
  let result = []
  let ordered = ages.sort((a,b) => a-b)
  result.push(ordered[0], ordered[ordered.length-1], ordered[ordered.length-1]-ordered[0])
  return result
}

//refactored
function differenceInAges(ages){
  let max = Math.max(...ages),
      min = Math.min(...ages)
      diff = max - min
  return [min, max, diff]
}
console.log(differenceInAges([16, 5, 77, 44, 35, 81]))


// You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.

// notes: .split(',') arr.pop(), arr.shift(), return array, need conditional for null

// function array(arr){
//   let array = arr.split(',')
//   if(array.length < 3){
//     return null
//   }else{
//     array.pop()
//     array.shift()
//     return array.join(' ')
//   }
// }

//refactored
function array(arr){
  let array = arr.split(',');
  array.pop()
  array.shift()
  return array.length ? array.join(' ') : null;
}

//another refactor
const array = str => {
  let arr = str.split(",");
  return arr.length > 2 ? arr.slice(1,-1).join(" ") : null;
}
console.log(array('1,2,3,4,5'))
