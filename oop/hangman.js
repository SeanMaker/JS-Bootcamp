const HangMan=function (word,num) {
    this.word=word
    this.remainingGuesses=num
}

const game1=new HangMan('OK',5)
const game2=new HangMan('Fine','6')

console.log(game1)
console.log(game2)
