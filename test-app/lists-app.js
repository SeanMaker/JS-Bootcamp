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
    lists.filter(function(list,filterText){
        return list.text.toLowerCase().includes(filterText.searchText.toLowerCase())
    })


}
