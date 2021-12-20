let isAccountLocked = false;
let userRole = 'admin';
if (isAccountLocked) {
  console.log('is account locked')
} else {
  console.log("welcome!")
}
// if (true) {
  
// } else if (true) {
  
// } else {
  
// }
if (isAccountLocked) {
  console.log('is account locked')

} else if (userRole === "admin") {
    console.log("Welcome Admin")
} else {
  console.log("welcome")
}
// Challenge Area 
let temp = 45;
// It is freezing outside

//It hot outside!
// Go for it It is pretty nice.
if (temp <= 32) {
  console.log("It is freezing outside")
  
} else if(temp >= 110){
  console.log("It's hot outside")
} else {
  console.log("Go for it It is pretty nice")
}