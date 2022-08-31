import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import {  useCartContext } from "../../context/CartContext";


export default function ItemDetail({product, loading}) {
  const [goCart, setGoCart] = useState(false)
  const {addProduct } = useCartContext();
  
  console.log(product.id);
  const onAdd = (count) => {
    if (count <= product.stock) { alert ( `${count} ${product.name} added to cart`) 
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
           <div className="card col" style={{width: "50rem"}}>
                  <img src={product.image} className="card-img-top" alt={product.name}/>
                       <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Description: {product.desc}</p>
                            <p className="card-text">Pairs with: {product.pairs}</p>
                                          
                                            {
                                              goCart ? <Link to='/cart'><button>Go to Cart</button></Link>
                                             : <ItemCount initial={product.initial} stock={product.stock} onAdd={onAdd}/>
                                            }
                        </div>   
           </div>}
  </>
    )
  }







