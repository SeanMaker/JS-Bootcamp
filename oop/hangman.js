const HangMan=function (word,num) {
    this.word=word
    this.numberOfGuess=num
}

const manone=new HangMan('OK',5)
const mantwo=new HangMan('Fine','6')

console.log(manone)
console.log(mantwo)
