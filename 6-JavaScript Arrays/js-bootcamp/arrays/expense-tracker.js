const account = {
  name: "Khalid Reda",
  expenses: [],
  addExpense: function (expenses, value) {
    
    // this.expenses= Number(this.expenses) + Number(value);
    // console.log(typeof this.expenses + value )
    return this.expenses= Number(this.expenses) + Number(value)
  },
  getAccountSummary: function () {
    // console.log(`${this.name} has $ ${this.expenses} in expenses`)
    return `${this.name} has $ ${this.expenses} in expenses`
  }
}
// Expense  -> description , amount
// const addExpense = function (expenses,value) {
//   account.expenses = value;
// }
// addExpense('Rent', 950)
// console.log(account)
// addExpense -> description , amount
// getAccountSummary -> total up all expenses -> Khalid Reda has $ 500 in expenses if you want to calculate the total use forEach 
account.addExpense('Rent', 950)
account.addExpense('Coffe', 2)
console.log(account.getAccountSummary()) // print Khalid Reda has 952 $ in expenses 
