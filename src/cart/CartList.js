import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'reactstrap'

/*
 * Component responsible for displaying cart items
 */
const CartList = ({
  cartList,
  handleRemoveItem,
  handleUpdateItem
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          cartList.map((cart, index) => (
            <tr key={index}>
              <th key={`${index + 1}`} scope="row">{`${index + 1}`}</th>
              <td key={cart.name}>{cart.name}</td>
              <td key={cart.price}>{cart.price}</td>
              <td key={`${index + 2}`}>
                <Button color="danger" onClick={() => handleRemoveItem(index)}>Remove Item</Button>
                <Button color="danger" onClick={() => handleUpdateItem(index, {name: 'Nokia', price: 300})}>Update</Button>
                </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

CartList.propTypes = {
  cartList: PropTypes.array.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleUpdateItem: PropTypes.func.isRequired
}

export default CartList
