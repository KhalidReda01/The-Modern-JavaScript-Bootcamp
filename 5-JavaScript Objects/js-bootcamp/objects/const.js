// const isRaining = true
// isRaining = false;
// console.log(isRaining)
const person = {
  age: 22,

}
person.age= 23
// person = {}
console.log(person.age)
// Challengre Area 

const gradeCalc = function (studentScore ,totalScore) {
  // let studentScore = 90;
// let totalScore = 100;
const percent = (studentScore / totalScore) * 100;
let grade;
console.log(`${percent}%`)
  if (percent >= 90 && percent <= 100) {
  grade="A"
    // return `You got a ${grade} grade (${percent}%)`
  } else if (percent >= 80 && percent <= 89) {
    grade="B"
    // return `You got a ${grade} grade (${percent}%)`
} else if (percent >= 78 && percent <= 79) {
  grade="C"
  // return `You got a ${grade} grade (${percent}%)`
} else if (percent >= 60 && percent <= 69) {
  grade="D"
  // return `You got a ${grade} grade (${percent}%)`
} else if (percent >= 0 && percent <= 59) {
  grade="F"
  // return `You got a ${grade} grade (${percent}%)`
  } else {
    return `Please inter the correct score with the right formula`
  }
  return `You got a ${grade} grade (${percent}%)`
}
const result = gradeCalc(20, 100)
console.log(result)