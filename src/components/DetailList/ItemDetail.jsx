import React from 'react'
import ItemCount from '../ItemCount'

export default function ItemDetail({prod}) {

  const onAdd = (Q) => {
    console.log(` ${Q} `);
  }

  return (
    <>
      <div className="card col" style={{width: "50rem"}}>
        <img src="{prod.image}" className="card-img-top" alt="Product Image"/>
      <div className="card-body">
            <h5 className="card-title">{prod.name}</h5>
            <p className="card-text">product description, dos elefantes se..</p>
            <span>STOCK: {prod.stock}</span> // <span>${prod.price}</span>
          <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      </div>
    </div>
   </>
    )
  }
