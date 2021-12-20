// lexical scope static scope
// Global Scope - Defined outside of all blocks
// Local Scope


// In a scope you can access variables defined in that scope or in any parent/ancestor scope
//Global Scope (varOne)
    //local Scope (varTwo)
      //local Scope (varFour)
    //local Scope (varThree)

let varOne = "varOnث";
if (true) {
  console.log(varOne)
  let VarTwo = "varTwo";
  console.log(VarTwo)
  if (true) {
    let varFour="varFour"
  }
}

if (true) {
  let varThree = "varThree"
}
// console.log(VarTwo)