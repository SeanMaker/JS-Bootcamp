// Set up filters default object
let filterText={
    searchText:'',
    hideCompleted:false
}

// getFilters
// Arguments: none
// Return value: filters object
const getFilters=()=> filterText

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters=({searchText,hideCompleted})=>{
    if(typeof searchText==='string'){
        filterText.searchText=searchText
    }
    if(typeof hideCompleted==='boolean'){
        filterText.hideCompleted=hideCompleted
    }

}

// set up the exports
export {getFilters,setFilters}

