const HangMan=function (word,num) {

    // this.word=word.toLowerCase().replace(/\s*/g,'').split('')
    this.word=word.toLowerCase().split('')
    // console.log(this.word)
    this.remainingGuesses=num
    this.guessedLetter=[]
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

HangMan.prototype.makeGuess=function(guess){
    guess=guess.toLowerCase()

    if(!this.guessedLetter.includes(guess)){
        this.guessedLetter.push(guess)
    }
    if(!this.guessedLetter.includes(guess)||!this.word.includes(guess)){
        this.remainingGuesses--
    }

}


const game1=new HangMan('cat',5)
// game1.makeGuess('c')
// game1.makeGuess('t')
// game1.makeGuess('z')
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress',function(e){
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})


HangMan.prototype.createWord=function(word){
    this.word=word.toLowerCase().split('')
}

