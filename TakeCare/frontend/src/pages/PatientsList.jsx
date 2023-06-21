import React from 'react'
import UsrNav from '../components/navBars/UsrNavBar.jsx'
import MainFooter from '../components/footers/MainFooter'
import DisplayPatientsList from '../components/main/DisplayPatientsList.jsx'

function PatientsList() {
    return (
        <>
            <UsrNav />
            <DisplayPatientsList />
            <MainFooter />
        </>
    )
}

export default PatientsList