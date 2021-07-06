// Create a function called shortcut to remove all the lowercase vowels in a given string.
// Examples
// shortcut("codewars") // --> cdwrs
// shortcut("goodbye")  // --> gdby

// take in string, return string

function shortcut(string){
  let regex = /[aeiou]/g
  return string.replace(regex, '')
}

//refactored
function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}
console.log(shortcut('goodbye'))
