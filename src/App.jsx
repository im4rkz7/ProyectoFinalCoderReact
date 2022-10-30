import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <CartContextProvider>
        <NavBar/>
        <Routes>
          
          <Route index path="/" element={<ItemListContainer greeting="¡Bienvenido a Little Paws!" />}/>

          <Route index path="/categoria/:categoryId" element={<ItemListContainer greeting="¡Bienvenido a Little Paws!" />}/>
          
          <Route path="/detalle/:detailId" element={<ItemDetailContainer/>}/>

          <Route path="/cart" element={<Cart/>}/>

          <Route path="*" element={<Navigate to="/"/>}/>
          
        </Routes>
      </CartContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
