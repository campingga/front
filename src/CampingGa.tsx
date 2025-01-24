import React from 'react';
import './CampingGa.css';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './views/Product/ProductDetail';
import Order from './views/Order/Order';

function CampingGa() {
  
  return (
    
    <Routes>
      <Route path='/productDetail' element={<ProductDetail/>} />
      <Route path='/order' element={<Order/>} />

    </Routes>

  );
}

export default CampingGa;
