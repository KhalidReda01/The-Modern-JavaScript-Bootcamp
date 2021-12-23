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
  return "Name: " + name + " Score: " +score
}
// getScoreText("Khaild",100)
// getScoreText()
// let scoreText = getScoreText("Khaild",100)
let scoreText = getScoreText(undefined,100)
// let scoreText = getScoreText()
// console.log(scoreText)


//Challenge Area
// total , tipPercent .1 ,2 ,5

let getTip = function (total=0, tipPercent=0.2) {
  // console.log("test")
  return "The tip of total : "+total+"$ is " +total*tipPercent +"$"
}
getTip()
// let resultTip = getTip(100, 0.2)
let resultTip = getTip(40, 0.25)
console.log(resultTip)