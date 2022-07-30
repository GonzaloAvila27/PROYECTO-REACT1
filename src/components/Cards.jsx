import './CSS/Cards.css'
import ItemCount from './ItemCount'
import React, { useState } from 'react'

const Cards = () => {
  return (
    <div className="card Cards">
        <img className="card-img-top"/>
            <div className="card-body">
            <h3>{list.name}</h3>
            <p>{list.type}</p>
                <ItemCount />
            </div>
    </div>
  )
}

export default Cards
