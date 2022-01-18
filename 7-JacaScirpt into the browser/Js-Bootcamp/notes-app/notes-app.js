console.log("This is from my HTML document")
// DOM Document Object Model 
// Query and remove 
const p = document.querySelector('p')
// console.log(p)
// p.remove()
// Query all and remove 
const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
  p.textContent="******************* Replaced with Dom"
  // p.remove()
  // console.log(p)
//  console.log(p.textContent)
})