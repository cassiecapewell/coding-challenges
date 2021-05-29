// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// notes: conditional , filter for 'good', if new arr.length > 2, return 'I smell a series' if new arr.length > 0 return 'Publish!' if new arr.length === 0 (else) return 'Fail!'

// function well(x){
//   let goodArr = x.filter(word => word === 'good')
//   if(goodArr.length > 2){
//     return 'I smell a series!'
//   }else if (goodArr.length > 0){
//     return "Publish!"
//   }else{
//     return 'Fail!'
//   }
// }
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

// function arrayMadness(a, b) {
//   newA = a.map(x => x**2)
//   newB = b.map(x => x**3)
//   console.log(newA, newB)
//   return (newA.reduce((acc,c) => (acc+c))) > (newB.reduce((acc,c) => (acc+c)))
// }

//refactored
const arrayMadness = (a, b) => a.reduce((acc, c) => acc + c**2) > b.reduce((acc, c) => acc + c**3)

console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]))
