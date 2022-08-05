import React from 'react'
import ItemCount from './ItemCount' 
i

export default function ItemDetail(prod) {



  return (
    <>
    <h1>ItemDetail</h1>
    <div>
      <p>PICTURE</p>
    <h2 className='card-tit'>{prod.name}</h2>  
    <h4 className='card-price'>{prod.price}</h4>
    <h4 >{prod.id}</h4>
    <h5>{prod.type}</h5>
    <ItemCount />

    </div>
    </>
  )
}
