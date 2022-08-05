import React from 'react'
import ItemCount from './ItemCount' 


export default function ItemDetail({prod}) {

  const onAdd = (Q) => {
    console.log(` ${Q} `);
  }

  return (
    <>
    <h1>ItemDetail</h1>
    <div>
    <p>PICTURE</p>
    <h2 className='card-tit'>Product:{prod.name}</h2>  
    <h4 className='card-price'>${prod.price}</h4>
    <h4 >ID:{prod.id}</h4>
    <h5>Type:{prod.type}</h5>
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>

    </div>
    </>
  )
}
