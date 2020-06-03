let myAccount={
    name:'Andrew Mead',
    expense:0,
    income:0
}

let addExpense=function (account,amount) {
    account.expense=account.expense+amount
    console.log(`Add $${amount} in Expense, the total expense is $${account.expense}`)
}

let addIncome=function (account,money) {
    account.income=account.income+money
    console.log(`Add $${money} in Income,the total income is $${account.income}`)
}

let resetAccount=function (account) {
        account.name='Sean';
        account.expense=0;
        account.income=0
}

let getAccountSummary=function (account) {
    return console.log(`Account for ${account.name} has $${account.income-account.expense}, $${account.income} in income, $${account.expense} in expenses. `)
}



getAccountSummary(myAccount)
addIncome(myAccount,1000)
getAccountSummary(myAccount)
addExpense(myAccount,100)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)


