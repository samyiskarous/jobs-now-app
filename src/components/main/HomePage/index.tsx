import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
// import SearchPage from '../SearchPage';
import AllJobsView from './AllJobsView';
import ConnectedSearchInput from './SearchBar';
import SearchJobsView from './SearchJobsView';
import './styles.css'

const HomePage = (props: any) => {

    return (
        <>
          <ConnectedSearchInput/>
          
          <Switch>
            <Route exact path="/">
              <AllJobsView/>
            </Route>
            <Route exact path="/search">
              <SearchJobsView/>
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