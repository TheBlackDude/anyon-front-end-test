import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

/*
 * Component for adding items into the cart
 */
const CartForm = ({handleAddItem, handleResetCart}) => {
  return (
    <div>
      <Button color="danger" onClick={() => handleResetCart()}>Clear Cart</Button>{' '}
      <Button color="primary" onClick={() => handleAddItem('works')}>Add Item</Button>{' '}
    </div>
  )
}

CartForm.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  handleResetCart: PropTypes.func.isRequired
}

export default CartForm
