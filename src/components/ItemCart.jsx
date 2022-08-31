import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function ItemCart({product}) {
   const{ removeFCart} = useCartContext()
  return (
    <div>
        <img src={product.image} alt={product.name} />
    <div>
        <h2>{product.name}</h2>
        <p>Quantity:{product.quantity}</p>
        <span>Unit price:{product.price}</span> //  
        <span>SubTotal:{product.quantity * product.price}</span>
        <button onClick={() => removeFCart(product.id)}>Delete</button>
    </div>


    </div>
  )
}
