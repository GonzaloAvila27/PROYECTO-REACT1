import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import './Styles/cart.css'

 

const CartWidged = () => {
  const {totalProducts} = useCartContext()
  return (
    <div className = 'cartWit'>
       <Link to='/cart'>
          <div className='cartWit__button'>
            <span className='cartWit__img'></span>  
            <span className='cartWit__total'>{totalProducts() || 0}</span>
          </div>
      </Link>
    </div>
  )
}

export default CartWidged