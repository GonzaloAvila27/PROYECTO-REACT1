import React, { useEffect } from 'react'
import ItemDetail  from "./ItemDetail"
import ItemCount from './ItemCount'
import { resolveConfig } from 'vite'

export default function ItemDetailContainer() {

  let prodHard = [
    { id: 4, name: "product1", price: 200, type: "top"},
  ]
  const [prod, setProd] = useState({})

  const onAdd = (Q) => {
    console.log(`Compraste ${Q} unidades`);
  }
  useEffect(() => {
    const getProd = new Promise((res) => {
      setTimeout(() => {
          resolveConfig(prodHard)
      }, 2000);
    })
  
    getProd.then(res => setProd(res))
  }, [])
  

  return (
  <>
  <button> <ItemDetail prod={prod} /></button>
  <ItemCount initial={1} stock={5} onAdd={onAdd}/>
  </>
  )
}
