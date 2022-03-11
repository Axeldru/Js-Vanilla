let myAccount = {
    name: "Alex Becker",
    expenses: 0,
    income: 0
}

let addExpense = function (account, ammount) {
    account.expenses = account.expenses + ammount
  
    
}

// addIncome

let addIncome = function (account, income) {
    account.income = account.income + income

}
// resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
let reset = resetAccount (0)
console.log(reset);
// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses.
let accountsummary = function (account) {
    let balance = account.income - account.expenses
    return (`Account for ${account.name} has ${balance} in income. ${account.expenses} in expenses.`);
}
addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(accountsummary(myAccount));
resetAccount(myAccount)
console.log(accountsummary(myAccount));

