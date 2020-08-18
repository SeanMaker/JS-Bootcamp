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

/*const getLocation=()=>{
    return new Promise((resolve, reject) => {
        const request=new XMLHttpRequest()

        request.addEventListener('readystatechange',(e)=>{
            if(e.target.readyState===4 && e.target.status===200){
                const data=JSON.parse(e.target.responseText)
                resolve(data)
            }else if(e.target.readyState===4){
                reject('Unable to fetch data')
            }
        })

        request.open('GET','http://ipinfo.io/json?token=a4bdde81886d0c')
        request.send()
    })
}*/


//use fetch API to get puzzle
/*const getPuzzleOld=(wordCount)=>{
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((response)=>{
        if(response.status===200){
            return response.json()
        }else{
            throw new Error('Unable to fetch data')
        }
    })
}*/


//async-await function to fetch data
const getPuzzle=async (wordCount)=>{
    const response=await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status===200){
        const data=await response.json()
        return data
    }else{
        throw new Error('Unable to fetch data')
    }
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

const getLocation=()=>{
    return fetch('http://ipinfo.io/json?token=a4bdde81886d0c',{}).then((response)=>{
        if(response.status===200){
            return response.json()
        }else{
            throw new Error('Unable to fetch data')
        }
    })
}

