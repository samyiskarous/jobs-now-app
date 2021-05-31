import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import { SearchQueryInterface } from '../../../helper-functions.tsx/updatePersistedSearchQueries';
// import SearchPage from '../SearchPage';
import AllJobsView from './AllJobsView';
import ConnectedSearchInput from './SearchBar';
import SearchJobsView from './SearchJobsView';
import './styles.css'

const HomePage = (props: any) => {

    const [searchText, setSearchText] = useState<string>("");
    const [persistedSearchQueriesState, setPersistedSearchQuerieState] = useState<SearchQueryInterface[]>(JSON.parse(localStorage.getItem('searchQueries') || '[]'))

    const updateSearchTextHandler = (newSearchText: string) => {
      setSearchText(newSearchText);
    }

    const updatePersistedSearchQueriesStateHandler = (newPersistedSearchQueries: SearchQueryInterface[]) => {
      setPersistedSearchQuerieState(oldState => newPersistedSearchQueries);
    }

    return (
        <>
          <ConnectedSearchInput 
            updateSearchTextHandlerCallback={updateSearchTextHandler}
            updatePersistedSearchQueriesStateCallback={updatePersistedSearchQueriesStateHandler}

          />
          
          <Switch>
            <Route exact path="/">
              <AllJobsView/>
            </Route>
            <Route exact path="/search">
              <SearchJobsView 
                searchText={searchText}
                persistedSearchQueries={persistedSearchQueriesState}
              />
            </Route>
          </Switch>
        </>
    );
}


const mapStateToProps = (state: any) => {
    return state;
  }
  
const ConnectedHomePage = connect(mapStateToProps)(HomePage);
  

export default ConnectedHomePage;