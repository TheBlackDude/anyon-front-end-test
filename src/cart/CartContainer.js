import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
  resetCart,
  addItem,
  updateItem,
  removeItem
} from '../redux/redux'

import CartList from './CartList'
import CartForm from './CartForm'
import '../styles/App.css';

/*
 * The Main Component
 */
class CartContainer extends Component {
  constructor (props) {
    super(props)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleResetCart = this.handleResetCart.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
    this.handleUpdateItem = this.handleUpdateItem.bind(this)
  }

  /*
   * dispatch the addItem action creator
   */
  handleAddItem (item) {
    this.props.dispatch(addItem({id: 3, name: 'MamBook', price: 1500}))
  }

  /*
   * dispatch the resetCart action creator
   */
  handleResetCart () {
    this.props.dispatch(resetCart())
  }

  /*
   * dispatch the removeItem action creator
   */
  handleRemoveItem (id) {
    this.props.dispatch(removeItem(id))
  }

  /*
   * dispatch the updateItem action creator
   */
  handleUpdateItem (id, newItem) {
    this.props.dispatch(updateItem(id, newItem))
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to ShoppY</h1>
        <CartForm
          handleAddItem={this.handleAddItem}
          handleResetCart={this.handleResetCart}/>
        <CartList
          cartList={this.props.cart}
          handleRemoveItem={this.handleRemoveItem}
          handleUpdateItem={this.handleUpdateItem}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps)(CartContainer)
