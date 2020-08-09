let payTip=function (total,percentage=.2) {
    let percent=percentage*100
    let payment=total*percentage
    console.log(`A ${percent}% tip on $${total} would be $${payment}`)
}

payTip(100,.50)
