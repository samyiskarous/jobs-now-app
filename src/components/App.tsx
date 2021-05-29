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
