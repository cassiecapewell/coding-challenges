// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

// notes: num = 0, for loop, arr = [], push i.

function arr(N){
  let result = []
  for(let i=0; i<N; i++){
    result.push(i)
  }
  return result
}
console.log(arr(3))

// Input: Array of elements
// ["h","o","l","a"]
// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"
function printArray(array){
  return array.join()
}
console.log(printArray(["h","o","l","a"]))

// #To square(root) or not to square(root)
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// The input array will always contain only positive numbers and will never be empty or null.
// The input array should not be modified!
function squareOrSquareRoot(array) {
  let result = []
  for (const item of array){
    if (Math.sqrt(item)%1==0){
        result.push(Math.sqrt(item))
      }else{
        result.push((item**2))
      }
  }
  return result
}

//refactored
function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });
}
console.log(squareOrSquareRoot([4,3,9,7,2,1]))
