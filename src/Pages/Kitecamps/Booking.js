import React from 'react'

import logo from '../../Images/logo-kiteactive.svg'
import { useLocation } from 'react-router-dom'

const Booking = () => {

    const location = useLocation();
    const { trip_name } = location.state || {}; 
    return (
        <div>

            <div className=" container-fluid booking_cont">
                <div className="row m-0 p-0">
                    {/* logo  */}
                    <div className="col-6">
                    <span>
                        <img src={logo} alt="" className='img-fluid w-25 m-auto mt-2' />
                    </span>


                      {/* when i clik the any trip then show here trip name  */}
                        <span className='mx-5 fs-4 fw-bold' >                           
                            {/* {trip_name ? `Welcome to ${trip_name}` : 'No trip selected'} */}
                            {trip_name} 
                        </span>
                    </div>

                    {/* booking button  */}
                    <div className="col-6">
                        <div className="right_div">
                            <span className='mx-3'>
                                From
                            </span>
                            <span className='mx-3'>
                                $420.54
                            </span>
                            <span className='mx-3'>
                                / Week
                            </span>
                            <span className=''>
                                <button className='Booking_btn'>
                                    Book
                                </button>
                            </span>

                            {/* whatsapp icon  */}
                            <span>
                                <i className='fa fa-whatsapp fs-3 text-warning me-3 px-3'></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Booking
