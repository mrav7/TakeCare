import React from 'react'
import PatientsAdmin from '../components/main/PatientsAdmin'
import AdminNavBar from '../components/navBars/AdminNavBar'


export default function AdminPatientsControl() {
  return (
    <div>
        <AdminNavBar/>
        <PatientsAdmin/>
    </div>
  )
}
