import React from 'react'
import ItemDetail  from "./ItemDetail"
import ItemCount from './ItemCount'

export default function ItemDetailContainer() {

  
  const onAdd = (Q) => {
    console.log(`Compraste ${Q} unidades`);
  }


  return (
  <>
  <button> <ItemDetail /></button>
  <ItemCount initial={1} stock={5} onAdd={onAdd}/>
  </>
  )
}
