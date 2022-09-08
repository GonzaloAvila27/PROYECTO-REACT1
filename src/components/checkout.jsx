

import React from 'react'
import { useState} from 'react'
import { addDoc, collection, getFirestore} from 'firebase/firestore'
import { useCartContext } from '../context/CartContext'


export default function Checkout() {

    const { cart, setCart, totalPrice } = useCartContext()
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [idOrder, setIdOrder] = useState('')
    const [finished, setFinished] = useState(false)

    const endPurchase = () => {
        const order = 
        { 
            buyer: {name, tel, email}, 
            items: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
            total: totalPrice()
        }

        console.log(order)

        const db = getFirestore()
        const refCollection = collection(db, 'orders')

        addDoc(refCollection, order).then((res) => {
            setIdOrder(res.id)
            setFinished(true)
            setCart([])
        })
    }

  return (

    <>
    { 
        !finished 
        ? 
        <div className="formCheckout">
                
            <input className="formInput" type = {'text'} placeholder = "Set name" value={name} onChange={(e) => setName(e.target.value)} />
            
            <input className="formInput" type = {'tel'} placeholder = "Set celphone" value={tel} onChange={(e) => setTel(e.target.value)}/>
                
            <input className="formInput" type = {'email'} placeholder = "Set e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            
            <button className="formBtn" onClick={endPurchase}> End Purchase </button>
            
        </div>

        :
        <div className="finished">
            <p className="thx">Thanks for choosing our products!</p>
            <p className="code"> Follow id: {idOrder} </p> 
        </div>
      }
     </>
  )
}
