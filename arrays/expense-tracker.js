const account={
    name:'Sean Dong',
    expenses:[],
    incomes:[],
    addExpense: function(item,amount){
    this.expenses.push({description:item,amount:amount})
},
    addIncome: function(item,amount){
        this.incomes.push({description:item,amount:amount})
    },
    getAccountSummary: function(){
        let total_expenses=0
        /*for(let i=0;i<account.expenses.length;i++){
            total=total+account.expenses[i].amount
        }*/
        this.expenses.forEach(function(element){
            total_expenses= total_expenses+element.amount
        })

        let total_incomes=0
        this.incomes.forEach(function(element){
            total_incomes= total_incomes+element.amount
        })

        const balance=total_incomes-total_expenses

        return `${this.name} has a balance of $${balance}, $${total_incomes} in income, $${total_expenses}in expense.`
    }
}

/*const addExpense=function(item,amount){
    account.expenses.push({description:item,amount:amount})

}

const getAccountSummary=function(){
    let total=0
    for(let i=0;i<account.expenses.length;i++){
        total=total+account.expenses[i].amount
    }

    return `${account.name} has $${total} in expense.`
}*/
account.addIncome('Job',1000)
account.addExpense('Rent',950)
account.addExpense('Coffee',2)
// console.log(account)
console.log(account.getAccountSummary())
