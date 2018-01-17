/* Action Types */
export const RESET_CART = 'shoppy/redux/RESET_CART'
export const ADD_ITEM = 'shoppy/redux/ADD_ITEM'
export const UPDATE_ITEM = 'shoppy/redux/UPDATE_ITEM'
export const REMOVE_ITEM = 'shoppy/redux/REMOVE_ITEM'

/* defaultState */
export const defaultState = {
  cart: [
    {id: 0, name: 'iPhone', price: 500},
    {id: 1, name: 'Samsung', price: 400},
    {id: 2, name: 'BlackBerry', price: 800}
  ],
}

/*
 * Action Creators
*/
export const resetCart = () => {
  return {
    type: RESET_CART
  }
}

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export const updateItem = (id, newItem) => {
  return {
    type: UPDATE_ITEM,
    itemId: id,
    payload: newItem
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    itemId: id
  }
}

/*
 * Main Reducer
 */
export const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case RESET_CART:
      return {
        cart: [],
      }
    case ADD_ITEM:
      return {
        cart: [...state.cart, action.payload],
      }
    case UPDATE_ITEM:
      return {
        cart: [
          ...state.cart.filter(item => {
            if (item.id === action.itemId) {
              const value = action.payload.name ? action.payload.name : action.payload.price
              if (typeof value === 'string' && value === item.name) { return null }
              else if (typeof value === 'string' && value !== item.name) {
                item.name = value
              }
              else {
                item.price = value
              }
            }
            return null
          }),
          ...state.cart
        ]
      }
    case REMOVE_ITEM:
      return {
        cart: [
          state.cart.splice(action.itemId, 1),
          ...state.cart
        ]
      }
    default:
      return state
  }
}

export default reducer
