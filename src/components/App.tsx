import React from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header'
import ConnectedHomePage from './pages/HomePage/HomePage';
import './styles.css'

const App = (props: any) => {

  return (
    <div className="App">
      <Header />

      <ConnectedHomePage />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return state;
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
