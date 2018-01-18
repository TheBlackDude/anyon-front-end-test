import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import sinon from 'sinon'
import ReactTestUtils from 'react-dom/test-utils'
import { renderWithStore } from '../utils/test-helpers'
import CartContainer from './CartContainer';

describe('CartContainer', () => {
  // when using a fake store, you can use an identity function as a reducer
  const store = {
    dispatch: sinon.spy(),
    cart: {cart: [{id: 0, name: 'test1'}, {id: 1, name: 'test2'}]}
  }
  const reduxStore = createStore((e) => e, store)
  // wrappe the component with a store
  const componentWithStore = renderWithStore(reduxStore, <CartContainer />)

  it('should render cartList with Table', () => {
    const table = ReactTestUtils.scryRenderedDOMComponentsWithTag(
      componentWithStore, 'Table'
    )
    expect(table.length).toEqual(1)
  })

  it('should containe items inside the state', () => {
    const state = componentWithStore.store.getState()
    expect(state.cart).toEqual(store.cart)
  })
})
