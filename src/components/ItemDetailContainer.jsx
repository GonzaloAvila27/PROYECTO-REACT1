import React from 'react'
import ItemDetail  from "./ItemDetail"
import ItemCount from './ItemCount'

export default function ItemDetailContainer() {

  
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }

  
  return (
  <>
  <button><ItemDetail /></button>
  <ItemCount initial={1} stock={5} onAdd={onAdd}/>
  </>
  )
}
