import React, { useEffect, useState } from 'react'
import ItemDetail  from "./ItemDetail"
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

export default function ItemDetailContainer() {


  const [error, setError] = useState(false)
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { idDetail} = useParams()
  
  useEffect(() => {
    const db = getFirestore()
    const document = doc(db, 'products', idDetail)
    getDoc(document)
    .then( res => setProduct( {id: res.id, ...res.data()} ) )
    .catch((e) => {
      setError(true)
    })
    .finally(() => {
      setLoading(false)
    })
  
  }, [idDetail])
  
    
  return (
    <>
      {error && console.log("something went wrong" + {product})}

  <div> <ItemDetail product={product} loading={loading} /></div>
  </>
  )
}

