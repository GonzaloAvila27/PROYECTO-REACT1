
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/DetailList/ItemDetailContainer';
import Checkout from "./components/Checkout";
import Cart from './components/Cart';
import { CartP } from './context/CartContext';
import Footer from './components/Footer';

function App() {
  return (
    <>  
    <BrowserRouter >
    <CartP>
      <Navbar />
        <Routes>
           <Route path='/' element={<ItemListContainer />}/>
           <Route path='/category/:idCategory' element={<ItemListContainer />}/>
           <Route path='/producto/:idDetail' element={ <ItemDetailContainer />}/>
           <Route path='/cart' element={< Cart />} />
           <Route path="/checkout" element={ < Checkout />} />
           <Route path='*' element={<p>404</p>}/>
        </Routes>
    <Footer />
    </CartP>
   
    </BrowserRouter>

    </>
)
}

export default App
