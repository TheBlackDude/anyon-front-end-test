import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import App from './home/App';
import registerServiceWorker from './registerServiceWorker';

/*
 * the hashHistory
 */
const history = createHashHistory()

/*
 * the main store
 */
const createStoreWithState = (initialState = {}) => createStore(
  connectRouter(history)(
    combineReducers({
      // TODO reducers
    })
  ),
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history)
      // add other middlewares here
    )
    // add other enhancers here
  )
)

/*
 * connect the app with the store
 */
const store = createStoreWithState()
ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
registerServiceWorker();
