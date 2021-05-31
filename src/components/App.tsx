import React from 'react';
import { connect } from 'react-redux';
import Header from './shared/Header'
import {
  Switch,
  Route,
} from 'react-router-dom'
import './styles.css'
import MainContainer from './shared/MainContainer';
import HomePage from './main/HomePage';

const App = (props: any) => {

  return (
    <div className="App">
      <Header />
      <MainContainer>
        <Switch>
          {/* Next two routes lead to the same component HomePage, as there's a need for a
          common and static logic (SearchBar) to be shared accross both cases of Viewing all 
          jobs and Searching for jobs, a smaller lower section will be conditionally 
          rendered for both cases based on the route, '/' or /search' */}
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/search">
            <HomePage/>
          </Route>

          <Route exact path="/job/:uuid">
            {/* <JobView /> */}
          </Route>
          <Route exact path="/skill/:uuid">
            {/* <SkillView /> */}
          </Route>
        </Switch>
      </MainContainer>

    </div>
  );
}

const mapStateToProps = (state: any) => {
  return state;
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
