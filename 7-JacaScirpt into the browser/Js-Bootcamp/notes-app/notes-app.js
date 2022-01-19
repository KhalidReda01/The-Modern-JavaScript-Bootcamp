const notes = [
  {
   title: "My next Trip",
   body:"I would like to go to Turkey"
 }, {
   title: "Habbits to work on",
   body:"Exercise. Eating a bit better"
   }, {
   title: "Office Modification",
   body:"Get a new seat"
  }]

// console.log("This is from my HTML document")
// // DOM Document Object Model
// // Query and remove
// const p = document.querySelector('p')
// // console.log(p)
// // p.remove()
// // Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//   p.textContent="******************* Replaced with Dom"
//   // p.remove()
//   // console.log(p)
// //  console.log(p.textContent)
// })
document.querySelector('button').addEventListener('click', function (event) {
  // console.log('Did this work? ')
  // // console.log(event)
  // // console.log(event.target)
  event.target.textContent="The was clicked"
})