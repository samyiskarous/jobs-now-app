import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import ConnectedApp from './components/App';
import middlewares from './middlewares'

const store = createStore(rootReducer, middlewares);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <ConnectedApp />
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
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

