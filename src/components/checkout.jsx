import React from 'react'
import { useContext } from 'react';
import {  useCartContext } from "../context/CartContext";

export default function checkout() {

    const {cart, total} = useContext(CartContext)
    const [name, setName] = useState ("")
    const [phone, setPhone] = useState ("")
    const [email, setEmail] = useState ("")
    function endPurchase() {
      const order = { buyer: { name, phone, email }, cart: [], total:total}
      console.log(order)
    }




  return (
    <>
    <div>
        <input type={'text'} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br/>
        <input type={'text'} placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} /><br/>
        <input type={'text'} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
    </div>
    <button onClick={endPurchase}>SEND</button>
    </>
  )
}
