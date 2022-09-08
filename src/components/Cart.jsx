import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'
import './Styles/cart.css'

export default function Cart({product}) {
  const {cart, totalPrice} = useCartContext()

  if (cart.length === 0) {
    return (
      <>
        <p className='cart__empty'>❗--- The cart is empty 😢🥀 ---❗</p>
        <Link to='/'><div className='keep'>GO SHOPPING!🛒</div></Link>
      </>
    )
  }
  
  return ( 
  <>  
      <div className='cart'>
              {
              cart.map(product => <ItemCart key={product.id} product={product}/> )
              }
              <div className='cart__total'>Cart Total: 💲 {totalPrice()}</div>
              <Link to='/checkout'><div className='cart__end'>End Purchase 💸</div></Link>
              <Link to='/'><div className='keep'>Keep shopping!🛒</div></Link>
      </div>

  </>
  )
}
