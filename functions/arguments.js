let payTip=function (total,percentage=.2) {
    let payment=total*percentage
    return payment
}

let money=payTip(100,.1)
console.log(money)
