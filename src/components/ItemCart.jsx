import React from 'react'
import { useCartContext } from '../context/CartContext'
import './Styles/cart.css'

export default function ItemCart({product}) {
   const{ removeFCart} = useCartContext()
  return (
    <>
    <div className='itemcart'>
        <img className='itemcart__image' src={product.image} alt={product.name} />
    <div>
        <h2 className='itemcart__title'>{product.name}</h2>
        <span className='itemcart__Q'>Quantity: {product.quantity}</span>
        <span className='itemcart__price'>Unit price: ${product.price}</span>
        <span className='itemcart__sub'>SubTotal: ${product.quantity * product.price}</span>
        <i className='itemcart__remove bi bi-x-square' onClick={() => removeFCart(product.id)}></i>
    </div>
    
    </div>
    </>
  )
}
