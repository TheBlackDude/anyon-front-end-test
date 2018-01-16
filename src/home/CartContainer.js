import React, { Component } from 'react';
import { connect } from 'react-redux'

import CartList from './CartList'
import '../styles/App.css';

class CartContainer extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to ShoppY</h1>
        <CartList cartList={this.props.cart}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    cart: this.state.cart.cart
  }
}

export default connect(mapStateToProps)(CartContainer)
