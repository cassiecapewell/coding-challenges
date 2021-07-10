// Your task is simply to count the total number of lowercase letters in a string.
// Examples:
// lowercaseCount("abc"); ===> 3
// lowercaseCount("abcABC123"); ===> 3
// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
// lowercaseCount(""); ===> 0;
// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

// take in a string
// return an integer

function lowercaseCount(str){
  let regex = /[a-z]/g
  return str.match(regex) === null ? 0 : str.match(regex).length
}
console.log(lowercaseCount("abcABC123")) // 3
