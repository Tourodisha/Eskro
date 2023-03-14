import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Contextprovider } from './context/Contextprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Contextprovider>
    <App />
  </Contextprovider>
);