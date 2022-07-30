import React, { useState } from 'react'
import ItemCount from './ItemCount'
 

const CartWidged = () => {
  return (
    <div className = 'cart'>
          <button type = "button" id = "cart-btn">
             <i className = "bi bi-cart"></i>
             <p id = "cart-count-info">CART</p>
          </button>  
          </div>
  )
}

export default CartWidged