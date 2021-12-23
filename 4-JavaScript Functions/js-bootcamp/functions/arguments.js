// Mulitple arguments
let add = function (a, b, c) {
  return a + b + c
}
let result = add(10,1,5)
// console.log(result)
// Default arguments 
let getScoreText = function (name="Anonymous", score = 0) {
  // console.log(name)
  // console.log(score) 
  // return "Name: " + name + " Score: " +score
  return `Name :${name} Score: ${score}`
}
// getScoreText("Khaild",100)
// getScoreText()
// let scoreText = getScoreText("Khaild",100)
let scoreText = getScoreText(undefined,100)
// let scoreText = getScoreText()
console.log(scoreText)


//Challenge Area
// total , tipPercent .1 ,2 ,5
//I already did the challnge area before andrea asked for it and that's coool I think at the end of this course I will master Javascript just keep goind and keep code along and practice don't hurry
let getTip = function (total=0, tipPercent=0.2) {
  // console.log("test")
  let percent=tipPercent*100
  // return "The tip of total : "+total+"$ is " +total*tipPercent +"$"
  return  `The tip of total : ${total}$ is ${total*tipPercent}$ you get a  percent ${percent}% using Template String`
}
getTip()
// let resultTip = getTip(100, 0.2)
let resultTip = getTip(40, 0.25)
console.log(resultTip)
//Template Strings
// console.log("Khalid")
// console.log('khalid')
// console.log("Khalid" + 'Reda')
//backtic 
let name = "Ahmed"
let age = "20"
// console.log(`Hey , my name is Khalid!`)
console.log(`Hey , my name is ${name} I am ${age} years old.`)