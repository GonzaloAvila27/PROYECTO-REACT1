import React, { useEffect, useState } from 'react'
import ItemDetail  from "./ItemDetail"
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

export default function ItemDetailContainer() {

  const [product, setProduct] = useState({})
  const { idDetail} = useParams()
  
  useEffect(() => {
    const db = getFirestore()
    const document = doc(db, "products", idDetail)

      getDoc(document).then((product) => {
        const fireProduct = {
          ...product.data(),
          id: product.id
        }
        setProduct(fireProduct)
      })  
    } , [])
  
    
  return (
    <>
  <div> <ItemDetail prod={product} /></div>
  </>
  )
}
