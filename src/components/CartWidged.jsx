import React, { useState } from 'react'
import { Link } from 'react-router-dom'

 

const CartWidged = () => {
  return (
    <div className = 'cart'>
       <Link to='/cart'>
          <button type = "button" id = "cart-btn">
             <i className = "bi bi-cart"></i>
             <p id = "cart-count-info ">CART</p>
          </button>  
      </Link>
    </div>
  )
}

export default CartWidged