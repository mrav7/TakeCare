import React from 'react'
import AdminNav from '../components/navBars/AdminNavBar.jsx'
import MainFooter from '../components/footers/MainFooter'
import DisplayUsersList from '../components/main/DisplayUsersList.jsx'

function UserList() {
    return (
        <>
            <AdminNav />
            <DisplayUsersList />
            <MainFooter />
        </>
    )
}

export default UserList;