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
    <img src="{prod.image}" alt="" />
    <h2 className='card-tit'>Product:{prod.name}</h2>  
    <h4 className='card-price'>${prod.price}</h4>
    <h4 >ID:{prod.id}</h4>
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>

    </div>
    </>
  )
}
