// Implement a function that converts the given boolean value into its string representation.

function booleanToString(b){
  return b ? "true" : "false"
}
// or
function booleanToString(b){
  return b.toString();
}
console.log(booleanToString(true))

// Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split('').reverse().join('')
}
console.log(solution("alien"))

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// For example: "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// notes: replace t with u

function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}
console.log(DNAtoRNA('GCAT'))

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
  let y = x.map(element => Number(element))
  return y.reduce((a,c) => a+c)
}
// or
function sumMix(x){
  return x.map(a => +a).reduce((a,c) => a+c);
}
// The unary plus operator converts its operand to Number type.
console.log(sumMix([9, 3, '7', '3']))

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 13 should return : '1010101010101'.
// The size will always be positive and will only use whole numbers.

// notes: set variable to '10', repeat it size/2

function stringy(size) {
  let pattern = '10'
  if (size % 2 == 1){
    return pattern.repeat(size/2)+'1'
  }else{
    return pattern.repeat(size/2)
  }
}
// or
function stringy(size) {
  let str = ''
  for(let i=1; i<=size; i++)
    str += i % 2;
  return str;
}
console.log(stringy(5))
