import React from 'react';
import ReactDOM from 'react-dom/client';
import CampingGa from './CampingGa';
import './index.css';
import ProductDetail from './views/Product/ProductDetail/ProductDetail';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <CampingGa /> */}
    <ProductDetail />
  </React.StrictMode>
);
