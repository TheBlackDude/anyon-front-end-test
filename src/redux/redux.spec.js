import React from 'react'
import configureStore from 'redux-mock-store'

import {
  defaultState,
  resetCart,
  addItem,
  updateItem,
  removeItem,
  reducer
} from './redux'

describe('Redux', () => {
  // Setup the mock store
  const middlewares = []
  const mockStore = configureStore(middlewares)
  // initialize mockStore
  const store = mockStore({})

  it('should dispatch RESET_CART', () => {
    store.dispatch(resetCart())
    // get the actions
    const actions = store.getActions()
    expect(actions[0].type).toEqual('shoppy/redux/RESET_CART')
    const newState = actions.reduce(reducer, actions)
    expect(newState).not.toEqual(defaultState)
  })

  it('should dispatch ADD_ITEM', () => {
    const newItem = {id: 3, name: 'test', price: 222}
    store.dispatch(addItem(newItem))
    // get the actions
    const actions = store.getActions()
    expect(actions[1].type).toEqual('shoppy/redux/ADD_ITEM')
    const newState = actions.reduce(reducer, actions)
    expect(newState).not.toEqual(defaultState)
  })

  it('should dispatch UPDATE_ITEM', () => {
    const itemToUpdate = {name: 'test1', price: 333}
    store.dispatch(updateItem(3, itemToUpdate))
    // get the actions
    const actions = store.getActions()
    expect(actions[2].type).toEqual('shoppy/redux/UPDATE_ITEM')
    const newState = actions.reduce(reducer, actions)
    expect(newState).not.toEqual(itemToUpdate)
  })

  it('should dispatch REMOVE_ITEM', () => {
    store.dispatch(removeItem(2))
    // get the actions
    const actions = store.getActions()
    expect(actions[3].type).toEqual('shoppy/redux/REMOVE_ITEM')
    const newState = actions.reduce(reducer, actions)
    expect(newState).not.toEqual(defaultState)
  })
})
