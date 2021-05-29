// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)){
    return true
  }else{
    return false
  }
}

// refactored
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  let array = x.split('')
  let nums = array.map(number => {
    if(Number(number) < 5){
      return "0"
    }else{
      return "1"
    }
  })
  let stringy = nums.join('')
}

// refactored taken from solutions
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
  return a.includes(x)
}


// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."
// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. The Loch Ness Monster almost tricked you!
// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy
// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.

function isLockNessMonster(s) {
  return ((s.includes(3.50)) || (s.includes("three fifty")) || (s.includes("tree fiddy")))
}


// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}
console.log(nameShuffler("Young Thug"))
