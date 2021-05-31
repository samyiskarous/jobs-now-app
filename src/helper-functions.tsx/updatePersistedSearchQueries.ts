export interface SearchQueryInterface{ 
    searchText: string; 
    searchQuery: string; 
}

const updatePersistedSearchQueries = (newSearchQuery: SearchQueryInterface) => {
    let oldSearchQueriesToPersistArray: SearchQueryInterface[] = [];
    let updatedSearchQueriesToPersistArray: SearchQueryInterface[] = [];

    // Get the Local Storage's persisted search queries
    oldSearchQueriesToPersistArray = JSON.parse(localStorage.getItem('searchQueries') || '[]');

    // Make sure it's unique
    if(oldSearchQueriesToPersistArray.length !== 0){
        let newSearchQueryExists: boolean = false;
        
        for(let index = 0; index < oldSearchQueriesToPersistArray.length; index ++){
            if(oldSearchQueriesToPersistArray[index].searchText.toLowerCase() === newSearchQuery.searchText.toLowerCase()){
                newSearchQueryExists = true;
            }
            updatedSearchQueriesToPersistArray.push(oldSearchQueriesToPersistArray[index]);
        }
        if(!newSearchQueryExists)
        updatedSearchQueriesToPersistArray.push(newSearchQuery);
    }else{
        updatedSearchQueriesToPersistArray.push(newSearchQuery);
    }
    
    // Save to the local storage after being updated, in reverse to show the last query at first
    localStorage.setItem('searchQueries', JSON.stringify(updatedSearchQueriesToPersistArray.reverse()));

    return updatedSearchQueriesToPersistArray;
}

export default updatePersistedSearchQueries