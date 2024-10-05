import React from 'react'
import Formheader from './Formheader'

const Formlayout = ({ children }) => {
    return (
        <div>
            <Formheader />
            <div>{children}</div>
        </div>
    )
}

export default Formlayout
