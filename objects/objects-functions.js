/*let myBook={
    title:'1984',
    author:'George Orwell',
    pageCount:326
}

let otherBook={
    title:'A People History',
    author:'Haward zinn',
    pageCount:723
}

let introduce_book=function (book) {
    console.log(`${book.title} by ${book.author}, page is ${book.pageCount}`)
}
introduce_book(otherBook)*/

let temp_conversion=function (f) {
    let content=
    {
        fahrenheit:`fahrenheit is ${f}`,
        cersies:`cersies is ${(f-32)/1.8}`,
        kelvin:`kelvin is ${(f-32)/1.8+273.15}`
    }
    return content
}

let all_temp=temp_conversion(100)
console.log(all_temp)
