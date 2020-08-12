const puzzleEl=document.querySelector('#puzzle')
const guessesEl=document.querySelector('#guesses')
const game1=new HangMan('car parts',10)
puzzleEl.textContent=game1.puzzle
guessesEl.textContent=game1.statusMessage
// console.log(game1.status)

window.addEventListener('keypress',(e)=>{
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent=game1.puzzle
    guessesEl.textContent=game1.statusMessage
    console.log(game1.status)
})

/*fetch('http://puzzle.mead.io/puzzle',{}).then((response)=>{
    if(response.status===200){
        return response.json()
    }else{
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data)=>{
    console.log(data.puzzle)
}).catch((error)=>{
    console.log(error)
})*/

getPuzzle('2').then((data)=>{
    console.log(data.puzzle)
}).catch((err)=>{
    console.log(`Error: ${err}`)
})

// getCountry('US').then((country)=>{
//     console.log(country.name)
// },(error)=>{
//     console.log(`Error: ${error}`)
// })


