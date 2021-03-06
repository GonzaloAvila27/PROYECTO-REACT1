
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from './components/ItemCount'
import Item from './components/Item';
import "./App.css"


function App() {
  return (
    <>  
    <BrowserRouter >
    <Navbar />
        <Routes>
           <Route path='/' element={< Item />}/>
           <Route path='ategory/:idCategoria' element={[]}/>
           <Route path='producto/:idProducto' element={[]}/>
           <Route path='*' element={<p>404</p>}/>
        </Routes>
    <ItemCount />
    <h1>ACA VA EL FOOOTERRRRRRRRR</h1>
    </BrowserRouter>
    </>
)
}

export default App
