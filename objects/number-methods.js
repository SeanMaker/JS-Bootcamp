// let num=11.7463
//
// console.log(num.toFixed(2))
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
//range formulation

/*
min=10
max=20
range=Math.floor(Math.random()*(max-min+1))+min
*/


let makeGuess=function (guess) {
    let num=Math.floor(Math.random()*(5-1+1))+1
    console.log(`the number is ${num}`)
    return guess===num
}

console.log(makeGuess(1))
