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
                        <div className="d-flex left_div">
                            <img src={logo} alt="" className="booking_logo" />
                            <span className="show_trip_name">
                                {tripName}
                            </span>
                        </div>
                    </div>

                    {/* Booking button and Pricing */}
                    <div className="col-lg-6 ">
                        <div className='right_div text-center '>
                            <span className="booking_item_span">
                                From
                            </span>
                            <span className="booking_item_span">
                                $420.54
                            </span>
                            <span className="booking_item_span">
                                / Week
                            </span>
                            <span className="booking_item_span">
                                <NavLink to="/checkout/form" state={{ tripName }} className="Booking_btn">
                                    Book
                                </NavLink>
                            </span>

                            <span className="booking_item_span">
                                <a href="https://wa.me/31850091325?text=Hello" className=" text-decoration-none text-warning fw-bold" title="Call us on WhatsApp">
                                    <i className="fa fa-whatsapp wp_icon text-warning"></i>
                                </a>
                            </span>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Booking
