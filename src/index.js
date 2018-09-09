import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

// Added this to enable REDUX_DEVTOOLS to disable comment lined below 
// and uncomment old line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware());
//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  //<Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={createStore(reducers, enhancer)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
