

import React from 'react'
import { useState} from 'react'
import { addDoc, collection, getFirestore} from 'firebase/firestore'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './Styles/check.css';

export default function Checkout() {

    const { cart, setCart, totalPrice } = useCartContext()
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [idOrder, setIdOrder] = useState('')
    const [finished, setFinished] = useState(false)

    const order = 
    { 
        buyer: {name, tel, email, address}, 
        items: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
        total: totalPrice()
    }
    
   
    const handleClick  = () => {
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
        <div className="form">
                
            <input className="form__Input" type = {'text'} placeholder = "Name" value={name} onChange={(e) => setName(e.target.value)} />
            
            <input className="form__Input" type = {'tel'} placeholder = "Celphone" value={tel} onChange={(e) => setTel(e.target.value)}/>
                
            <input className="form__Input" type = {'email'} placeholder = "E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <input className="form__Input" type = {'address'} placeholder = "address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            
            <button className="form__Btn" onClick={handleClick}> End Purchase </button>
            
        </div>

        :
        <div className="finished">
            <div className="finished__thx">Thanks for choosing our products!🤩</div>
            <div className="finished__code"> Follow id: {idOrder} </div> 
            <Link to='/' className='finished__home'>Go to front page🏠</Link>
        </div>
      }
     </>
  )
}
