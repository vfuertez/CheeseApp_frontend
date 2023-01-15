import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.scss"
import { RouterProvider } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import router from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
