import React from 'react'
import Item from './Item'



export default function ItemList({list}) {
  return (
    <> 
        {list.map((list)=>(
        < Item key={list.id} info={list} />
      ))}

    </>
  )
}
