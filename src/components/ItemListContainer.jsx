import React, { useDebugValue, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'



export default function ItemListContainer() {
  
  const [list, setList] = useState([])
 /* const { idType } = useParams()
  
  function filterList(type){
    let array = {...list}
    array = array.filter(list => list.type.includes(type))
    setList(array)
  }  */
  
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

/*useEffect (() => {
  if(idType) filterList(idType) 
  else setList()
}, [idType])
*/
  return (
    <div className='container text-center'>
      <div className='row'>
    <ItemList list={list} />
      </div>
    </div>
  )
}
