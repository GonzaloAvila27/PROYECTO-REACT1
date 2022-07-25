import React from 'react'
import './CSS/Navbar.css'

const CartWidged = () => {
  return (
    <div className = 'cart'>
          <button type = "button" id = "cart-btn">
             <i className = "bi bi-cart"></i>
             <span id = "cart-count-info">17</span>
          </button>  
          </div>
  )
}

export default CartWidged