import React from 'react';
import ReactDOM from 'react-dom/client';
import CampingGa from './CampingGa';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CampingGa />
  </React.StrictMode>
);
