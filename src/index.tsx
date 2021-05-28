import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ConnectedApp from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));

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

