import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import {  useCartContext } from "../../context/CartContext";
import '../Styles/itemdetail.css'


export default function ItemDetail({product, loading}) {
  const [goCart, setGoCart] = useState(false)
  const {addProduct } = useCartContext();
  
  console.log(product.id);
  const onAdd = (count) => {
    if (count <= product.stock) { 
      Swal.fire({
                title: `U added ${count} to ur cart!`,
                width: 1600,
                padding: '3em',
                color: '#5A9ECB',
                })
    setGoCart(true)
    addProduct(product, count) 
    console.log(product, count);  
    } else {
      alert(`te cache + ${product.id} + ${count}`)
  
    }
  }

  return (
    <>
{loading && 
      <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status"/>
      </div>
            }
  
{ loading ||
           <div className="detail"> 

                  <img src={product.image} className="detail__img" alt={product.name}/>
                       <div className="detail__body">
                            <div className="detail__title">{product.name}</div>
                            <div className="detail__text">🍻Description: {product.desc}</div>
                            <div className="detail__text">🍽Perfect with: {product.pairs}</div>                        
                                            {
                                              goCart ? <Link to='/cart'><div className='keep'>Go to Cart</div></Link>
                                             : <ItemCount initial={product.initial} stock={product.stock} onAdd={onAdd}/>
                                            }
                                             <Link to='/'><div className='keep'>Keep shopping!🛒</div></Link>
                        </div>   
           </div>}
  </>
    )
  }







