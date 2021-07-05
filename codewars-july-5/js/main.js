// Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}
console.log(validateUsr('cassiespace33'))

// ^ : start of string
// [ : beginning of character group
// 0-9 : any digit
// a-z : any lowercase letter
// _ : underscore
// ] : end of character group
// {} : specify a minimum and maximum number of permitted matches (inclusive)
// $ : end of string
