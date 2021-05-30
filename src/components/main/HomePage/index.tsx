import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
// import SearchPage from '../SearchPage';
import AllJobsView from './AllJobsView';
import ConnectedSearchInput from './SearchBar';
import SearchJobsView from './SearchJobsView';
import './styles.css'

const HomePage = (props: any) => {

    const [searchText, setSearchText] = useState<string>("");

    const updateSearchTextHandler = (newSearchText: string) => {
      setSearchText(newSearchText);
    }

    return (
        <>
          <ConnectedSearchInput updateSearchTextHandlerCallback={updateSearchTextHandler}/>
          
          <Switch>
            <Route exact path="/">
              <AllJobsView/>
            </Route>
            <Route exact path="/search">
              <SearchJobsView searchText={searchText}/>
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