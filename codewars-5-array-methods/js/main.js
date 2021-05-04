// Write a function to get the first elements of a sequence. Passing a parameter n (default=1) will return the first n elements of the sequence.
// If n == 0 return an empty sequence []

function first(arr, n=1) {
  return arr.slice(0,n)
}
console.log(first([1,2,3,4,5], 3))

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
// Can you figure out what's wrong here?

// original
// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }

// new
function swapValues(args) {
    return args.reverse()
}
console.log(swapValues([55, 101]))

// Given an array of integers, return a new array with each value doubled.

function maps(x){
  return x.map((n) => n*2)
}
console.log(maps([3,6,9]))

// refactored
const mapss = x => x.map(n => n*2)


// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
  return x.reduce((startVal, item) => startVal * item)
}
console.log(grow([1,2,3,4,5]))

// refactored
const growth = x => x.reduce((startVal, item) => startVal * item)

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
    "use strict";
    return words.join(' ')

};
console.log(smash(['these', 'strings', 'will', 'combine', 'to', 'make', 'a', 'sentence']))

// refactored
const smash = words => words.join(' ')
