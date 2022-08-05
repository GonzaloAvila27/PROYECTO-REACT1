
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <>  
    <BrowserRouter >
    <Navbar />
        <Routes>
           <Route path='/' element={<ItemListContainer />}/>
           <Route path='Category/:idType' element={<ItemListContainer />}/>
           <Route path='producto/:idProducto' element={ <ItemDetailContainer />}/>
           <Route path='*' element={<p>404</p>}/>
        </Routes>
    <h1>ACA VA EL FOOOTERRRRRRRRR</h1>
   
    </BrowserRouter>

    </>
)
}

export default App
