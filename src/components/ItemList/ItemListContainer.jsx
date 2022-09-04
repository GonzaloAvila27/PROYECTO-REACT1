import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import '../Styles/listContainer.css'



export default function ItemListContainer() {
  

  const [products, setProducts] = useState([])
  const { idCategory } = useParams()
  
  useEffect(() => {
    const db = getFirestore()
    let miCollection
    if (idCategory == undefined) {
         miCollection = collection(db, "products") 
      } else {
         miCollection = query(collection(db, "products"), where("category", "==", idCategory)
        )
      }
      getDocs(miCollection).then((data) => {
        const fireProducts = data.docs.map((products) => ({
          ...products.data(),
          id: products.id,
        }))
        setProducts(fireProducts)
      })  
    } , [idCategory])
  
  

  return (
    <div style={{border:"red solid 1px", margin:"2rem", width:"100%"}}>
      <div className='listContainer'>
      <ItemList  products={products} />
      </div>
    </div>
  )
}
