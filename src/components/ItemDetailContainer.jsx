import React, { useEffect, useState } from 'react'
import ItemDetail  from "./ItemDetail"
import ItemCount from './ItemCount'

export default function ItemDetailContainer() {

  let prodHard = [
    { id: 4, name: "product1", price: 200, type: "top"}
  ]
  const [prod, setProd] = useState({})

 
  useEffect(() => {
    const getProd = new Promise((res) => {
      setTimeout(() => {
          res(prodHard)
      }, 2000);
    })
  
    getProd.then(res => setProd(res))
    console.log(prod);
  }, [])
  
  return (
    <>
  <div> <ItemDetail prod={prod} /></div>
  </>
  )
}
