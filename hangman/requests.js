//use XMLHttpRequest to get puzzle
/*const getPuzzle=(wordCount)=> new Promise((resolve,reject)=>{
    const request= new XMLHttpRequest()

    request.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState===4 && e.target.status===200){
            const data=JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        }else if(e.target.readyState===4){
            reject('An error has taken place')
        }
    })

    request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})*/

//use XMLHttpRequest to get country
/*const getCountry=(countryCode)=> new Promise((resolve,reject)=>{
    const requestCountry=new XMLHttpRequest()

    requestCountry.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState===4 && e.target.status===200){
            const data=JSON.parse(e.target.responseText)
            const countryDetail=data.find((element) => element.alpha2Code===countryCode)
            resolve(countryDetail)

        }else if(e.target.readyState===4){
            reject('unable to fetch data')
        }
    })

    requestCountry.open('GET','http://restcountries.eu/rest/v2/all')
    requestCountry.send()
})*/



//use fetch API to get puzzle
const getPuzzle=(wordCount)=>{
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((response)=>{
        if(response.status===200){
            return response.json()
        }else{
            throw new Error('Unable to fetch the puzzle')
        }
    })
}

const getCountry=(countryCode)=>{
    return fetch('http://restcountries.eu/rest/v2/all',{}).then((response)=>{
        if(response.status===200){
            return response.json()
        }else{
            throw new Error('Unable to fetch data')
        }
    }).then((data)=>{
        return country=data.find((element) => element.alpha2Code===countryCode)
    })
}
