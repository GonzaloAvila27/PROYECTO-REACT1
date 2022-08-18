import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function ItemCart({product}) {
   const{ removeFCart} = useCartContext()
  return (
    <div>
        <img src={product.img} alt={product.name} />
    <div>
        <p>Product:{product.name}</p>
        <p>Quantity:{product.Q}</p>
        <p>Price:{product.price}</p>
        <p>SubTotal:{product.Q * product.price}</p>
        <button onClick={() => removeFCart(product.id)}>Delete</button>
    </div>


    </div>
  )
}
