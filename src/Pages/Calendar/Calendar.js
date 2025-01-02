import React from 'react'

import { Link } from 'react-router-dom'

const Calendar = () => {
    return (
        <div>
            <div className="container">
                <div className="row m-0 p-0">
                    <div className="col">
                        <h2 className='col_main_heading '> The ultimate kitesurf holiday calendar!</h2>
                    </div>
                </div>
            </div>


            {/* january section container / */}
            <h3 className='cal_title '>January</h3>
            <div className="container-fluid calbg_cont">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="card  cal_card text-center">
                            <h3 className='cal_card_head'>Zanzibar paradise camp</h3>
                            <p>January</p>
                            <p>€ 499</p>
                            <p>Available</p>
                            <div>
                                <Link to="/trip/zanzibar" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card  cal_card text-center">
                            <h3 className='cal_card_head'>Tarifa</h3>
                            <p>25.01. – 01.02.2025</p>
                            <p>€ 399</p>
                            <p>Last Spots</p>
                            <div>
                                <Link to="/trip/Tarifa" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* February section container  */}
            <h3 className='cal_title '>February</h3>
            <div className="container-fluid calbg_cont2">
                <div className="row m-auto">
                    <div className="col-lg-4"> </div>
                    <div className="col-lg-4">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Zanzibar paradise camp</h3>
                            <p>February</p>
                            <p>€ 499</p>
                            <p>Available</p>
                            <div>
                                <Link to="/trip/zanzibar" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>

            {/* March section container */}
            <h3 className='cal_title '>March</h3>
            <div className="container-fluid calbg_cont3">
                <div className="row m-auto">
                    <div className="col-lg-4">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Zanzibar paradise camp</h3>
                            <p>March</p>
                            <p>€ 499</p>
                            <p>Available</p>
                            <div>
                                <Link to="/trip/zanzibar" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Egypt ALL INN</h3>
                            <p>23.03 – 30.03.2025   </p>
                            <p>€ 699</p>
                            <p>Last Spots</p>
                            <div>
                                <Link to="/trip/Egypt" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Egypt ALL INN</h3>
                            <p>30.03 – 06.04.2025</p>
                            <p>€ 699</p>
                            <p>Available</p>
                            <div>
                                <Link to="/trip/Egypt" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* April section container */}
            <h3 className='cal_title '>April</h3>
            <div className="container-fluid calbg_cont4">
                <div className="row m-auto">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Egypt ALL INN</h3>
                            <p>06.04 – 13.04.2025</p>
                            <p>€ 699</p>
                            <p>Available</p>
                            <div>
                                <Link to="/trip/Egypt" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>

                </div>
            </div>


            {/* july container  section  */}
            <h3 className='cal_title '>July</h3>
            <div className="container-fluid calbg_cont5">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Sicilian kite dream</h3>
                            <p>19.07 – 26.07.2024</p>
                            <p>€ 649</p>
                            <p>Fully booked</p>
                            <div>
                                <Link to="/" className='cal_searchbtn2'>Request</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Sicilian kite dream</h3>
                            <p>26.07 – 02.08.2024   </p>
                            <p>€ 649</p>
                            <p>Fully booked </p>
                            <div>
                                <Link to="/" className='cal_searchbtn2'>Request</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            {/* August container section  */}
            <h3 className='cal_title '>August</h3>
            <div className="container-fluid calbg_cont6">
                <div className="row m-auto">
                    <div className="col-lg-3">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Sicilian kite dream</h3>
                            <p>02.08-09.08.2024</p>
                            <p>€ 649</p>
                            <p>Last Spots</p>
                            <div>
                                <Link to="/trip/Sail&kite" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Sicilian kite dream</h3>
                            <p>09.08.-16.08.2024</p>
                            <p>€ 649</p>
                            <p>Last Spots</p>
                            <div>
                                <Link to="/trip/Sail&kite" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Sicilian kite dream</h3>
                            <p>16.08.-2308.2024</p>
                            <p>€ 649</p>
                            <p>Last Spots</p>
                            <div>
                                <Link to="/trip/Sail&kite" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Sicilian kite dream</h3>
                            <p>23.08.-30.08.2024</p>
                            <p>€ 649</p>
                            <p>Last Spots</p>
                            <div>
                                <Link to="/trip/Sail&kite" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            {/* September container section  */}
            <h3 className='cal_title '>September</h3>
            <div className="container-fluid mb-4 calbg_cont7">
                <div className="row m-auto">
                    <div className="col-lg-4">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Endless summer party</h3>
                            <p>07.09.2024</p>
                            <p>€ 18</p>
                            <p>Available</p>
                            <div>
                                <Link to="/trip/vanlife" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Wad n Feest</h3>
                            <p>26.09.-29.09.2024</p>
                            <p>€ 399</p>
                            <p>Last Spots</p>
                            <div>
                                <Link to="/trip/vanlife" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card cal_card text-center">
                            <h3 className='cal_card_head'>Camper roadtrip</h3>
                            <p>20.09.-30.09.2024</p>
                            <p>€ 379</p>
                            <p>Available</p>
                            <div>
                                <Link to="/trip/vanlife" className='cal_searchbtn2'>Book Now</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Calendar
