import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail(list) {
  return (
    <>
    <div>ItemDetail</div>
    <div>
      <p>PICTURE</p>
    <h2 className='card-tit'>{list.name}</h2>  
    <h4 className='card-price'>{list.price}</h4>
    <h4 >{list.id}</h4>
    <h5>{list.type}</h5>
    <ItemCount />

    </div>
    </>
  )
}
