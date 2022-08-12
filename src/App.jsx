
import Navbar from './components/Navbar'
import React from 'react'
import ItemListContainer from './components/ItemList/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import ItemDetailContainer from './components/DetailList/ItemDetailContainer';
import Cart from './components/Cart';
import { CartP, useCartContext } from './context/CartContext'

function App() {
  return (
    <>  
    <BrowserRouter >
    <CartP>
      <Navbar />
        <Routes>
           <Route path='/' element={<ItemListContainer />}/>
           <Route path='Category/:idCategory' element={<ItemListContainer />}/>
           <Route path='producto/:idDetail' element={ <ItemDetailContainer />}/>
           <Route path='*' element={<p>404</p>}/>
           <Route path='cart' element={< Cart />} />
        </Routes>
    </CartP>
    <h1>ACA VA EL FOOOTERRRRRRRRR</h1>
   
    </BrowserRouter>

    </>
)
}

export default App
