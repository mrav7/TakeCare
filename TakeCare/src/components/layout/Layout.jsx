import React from 'react'
import InNavBar from '../navBars/InNavBar'
import MainFooter from '../footers/MainFooter'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
            
            <Outlet />
            
        </>
    )
}

export default Layout;
