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
import UserList from './pages/UsersList.jsx'

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
        {/* <Route path="patients-list" element={<PatientsList />} /> */}
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="admin-users-control" element={<AdminUsersControl />} />
        <Route path="admin-create-users" element={<AdminCreateUsers/>} />
      <Route path='admin-edit-users' element={<AdminEditUsers />} />
      <Route path='admin-patients-control' element={<PatientsList/>}/>
      <Route path='admin-user-list-control' element={<UsersList />}/>
      <Route path='admin-update-user' element={<AdminUpdateUser/>}/>
      <Route path='user-patient-view' element={<UserPatientsView/>}/>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  )