const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

let markHigherBMI = false;

function calculateBMI(weights, height) {
  let bmi = weights / (height * height);
  return bmi;
}

function compareBMI(BMIMark, BMIJohn) {
  if (BMIMark > BMIJohn) {
    markHigherBMI = true;
    console.log("Mark is higher");
  } else {
    markHigherBMI = false;
  }
}

console.log("Data 1: Mark's BMI: ", calculateBMI(massMark, heightMark));
console.log("Data 1: John's BMI: ", calculateBMI(massJohn, heightJohn));
compareBMI(calculateBMI(massMark, heightMark), calculateBMI(massJohn, heightJohn));

console.log("Data 2: Mark's BMI: ", calculateBMI(95, 1.88));
console.log("Data 2: J,ohn's BMI: ", calculateBMI(85, 1.76));
compareBMI(calculateBMI(95, 1.88)), calculateBMI(85, 1.76);
