import './CSS/Cards.css'
import ItemCount from './ItemCount'
import React, { useState } from 'react'

const Cards = () => {
  return (
    <div className="card Cards">
        <img className="card-img-top"/>
            <div className="card-body">
                <div className="image"> bonita pic</div>
                <h1 className="card-title">Producto</h1>
                <ItemCount />
            </div>
    </div>
  )
}

export default Cards
