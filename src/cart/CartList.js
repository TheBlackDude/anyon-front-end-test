import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

const CartList = ({cartList}) => {
  return (
    <Table responsive>
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
              <td key={`${index + 1}`}>{`${index + 1}`}</td>
              <td key={cart.name}>{cart.name}</td>
              <td key={cart.price}>{cart.price}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

CartList.propTypes = {
  cartList: PropTypes.array.isRequired
}
