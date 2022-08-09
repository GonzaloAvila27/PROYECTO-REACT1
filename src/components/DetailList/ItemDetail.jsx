import React, { useState } from 'react'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'

export default function ItemDetail({prod}) {
  const [goCart, setGoCart] = useState(false)

  const onAdd = (Q) => {
    setGoCart(true)
  }

  return (
    <>
      <div className="card col" style={{width: "50rem"}}>
        <img src="{prod.image}" className="card-img-top" alt="Product Image"/>
      <div className="card-body">
            <h5 className="card-title">{prod.name}</h5>
            <p className="card-text">product description, dos elefantes se..</p>
            <span>STOCK: {prod.stock}</span> // <span>${prod.price}</span> <br />
                {
                  goCart ? <Link to='/cart'><button>Go to Cart</button></Link>
                  : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                }
      </div>
    </div>
   </>
    )
  }
