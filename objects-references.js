//see how passing objects affects our objects

let myAccount = {
  name: "Parth",
  expenses: 0,
  income: 0,
};
//create a function that allows us to add an expense
//and tell which account i want to change

let addExpense = function (account, amount) {
  //   account = {};
  account.expenses = account.expenses + amount;
  //   console.log(account);
};

//addIncome => which account are you trying to add
//              and amount of income adding

let addIncome = function (account, income) {
  account.income = account.income + income;
};
//resetAccount => reset the expenses and income for account to 0
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

//getAccountSummary => current account balance and total expenses and income
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has balance of $${balance}. \n$${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
