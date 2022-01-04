const account = {
  name: "Khalid Reda",
  expenses:[]
}
// Expense  -> description , amount
// addExpense -> description , amount
// getAccountSummary -> total up all expenses -> Khalid Reda has $ 500 in expenses if you want to calculate the total use forEach 
account.addExpense('Rent', 950)
account.addExpense('Coffe', 2)
console.log(account.getAccountSummary()) // print Khalid Reda has 952 $ in expenses 