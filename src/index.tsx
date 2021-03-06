import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';
import middlewares from './redux/middlewares'
import App from './components/App';

const store = createStore(rootReducer, middlewares);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

