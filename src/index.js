import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter as Routes} from 'react-router-dom';
import { ScrollToTop } from './components';
import { FilterProvider , CartProvider } from './contexts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
    <CartProvider>
    <FilterProvider>
    <ToastContainer closeButton={false} autoClose={3000} position={'bottom-right'}/>
    <ScrollToTop/>
    <App />
    </FilterProvider>
    </CartProvider>
    </Routes>
  </React.StrictMode>
);


