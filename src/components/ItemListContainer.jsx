import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'



export default function ItemListContainer() {
  
  const [list, setList] = useState([])
  useEffect(() =>{
    let productsHardC = [
    { id: 1, name: "product1", price: 200, type: "top"},
    { id: 2, name: "product2", price: 100, type: "low"},
    { id: 3, name: "product3", price: 300, type: "top"},
    { id: 4, name: "product4", price: 100, type: "low"},
    { id: 5, name: "product5", price: 400, type: "top"},
    { id: 6, name: "product6", price: 100, type: "low"},

  ]
  const promiseProducts = new Promise((res, reject) => {
    setTimeout(() => {
      res(productsHardC)
    }, 2000);
  })
  promiseProducts.then((products)=>{
    setList(products)
  })
}, [] )

  return (
    <ItemList list={list} />
  )
}
