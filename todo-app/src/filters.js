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
const setFilters=(updates)=>{
    if(typeof updates.searchText==='string'){
        filterText.searchText=updates.searchText
    }
    if(typeof updates.hideCompleted==='boolean'){
        filterText.hideCompleted=updates.hideCompleted
    }

}

// set up the exports
export {getFilters,setFilters}

