import React from 'react'
import AdminNav from '../components/navBars/AdminNavBar.jsx'
import MainFooter from '../components/footers/MainFooter'
import DisplayUsers from '../components/main/DisplayUsersList.jsx'

function PatientsList() {
    return (
        <>
            <AdminNav />
            <DisplayUserssList />
            <MainFooter />
        </>
    )
}

export default PatientsList