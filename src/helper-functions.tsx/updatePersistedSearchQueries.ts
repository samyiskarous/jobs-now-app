const updatePersistedSearchQueries = (newSearchQuery: string) => {
    let searchQueriesToPersistArray: string[] = [];

    // Get the Local Storage's persisted search queries
    searchQueriesToPersistArray = JSON.parse(localStorage.getItem('searchQueries') || '[]')

    // Make sure it's unique
    let searchQueriesToPersistSet = new Set(searchQueriesToPersistArray);
    searchQueriesToPersistSet.add(newSearchQuery);  
    
    // In reverse to show the last query at first
    searchQueriesToPersistArray = Array.from(searchQueriesToPersistSet).reverse();
 
    // Save to the local storage after being updated, 
    localStorage.setItem('searchQueries', JSON.stringify(searchQueriesToPersistArray));

    return searchQueriesToPersistArray;
}

export default updatePersistedSearchQueries