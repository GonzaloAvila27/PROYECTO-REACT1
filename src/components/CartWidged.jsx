import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

 

const CartWidged = () => {
  const {totalProducts} = useCartContext()
  return (
    <div className = 'cart'>
       <Link to='/cart'>
          <button type = "button" id = "cart-btn">
             <i className = "bi bi-cart"></i>
             <span>{totalProducts() || 0}</span>
          </button>  
      </Link>
    </div>
  )
}

export default CartWidged