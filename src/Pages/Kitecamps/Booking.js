import React from 'react'

import logo from '../../Images/logo-kiteactive.svg'
import { NavLink } from 'react-router-dom'

const Booking = ({ tripName }) => {

    // const location = useLocation();
    // const { trip_name } = location.state || {}; 
    return (
        <div>

            <div className="container-fluid booking_cont">
                <div className="row ">
                    {/* Logo and Trip Name */}
                    <div className="col-lg-6">
                      <div className="d-flex ">
                      <img src={logo} alt="" className="booking_logo" />
                        <span className="show_trip_name">
                            {tripName}
                        </span>
                      </div>
                    </div>

                    {/* Booking button and Pricing */}
                    <div className="col-lg-6 ">
                        <div className='right_div'>
                            <span className="mx-2">
                                From
                            </span>
                            <span className="mx-2">
                                $420.54
                            </span>
                            <span className="mx-2">
                                / Week
                            </span>
                            <span className="mx-2">
                                <NavLink to="/form" state={{ tripName }} className="Booking_btn">
                                    Book
                                </NavLink>
                            </span>

                            {/* WhatsApp Icon */}
                            <span className="mx-2">
                                <i className="fa fa-whatsapp fs-3 text-warning"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Booking
