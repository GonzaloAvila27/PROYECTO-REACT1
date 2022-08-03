import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'

export default function Item({list}) {
  return (
    <div className='card'>
    {/*{JSON.stringify(list)}*/}
    <h2 className='card-tit'>{list.name}</h2>  
    <h4 className='card-price'>{list.price}</h4>
    < ItemDetailContainer />
</div> 
  )
}
