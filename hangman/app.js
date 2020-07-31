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

/*const request= new XMLHttpRequest()

request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState===4 && e.target.status===200){
        const data=JSON.parse(e.target.responseText)
        console.log(data)
    }else if(e.target.readyState===4){
        console.log('And  error has taken place')
    }
})

request.open('Get','http://puzzle.mead.io/puzzle')
request.send()*/

const requestCountry=new XMLHttpRequest()
const countryCode='US'
requestCountry.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState===4 && e.target.status===200){
        const data=JSON.parse(e.target.responseText)
        const country=data.find(element => element.alpha2Code===countryCode)
        console.log(country.name)

    }else if(e.target.readyState===4){
        console.log('unable to fetch data')
    }
})

requestCountry.open('GET','http://restcountries.eu/rest/v2/all')
requestCountry.send()



