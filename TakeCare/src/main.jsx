import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Product from './pages/product.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Faq from './pages/Faq.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path: "product",
    element: <Product/>,
  },{
    path: "register",
    element: <Register/>,
  },{
    path: "login",
    element: <Login/>,
  },{
    path: "faq",
    element: <Faq/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
