import React, { Children } from 'react'
import Aff_Navbar from './Aff_Navbar'


const Aff_Layout = ({children}) => {
    return (
        <div>
            <Aff_Navbar />
            <div>{children}</div>
        </div>
    )
}

export default Aff_Layout