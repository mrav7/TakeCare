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
import UsersList from './pages/UsersList.jsx'
import PrivacyPolicy from './pages/privacyPolicy.jsx'
import AdminUsersControl from './pages/AdminUsersControl.jsx'
import AdminCreateUsers from './pages/AdminCreateUsers.jsx'
import AdminEditUsers from './pages/AdminEditUsers.jsx'
import LandingPage from './components/main/LandingPage.jsx'
import AdminPatientsControl from './pages/AdminPatientsControl.jsx'
import AdminUpdateUser from './pages/AdminUpdateUser.jsx'
import UserPatientsView from './pages/UserPatientsView.jsx'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";


{/*const router = createBrowserRouter([
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
      },{
        path:"admin-users-control",
        element:<AdminUsersControl/>
      },{
        path:"admin-create-users",
        element:<AdminCreateUsers/>
      },{
         
      }
    ]
  }
]);*/}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} />*/}
    
    <BrowserRouter>
      <Routes>
      <Route path= "/"  element= {<App />}/>     
      <Route path= "product" element={<Product/>} />        
      <Route path= "register"  element= {<Register/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="faq" element={<Faq/>} />
        <Route path="cp" element={<ControlPanel/>} />
        <Route path="signup-patient" element={<PatientRegister/>} />
        <Route path="patient-check" element={<PatientDailyReview/>} />
        <Route path="patients-list" element={<PatientsList />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="admin-users-control" element={<UsersList />} />
        <Route path="admin-create-users" element={<AdminCreateUsers/>} />
      <Route path='admin-edit-users' element={<AdminEditUsers />} />
<<<<<<< HEAD
      <Route path='admin-patients-control' element={<PatientsList />}/>
=======
      <Route path='admin-patients-control' element={<AdminPatientsControl/>}/>
      <Route path='admin-update-user' element={<AdminUpdateUser/>}/>
      <Route path='admin-update-user' element={<AdminUpdateUser/>}/>
      <Route path='user-patient-view' element={<UserPatientsView/>}/>


>>>>>>> f7b66fdc2720e247cfceed23acb764b4d86037df
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
