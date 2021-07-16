// Write a small function that returns the values of an array that are not odd.

// take in array
// return values

function noOdds(values){
  return values.filter(n => n%2===0)
}

//refactored
noOdds = values => values.filter(n => n%2===0)

console.log(noOdds([1,2,3,4,5,6,7,8,9]))
