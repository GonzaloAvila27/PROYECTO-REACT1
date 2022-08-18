import React, { useDebugValue, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'



export default function ItemListContainer() {
  
  const [list, setList] = useState([])
  const { idCategory } = useParams()
  
  useEffect(() =>{
    let productsHardC = [
      { id: 1, name: "product1", price: 200, category: "top", image: "https://image.png.61ebb49188cacfc1847c5cded7620854.com/originals/61/eb/b4/61ebb49188cacfc1847c5cded7620854.jpg", stock: 10},
      { id: 2, name: "product2", price: 100, category: "low", image: "https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/e9/b2/86/e9b2865b-2831-4ebb-d874-556fa6c0f9ef/source/256x256bb.jpg", stock: 100},
      { id: 3, name: "product3", price: 300, category: "top", image: "https://ps.w.org/primary-cat/assets/icon-256x256.jpg?rev=2450877", stock: 10},
      { id: 4, name: "product4", price: 100, category: "low", image: "https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg", stock: 100},
      { id: 5, name: "product5", price: 400, category: "top", image: "https://64.media.tumblr.com/78ea8c48ecc6a5e10b4b8d0162246728/dd1107e2a5b5fd19-26/s400x600/83fa7ac0517a80e7fb8cfa3cb80224b2ff0376a2.jpg", stock: 10},
      { id: 6, name: "product6", price: 100, category: "low", image: "https://a.wattpad.com/useravatar/1__Morgana__1.256.464802.jpg", stock: 100},

  ]
  const promiseProducts = new Promise((res) => {
    setTimeout(() => {
      res(productsHardC)
    }, 2000);
  })
  if (idCategory){ 
    promiseProducts.then(products => setList(products.filter(cat => cat.category === idCategory))) 
  } else {
      promiseProducts.then(products=> setList(products))
  }
  }, [idCategory] )  
  


  return (
    <div className='container text-center' style={{border:"red solid 1px", margin:"2rem"}}>
      <div className='row'>
    <ItemList list={list} />
      </div>
    </div>
  )
}
