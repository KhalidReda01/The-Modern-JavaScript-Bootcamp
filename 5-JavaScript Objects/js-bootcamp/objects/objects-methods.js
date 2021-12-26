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
 
}
// seatParty
// removeParty
let status = restaurant.checkAvailablity(50)

console.log(status)