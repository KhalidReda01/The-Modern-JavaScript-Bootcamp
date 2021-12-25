let myAccount = {
  name: "Khalid Reda",
  expenses: 0,
  income:0
}


// let otherAccount = myAccount
// otherAccount.income=1000
// here is a tricky part the changes to the original object  happens only when reltated properties or variables but not new ones you got it so no need to explain it to youself no one will read this stuff 
// otherAccount={}

let addExpense = function (account, amount) {
  account={}
  // account.expenses = account.expenses + amount
  console.log(account)
}
addExpense(myAccount, 2.50)
console.log(myAccount.expenses)
console.log(myAccount)
