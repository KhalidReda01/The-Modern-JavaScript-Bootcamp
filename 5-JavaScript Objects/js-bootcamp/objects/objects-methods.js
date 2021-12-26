let restaurant = {
  name: 'ASB',
  guestCapcity: 75,
  guestCount: 0,
  checkAvailablity: function (partySize) {
let seatsLeft= this.guestCapcity-this.guestCount
    // this refers to the restaurant object
    // console.log(this.guestCapcity)
    // console.log(this.name)
    // console.log(restaurant.name)
    // console.log(partySize)
    console.log(seatsLeft)
    return partySize <= seatsLeft
  },
  //Challenge Area
  seatParty: function (seatsParty) {
   let addParty= this.guestCount = this.guestCount + seatsParty
    return addParty
  },
  removeParty: function (removeNumber) {
    let removeParty = this.guestCount = this.guestCount -removeNumber
    return removeParty
  }
}
// seatParty
// removeParty
// let status = restaurant.checkAvailablity(50)
// let test = restaurant.seatParty(20)
// let removeReslut = restaurant.seatParty(50)
// console.log(removeReslut)
// console.log(test)
// console.log(status)
console.log(restaurant.seatParty(74))
console.log(restaurant.checkAvailablity(4))
console.log(restaurant.removeParty(5))
console.log(restaurant.checkAvailablity(4))
