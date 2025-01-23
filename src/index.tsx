import React from 'react';
import ReactDOM from 'react-dom/client';
import CampingGa from './CampingGa';
import './index.css';
import ProductDetail from './views/Product/ProductDetail';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CampingGa />
    </BrowserRouter>
  </React.StrictMode>
);
