import React from 'react'
import Item from './Item'
import '../Styles/listContainer.css'


export default function ItemList({products, loading}) {
  return (
    <> 
        {products.map((product)=>(
        < Item key={product.id} info={product} />
      ))}

    </>
  )
}
