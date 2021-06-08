// Create a function that takes 2 nonnegative integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// Notes:
// If either input is an empty string, consider it as zero.
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
  return (Number(a)+Number(b)).toString()
}
console.log(sumStr("12", "1"))


// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
//
// my notes: weight is kg, height is meters
// also BMI is ugly and racist

function bmi(weight, height) {
  let bmi = (weight/(height**2))
  if (bmi <= 18.5){
    return "Underweight"
  }else if (bmi <= 25){
    return "Normal"
  }else if (bmi <= 30){
    return "Overweight"
  }else{
    return "Obese"
  }
}

function bmi(weight, height) {
  let bmi = (weight / Math.pow(height, 2));
  switch (true) {
    case bmi <=18.5:
    return 'Underweight';
    case bmi <=25.0:
    return 'Normal';
    case bmi <=30:
    return 'Overweight';
    default:
    return 'Obese';

  }
}

function bmi(weight, height) {
  let bmi  = weight/(height*height);
  return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}

const bmi = (w, h, bmi = w/(h**2)) => bmi <= 18.5 ? "Underweight" :
                                      bmi <= 25 ? "Normal" :
                                      bmi <= 30 ? "Overweight" : "Obese";
console.log(bmi(54,1.65))
