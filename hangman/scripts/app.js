const puzzleEl=document.querySelector('#puzzle')
const guessesEl=document.querySelector('#guesses')
// const game1=new HangMan('car parts',10)
let game1

window.addEventListener('keypress',(e)=>{
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
    console.log(game1.status)
})

const render=()=>{
    puzzleEl.innerHTML=''
    guessesEl.textContent=game1.statusMessage

    game1.puzzle.split('').forEach((element)=>{
        const lettleEl=document.createElement('span')
        lettleEl.textContent=element
        puzzleEl.appendChild(lettleEl)
    })
}

const startGame=async()=>{
    const puzzle=await getPuzzle(2)
    game1=new HangMan(puzzle,8)
    render()
}

document.querySelector('#reset').addEventListener('click',startGame)

startGame()

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

/*getPuzzle('2').then((data)=>{
    console.log(data.puzzle)
}).catch((err)=>{
    console.log(`Error: ${err}`)
})*/

/*getCountry('CN').then((country)=>{
    console.log(country.name)
}).catch((error)=> {
    console.log(`Error: ${error}`)
})



getCurrentCountry().then((country)=>{
    console.log(country.name)
}).catch((error)=>{
    console.log(`Error: ${error}`)
})*/

/*getLocation().then((data)=>{
    return getCountry(data.country)
}).then((country)=>{
    console.log(country.name)
}).catch((error)=>{
    console.log(`Error: ${error}`)
})*/


/*getLocation().then((data)=>{
    console.log(`City: ${data.city}`)
    console.log(`Region: ${data.region}`)
    console.log(`Country: ${data.country}`)
},(err)=>{
    console.log(err)
})*/




// getCountry('US').then((country)=>{
//     console.log(country.name)
// },(error)=>{
//     console.log(`Error: ${error}`)
// })


