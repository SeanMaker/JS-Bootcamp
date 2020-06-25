const HangMan=function (word,num) {

    // this.word=word.toLowerCase().replace(/\s*/g,'').split('')
    this.word=word.toLowerCase().split('')
    console.log(this.word)
    this.remainingGuesses=num
    this.guessedLetter=['c','a','t']
}

HangMan.prototype.getPuzzle=function(){
    let puzzle=''
    this.word.forEach((letter)=>{
        if(this.guessedLetter.includes(letter)||this.guessedLetter.includes(' ')){
            puzzle+=letter
        }else{
            puzzle+='*'
        }
    })
    return puzzle
}

const game1=new HangMan('cbt',5)
console.log(game1.getPuzzle())

const game2=new HangMan('qryasdxazc ','6')
console.log(game2.getPuzzle())


