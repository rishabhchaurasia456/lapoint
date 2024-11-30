import React from 'react'
import Admin_Navbar from './Admin_Navbar'

const Admin_Layout = ({ children }) => {
    return (
        <div>
            <Admin_Navbar />
            <div>{children}</div>
        </div>
    )
}

export default Admin_Layout
