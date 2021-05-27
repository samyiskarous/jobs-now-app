import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/search">
          {/* <Search /> */}
        </Route>
        <Route exact path="/job/:uuid">
          {/* <JobView /> */}
        </Route>
        <Route exact path="/skill/:uuid">
          {/* <SkillView /> */}
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

