import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
// import SearchPage from '../SearchPage';
import AllJobsView from './AllJobsView';
import './styles.css'

const HomePage = (props: any) => {

    return (
        <>
          <p>SEARCH BARRRRRRRRRR</p>
          
          <Switch>
            <Route exact path="/">
              <AllJobsView/>
            </Route>
            <Route exact path="/search">
              {/* <SearchJobsView/> */}
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