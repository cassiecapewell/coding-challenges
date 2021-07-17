// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.
//
// Example:
//
// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

// take in string and array of numbers (array is indexes to be deleted)
// return one letter string

function lastSurvivor(letters, coords) {
  let arr = letters.split('')
  coords.forEach(index => arr.splice(index, 1))
  return arr.join('')
}
console.log(lastSurvivor('smgotlyubemgetva', [12,1,13,5,4,5,8,3,6,5,3,3,0,0,0])) // 'v'
