import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'

export default function Cart({product}) {
  const {cart, totalPrice} = useCartContext()

  if (cart.length === 0) {
    return (
      <>
        <p> No elements</p>
        <Link to='/'>GO SHOPPING!</Link>
      </>
    )
  }
  
  return ( 
  <>
      {
      cart.map(product => <ItemCart key={product.id} product={product}/> )
      }
      <h1>
        Cart Total: $ {totalPrice()} 
      </h1>
      <Link to='/checkout'><h1>End Purchase 💸</h1></Link>
  </>
  )
}
