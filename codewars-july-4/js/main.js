// You will be given an array of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//take in an array
// return string

function twoSort(s) {
  return s.sort()[0].split('').join('***')
}
console.log(twoSort(['CBD', "BTC", "dance"]))


// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// take in strings
// return one string

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
console.log(buildString('put', 'that', 'thing', 'in', 'park'))
