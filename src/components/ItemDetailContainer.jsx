import React, { useEffect, useState } from 'react'
import ItemDetail  from "./ItemDetail"
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {


  let prodHard = [
    { id: 1, name: "product1", price: 200, category: "top", image: "https://i.pinimg.com/originals/61/eb/b4/61ebb49188cacfc1847c5cded7620854.jpg"},
    { id: 2, name: "product2", price: 100, category: "low", image: "https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/e9/b2/86/e9b2865b-2831-4ebb-d874-556fa6c0f9ef/source/256x256bb.jpg"},
    { id: 3, name: "product3", price: 300, category: "top", image: "https://ps.w.org/primary-cat/assets/icon-256x256.jpg?rev=2450877"},
    { id: 4, name: "product4", price: 100, category: "low", image: "https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg"},
    { id: 5, name: "product5", price: 400, category: "top", image: "https://64.media.tumblr.com/78ea8c48ecc6a5e10b4b8d0162246728/dd1107e2a5b5fd19-26/s400x600/83fa7ac0517a80e7fb8cfa3cb80224b2ff0376a2.jpg"},
    { id: 6, name: "product6", price: 100, category: "low", image: "https://a.wattpad.com/useravatar/1__Morgana__1.256.464802.jpg"},
  ]
 
 
 
  const [prod, setProd] = useState({})
  const { idDetail } = useParams()
 
  useEffect(() => {
    const getProd = new Promise((res) => {
      setTimeout(() => {
          res(prodHard)
      }, 2000);
    })
  
    getProd.then(res => setProd(res.find(proid => proid.id === parseInt(idDetail))))
  }, [])
  
  return (
    <>
  <div> <ItemDetail prod={prod} /></div>
  </>
  )
}
