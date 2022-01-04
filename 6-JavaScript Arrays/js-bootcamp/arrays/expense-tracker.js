const account = {
  name: "Khalid Reda",
  expenses: [],
  income:[],
  addExpense: function (expenses, value) {
    
    // this.expenses= Number(this.expenses) + Number(value);
    // console.log(typeof this.expenses + value )
    // return this.expenses= Number(this.expenses) + Number(value)
    // instructor solution
    // haha I thout that he wanted it like that but I just print the output as he wanted
    this.expenses.push({
      description: expenses,
      amount:value
    })
  },
  addIncome: function (description,income) {
    this.income.push({
      description:description,
      amount:income
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
   
    this.expenses.forEach(function (expense) {
      totalExpenses= totalExpenses+expense.amount
      
    })
    let income = 0;
    this.income.forEach(function (incomes) {
      income = income + incomes.amount
    })
    return `${this.name} has  a balance of $ ${income-totalExpenses} . $ ${income} in income  $ ${totalExpenses} in expenses.`
    // console.log(`${this.name} has $ ${this.expenses} in expenses`)
    // console.log(this.expenses.amount)
    // return `${this.name} has $ ${this.expenses} in expenses`
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
// 1. add income array to account
// 2. addIncome method - > description , amount
// 3. Tweak getAccountSummary 
// Khalid Reda has a balance of $ 10 . $100 in income . $90 in expenses.
account.addExpense('Rent', 100)
account.addExpense('Coffe', 50)
account.addIncome('Job',1000)
// console.log(account)
console.log(account.getAccountSummary()) // print Khalid Reda has 952 $ in expenses
// console.log(account.expenses.description) // It's not working like that It's an array of objects 
console.log(account)