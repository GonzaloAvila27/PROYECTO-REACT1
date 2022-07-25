import React from 'react'
import Cards from './Cards'
import './CSS/Navbar.css'

const ItemListContainer = () => {
  return (
    <div>
    <h1>Our Products</h1>
        <div className='ItemList'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </div>
    </div>
  )
}

export default ItemListContainer