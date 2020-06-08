const lists=[
    {text:'apple', type:'fruit'},
    {text:'orange', type:'fruit'},
    {text:'mobile phone', type:'device'},
    {text:'laptop', type:'device'}
]

// console.log(lists)
const filterText={
    searchText:''
}

const filter=function(lists,filterText){

    const filteredContent=lists.filter(function(list){
        return list.text.toLowerCase().includes(filterText.searchText.toLowerCase())
    })

    document.querySelector('#div-filter').innerHTML=''

    filteredContent.forEach(function(element){
        const p=document.createElement('p')
              p.textContent=element.text
        document.querySelector('#div-filter').appendChild(p)
    })

}

filter(lists,filterText)

document.querySelector('#input-list-filter').addEventListener('input',function(e){
    filterText.searchText=e.target.value
    filter(lists,filterText)
})

document.querySelector('#name-form').addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target.elements.firstname.value)
})

const body_p=document.createElement('p')
document.querySelector('body').appendChild(body_p)
