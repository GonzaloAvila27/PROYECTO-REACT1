import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import {  useCartContext } from "../../context/CartContext";


export default function ItemDetail({prod}) {
  const [goCart, setGoCart] = useState(false)
  const {addTCart} = useCartContext();
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity}`);
    setGoCart(true)
    addTCart(prod, quantity)
  }

  return (
    <>
      <div className="card col" style={{width: "50rem"}}>
        <img src={prod.image} className="card-img-top" alt={prod.name}/>
      <div className="card-body">
            <h5 className="card-title">{prod.name}</h5>
            <p className="card-text">product description, dos elefantes se..</p>
            <span>STOCK: {prod.stock}</span> // <span>${prod.price}</span> <br />
                {
                  goCart ? <Link to='/cart'><button>Go to Cart</button></Link>
                  : <ItemCount initial={1} stock={prod.stock} onAdd={onAdd}/>
                }
      </div>
    </div>
   </>
    )
  }
