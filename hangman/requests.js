const getPuzzle=(wordCount,callback)=>{
    // callback('Some fake puzzle')
    const request= new XMLHttpRequest()

    request.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState===4 && e.target.status===200){
            const data=JSON.parse(e.target.responseText)
            callback(undefined,data.puzzle)
        }else if(e.target.readyState===4){
            callback('An error has taken place',undefined)
        }
    })

    request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getCountry=(countryCode,callback)=>{
    const requestCountry=new XMLHttpRequest()

    requestCountry.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState===4 && e.target.status===200){
            const data=JSON.parse(e.target.responseText)
            const countryDetail=data.find((element) => element.alpha2Code===countryCode)
            callback(undefined,countryDetail)

        }else if(e.target.readyState===4){
            console.log('unable to fetch data')
        }
    })

    requestCountry.open('GET','http://restcountries.eu/rest/v2/all')
    requestCountry.send()
}
