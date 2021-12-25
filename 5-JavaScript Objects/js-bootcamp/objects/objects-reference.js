let myAccount = {
  name: "Khalid Reda",
  expenses: 0,
  income:0
}
let otherAccount = {
  name: "Mohamed Reda",
  expenses: 0,
  income:0
}

// let otherAccount = myAccount
// otherAccount.income=1000
// here is a tricky part the changes to the original object  happens only when reltated properties or variables but not new ones you got it so no need to explain it to youself no one will read this stuff 
// otherAccount={}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
  console.log(account)
}
// addExpense(myAccount, 2.50)
// console.log(myAccount.expenses)
// console.log(myAccount)


// add Income
let addIncome = function (account,amount) {
  // account.income = account.income + amount
  // console.log("Test this function "+account.income)
  return account.income = account.income + amount
}

// resetAccount
let resetAccount = function (account) {
   account.name = "",  account.expenses = 0,  account.income = 0;
}

// getAccountSummary
let getAccountSummary = function (account) {
//  return  `Account for ${account.name} has ${account.income-account.expenses} income ${account.income}`
console.log(`Account for ${account.name} has ${account.income-account.expenses} income ${account.income} expenses ${account.expenses}`) 
}
// Account for Andrew as the instructor said  has 900$. 1000% income 100$ expenses.
// add Income
// console.log(addIncome(myAccount,1000))
// addIncome()
// add Expense
// get Account summary
// reset Account
// get Account summary
// console.log(getAccountSummary(myAccount))

let result = getAccountSummary(myAccount)
// console.log(result)
//reset Account
resetAccount(myAccount)
// console.log(myAccount)


// Test otherAccount
// first I will print the object
console.log(otherAccount)// work fine { name: 'Mohamed Reda', expenses: 0, income: 0 }
//add expense 
addExpense(otherAccount, 50) // print { name: 'Mohamed Reda', expenses: 50, income: 0 }
addIncome(otherAccount, 1000)// print 
console.log(otherAccount) 
getAccountSummary(otherAccount)//Account for Mohamed Reda has 950 income 1000 expenses 50
//reset again
resetAccount(otherAccount)
getAccountSummary(otherAccount)
// print the account after reset 
console.log(otherAccount)

