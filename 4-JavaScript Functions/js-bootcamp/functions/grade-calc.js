// last lecture at Jacascript Functions
// students score ,total possible score
// 15/20 -> you got a C (75%) !
// A 90-100 B 80 -89 , C 78-79 , D 60 -69 , F - 0-59
// challenge Area 

let gradeCalc = function (studentScore ,totalScore) {
  // let studentScore = 90;
// let totalScore = 100;
let percent = (studentScore / totalScore) * 100;
let grade;
console.log(`${percent}%`)
  if (percent >= 90 && percent <= 100) {
  grade="A"
    return `You got a ${grade} grade (${percent}%)`
  } else if (percent >= 80 && percent <= 89) {
    grade="B"
    return `You got a ${grade} grade (${percent}%)`
} else if (percent >= 78 && percent <= 79) {
  grade="C"
  return `You got a ${grade} grade (${percent}%)`
} else if (percent >= 60 && percent <= 69) {
  grade="D"
  return `You got a ${grade} grade (${percent}%)`
} else if (percent >= 0 && percent <= 59) {
  grade="F"
  return `You got a ${grade} grade (${percent}%)`
  } else {
    return `Please inter the correct score with the right formula`
}
}
let result = gradeCalc(20, 100)
console.log(result )