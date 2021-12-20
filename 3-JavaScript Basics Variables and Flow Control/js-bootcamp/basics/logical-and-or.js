let temp = 150;
// if (temp >= 60) {
//   if (temp <= 90) {
    
//   }
// }

// Logical And Operator -True if both sides are true false otherwise
// Logical or Operator - True if at least one side is true False otherwise

if (temp >= 60 &&temp <=90) {
  console.log("It is pretty nice out")
}else if (temp <=0||temp >=120) {
  console.log('Do not go outside')
} else {
  console.log("Eh . Do what you want");
}

// Challenge area
let isGuestOneVegan = false;
let isGuestTwoVegan = false;
//Are both vegan? only offer up vegan dishes.
// at least one vegan ?Make sure to offer up some vegan options.
// Else, Offer up anything on the menue

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
  console.log("Only offer up vegan dishes")
} else if (isGuestOneVegan === true || isGuestTwoVegan === true) {
  console.log("Make sure to offer up some vegan options.")
} else {
  console.log("Offer anything on the menue")
}