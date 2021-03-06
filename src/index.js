import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import { mainReducer } from './redux'

import CartContainer from './cart/CartContainer';
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
      cart: mainReducer,
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
      <CartContainer />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
registerServiceWorker();
