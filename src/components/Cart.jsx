import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const {cart, totalPrice } = useCartContext()

  if (cart.length === 0) {
    return (
      <>
        <p> No hay elementos</p>
        <Link to='/'>GO SHOPPING!</Link>
      </>
    )
  }
  
  return ( 
  <div><h1>This is THY CART!!</h1></div>
  )
}
