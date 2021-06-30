// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// take in array of numbers
// return array of strings of vowels if they match

// function isVow(array){
//   let a = 'a'.charCodeAt() // 97
//   let e = 'e'.charCodeAt()
//   let k = 'i'.charCodeAt()
//   let o = 'o'.charCodeAt()
//   let u = 'u'.charCodeAt()
//   let vowels = []
//   for(let i=0; i<array.length; i++){
//     if ((array[i] === a) || (array[i] === e) || (array[i] === k) || (array[i] === o) || (array[i] === u)){
//       vowels.push(String.fromCharCode(array[i]))
//     }else{
//       vowels.push(array[i])
//     }
//   }
//   return vowels
// }

//refactored
const isVow = a =>{
  let map = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u',
  }
  return a.map(num => map[num] ? map[num] : num);
}
console.log(isVow([97,121,110,113,113,103,121,121,101,107,103]))

// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// take in an array
// return smallest integer

class SmallestIntegerFinder {
  findSmallestInt(array){
    return Math.min(...array)
  }
}
