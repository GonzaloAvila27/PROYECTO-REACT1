import './App.css'
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from './components/ItemList'
import Item from './components/Item'


function App() {
  return (
    <>  
    <BrowserRouter >
    <Navbar />
        <Routes>
           <Route path='/' element={<Item />}/>
           <Route path='ategory/:idCategoria' element={[]}/>
           <Route path='producto/:idProducto' element={[]}/>
           <Route path='*' element={<p>404</p>}/>
        </Routes>
    <h1>ACA VA EL FOOOTERRRRRRRRR</h1>
    </BrowserRouter>
    </>
)
}

export default App
