// ~~~~~~~~~~~~ STRING METHODS ~~~~~~~~~~~~~~

// Give a short description of:
// what the method does
// how it works
// it's time complexity (if appropriate)
// and give three examples of it in action

// charAt
// returns the character at an index
str.charAt(0)
// constant time complexity O(1)
// examples:
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"

let str = 'A\uD87E\uDC04Z'
for (let i = 0, chr; i < str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i)
 console.log(chr)
}
function getWholeCharAndI(str, i) {
  let code = str.charCodeAt(i)
  if (Number.isNaN(code)) {
    return ''  // Position not found
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return [str.charAt(i), i]  // Normal character, keeping 'i' the same
  }

let str = "HELLO WORLD";
let res = str.charAt(str.length-1); // “D”

// charCodeAt
// returns the unicode at an index (a UTF-16 code integer between 0 and 65535)
str.charCodeAt(0)
// constant time complexity O(1)
// examples:
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"

'ABC'.charCodeAt(0)  // returns 65

let str = "HELLO WORLD";
let n = str.charCodeAt(0);     // 72

// concat
// concatenates the string arguments to the calling string and returns a new string
str1.concat(' ', str2)
// linear time complexity O(n)
// examples:
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

// includes
// determines if a substring is contained in a larger string and returns true or false
str.includes('alien')
// linear time complexity O(n)
// examples:
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

const str = 'To be, or not to be, that is the question.'
console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false

let str = "Hello world, welcome to the universe.";
let n = str.includes("world", 12);     // false

// indexOf
// returns the index of the substring within the string. If the substring is not contained in the original string, it will return -1.
 str.indexOf(‘q’)
//  linear time complexity O(n)
// examples:
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

// With no fromIndex value, or any fromIndex value lower than the string's length, the returned value is the same as the fromIndex value:
'hello world'.indexOf('') // returns 0
'hello world'.indexOf('', 3) // returns 3

// with any fromIndex value equal to or greater than the string's length, the returned value is the string's length:
'hello world'.indexOf('', 11) // returns 11

// match
// returns the matches when comparing a regular expression (regex) or value against a string
str.match("queen") (returns “queen”)
 linear time complexity O(n)
// examples:
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
// expected output: 43
console.log(paragraph[paragraph.search(regex)]);
// expected output: "."

let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation

let str = "Visit Canada!";
let n = str.search("Canada");    // 6

// repeat
//  repeats a string a specified number of times
str.repeat(3)
//  linear time complexity O(n)
// examples:
const chorus = 'Because I\'m happy. ';
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError

let str = "Hello world!";
str.repeat(2);

// replace
 // returns a string with a pattern replaced by a replacement string. It takes either a regex or a string as the pattern. With a regex you can globally replace all matches (using the g option), but with a string it will only replace the first occurrence.
str.replace(stringPattern, replacement)     // replaces first occurrence
str.replace(regexPattern, replacement)      // replaces all occurrences
 // linear time complexity O(n)
// examples:
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

// search
// executes a search for a match between a regular expression and this String object, returns the index of the first match between the regular expression and the given string, or -1 if no match was found
let str = "hey JudE"
let re = /[A-Z]/g
console.log(str.search(re))       // 4
// linear time complexity O(n)
// examples:
let str = "Visit Emmanuel!";
let n = str.search("Emmanuel");    // 6

let str = "Mr. Blue has a blue house";
let n = str.search("blue");      // 15

let str = "Mr. Blue has a blue house";
let n = str.search(/blue/i);    // 4

// slice
// returns a section of a string based on the index supplied, optional ending index as the second parameter
str. slice(12, 19)
// linear time complexity O(n)
// examples:
let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""

let str = 'The morning is upon us.'
str.slice(-3)      // returns 'us.'
str.slice(-3, -1)  // returns 'us'
str.slice(0, -1)   // returns 'The morning is upon us'

let str = "Hello world!";
let res = str.slice(3, 8);    // lo wo

// split
// converts string into an array of strings; takes a separator that is what you want to split apart the string on
str.split(' ')
// linear time complexity O(n)
// examples:
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

// substr
// returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards
const str = 'Mozilla'
console.log(str.substr(1, 2));     // "oz"
// linear time complexity O(n)
// examples:
let str = "Hello world!";
let res = str.substring(2);   // “llo world!”

let str = "Hello world!";
let res = str.substring(4, 1);    // “ell”

let str = "Hello world!";
let res = str.substring(-3);    // “Hello world!” If "start" is less than 0, it will start extraction from index position 0.

// toLowerCase
// returns a string with all lower case letters
str.toLowerCase()
// linear time complexity O(n)
// examples:
const sentence = 'The boys are back.';
console.log(sentence.toLowerCase());
// expected output: "the boys are back."

let str = "Hello World!";
let res = str.toLowerCase();   // “hello world!”

let string = “IDK if i can think of another original example, this method is pretty straightforward.”
let res = string.toLowerCase(); // “idk if i can think of another original example, this method is pretty straightforward.”

// toUpperCase
// returns a string with all upper case letters
str.toUpperCase()
// linear time complexity O(n)
// examples:
const sentence = 'The boys are back.';
console.log(sentence.toUpperCase());
// expected output: "THE BOYS ARE BACK."

let str = "Hello World!";
let res = str.toUpperCase();   // “HELLO WORLD!”

let string = “idk”
let res = string.toUpperCase();     // “IDK”


// trim
// removes white space from the beginning and end of a string
str.trim()
// linear time complexity O(n)
// examples:
const greeting = '   Hello world!   ';
console.log(greeting.trim());
// expected output: "Hello world!";

let orig = '   foo  ';
console.log(orig.trim()); // 'foo'

const food = “asparagus     “
return food.trim()     // “asparagus”
