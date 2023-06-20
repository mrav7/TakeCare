import React from 'react'
import ReactDOM from 'react-dom/client'
import Product from './pages/Product.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Faq from './pages/Faq.jsx'
import App from './App.jsx'
import ControlPanel from './pages/ControlPanel.jsx'
import PatientRegister from './pages/PatientRegister.jsx'
import PatientDailyReview from './pages/PatientDailyReview.jsx'
import PatientsList from './pages/PatientsList.jsx'
import PrivacyPolicy from './pages/privacyPolicy.jsx'

import LandingPage from './components/main/LandingPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
   
    children: [
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
      },{
        path: "cp",
        element: <ControlPanel/>,
      },{
        path: "signup-patient",
        element: <PatientRegister/>,
      },{
        path: "patient-check",
        element: <PatientDailyReview/>,
      },{
        path: "patients-list",
        element: <PatientsList />
      },{
        path: "privacy-policy",
        element: <PrivacyPolicy />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
