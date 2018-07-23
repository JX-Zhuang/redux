import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import App from './components/App';
import reducers from './reducers';
import {logger,thunk} from './middlewares';
const store = createStore(reducers,applyMiddleware(logger,thunk));
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
