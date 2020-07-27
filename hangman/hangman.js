const HangMan=function (word,num) {
    // this.word=word.toLowerCase().replace(/\s*/g,'').split('')
    this.word=word.toLowerCase().split('')
    // console.log(this.word)
    this.remainingGuesses=num
    this.guessedLetter=[]
    this.status='playing'
}

HangMan.prototype.calculateStatus=function(){
    //method 1
/*    if(game1.getPuzzle().toString()!==this.word.toString().replace(/\,*!/g,'') && this.remainingGuesses>=0){
        this.status='playing'
    }
    if(game1.getPuzzle().toString()===this.word.toString().replace(/\,*!/g,'') && this.remainingGuesses>=0){
        this.status='finished'
    }
    if(this.remainingGuesses<=0){
        this.status='failed'
    }*/

    //method 2
    /*let finished=true
    this.word.forEach((letter)=>{
        if(this.guessedLetter.includes(letter)){

        }
        else{
            finished=false
        }
    })*/

    //method 3
    const finished=this.word.every((letter)=>{
        return this.guessedLetter.includes(letter)
    })

    if(this.remainingGuesses<=0){
        this.status='failed'
    }else if(finished){
        this.status='finished'
    }else{
        this.status='playing'
    }
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

    if(this.status!=='playing'){
        return
    }

    if(!this.guessedLetter.includes(guess)){
        this.guessedLetter.push(guess)
    }
    if(!this.guessedLetter.includes(guess)||!this.word.includes(guess)){
        this.remainingGuesses--
    }
    this.calculateStatus()
}

HangMan.prototype.getStatus=function(){
    if (this.status==='playing'){
        return `Guesses left: ${this.remainingGuesses}`
    }
    else if(this.status==='finished'){
        return 'Great Work! You guessed the word.'
    }
    else if (this.status==='failed'){
        return `Nice try! The word was "${this.word.join('')}"`
    }
}

HangMan.prototype.changeStatus=function(){
    const span=''
    const text=''


}



