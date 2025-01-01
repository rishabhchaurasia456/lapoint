import React from 'react'
import calimg1 from '../../Images/CAL1.jpg'
import calimg2 from '../../Images/CAL2.jpg'
import calimg3 from '../../Images/CAL3.jpg'
import calimg4 from '../../Images/CAL4.jpg'
import calimg5 from '../../Images/CAL5.jpg'
import calimg6 from '../../Images/CAL6.jpg'
import calimg7 from '../../Images/CAL7.jpg'
import { Link } from 'react-router-dom'

const Calendar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className='col_main_heading '> The ultimate kitesurf holiday calendar!</h2>
                    </div>
                </div>
            </div>


            {/* first container  */}
            <div className="container-fluid calendar_cont">
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <img src={calimg1} alt="" className='w-100 m-2 rounded-3' />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h3 className='month_title'>January</h3>

                        <div className="strip_one">
                            <span>Zanzibar paradise camp</span>
                            <span>January</span>
                            <span>€ 499</span>
                            <span>Available</span>
                            <span>
                                <Link to="/trip/zanzibar" className='cal_searchbtn'>Book Now</Link>
                            </span>
                        </div>

                        <div className="strip_two">
                            <span>Tarifa</span>
                            <span>25.01. – 01.02.2025</span>
                            <span>€ 399</span>
                            <span>Last Spots</span>
                            <span>
                                <Link to="/trip/Tarifa" className='cal_searchbtn2'>Book Now</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>



            {/* second feb container */}
            <div className="container-fluid calendar_cont2">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 className='month_title'>February</h3>
                        <div className="strip_two">
                            <span>Zanzibar paradise camp</span>
                            <span>February</span>
                            <span>€ 399</span>
                            <span>available</span>
                            <span>
                                <Link to="/trip/zanzibar" className='cal_searchbtn2'>Book Now</Link>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src={calimg2} alt="" className='w-100 rounded-3' />
                        </div>
                    </div>
                </div>
            </div>




            {/* third  MArch container */}
            <div className="container-fluid calendar_cont">
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <img src={calimg3} alt="" className='w-100 m-2 rounded-3' />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h3 className='month_title'>March</h3>

                        <div className="strip_one">
                            <span>Zanzibar paradise camp</span>
                            <span>March</span>
                            <span>€ 499</span>
                            <span>Available</span>
                            <span>
                                <Link to="/trip/zanzibar" className='cal_searchbtn'>Book Now</Link>
                            </span>
                        </div>

                        <div className="strip_two">
                            <span>Egypt ALL INN</span>
                            <span>223.03 – 30.03.2025</span>
                            <span>€ 699</span>
                            <span>Last Spots</span>
                            <span>
                                <Link to="/trip/Egypt" className='cal_searchbtn2'>Book Now</Link>
                            </span>
                        </div>

                        <div className="strip_one">
                            <span>Egypt ALL INN</span>
                            <span>30.03 – 06.04.2025</span>
                            <span>€ 699</span>
                            <span>Available</span>
                            <span>
                                <Link to="/trip/Egypt" className='cal_searchbtn'>Book Now</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>



            {/* four April Container  */}
            <div className="container-fluid calendar_cont2">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 className='month_title'>April</h3>
                        <div className="strip_two">
                            <span>Egypt ALL INN</span>
                            <span>06.04 – 13.04.2025</span>
                            <span>€ 699</span>
                            <span>available</span>
                            <span>
                                <Link to="/trip/Egypt" className='cal_searchbtn2'>Book Now</Link>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div>
                            <img src={calimg4} alt="" className='w-100 rounded-3' />
                        </div>
                    </div>
                </div>
            </div>


            {/*five july container    */}

            <div className="container-fluid calendar_cont">
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <img src={calimg5} alt="" className='w-100 m-2 rounded-3' />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h3 className='month_title'>july</h3>

                        <div className="strip_one">
                            <span>Sicilian kite dream</span>
                            <span>19.07 – 26.07.2024</span>
                            <span>€ 649 </span>
                            <span>Fully booked</span>
                            <span>
                                <Link to="/trip/Sail&kite" className='cal_searchbtn'>Request</Link>
                            </span>
                        </div>

                        <div className="strip_two">
                            <span>Sicilian kite dream</span>
                            <span>26.07 – 02.08.2024</span>
                            <span>€ 649</span>
                            <span>Fully booked</span>
                            <span>
                                <Link to="/trip/Sail&kite" className='cal_searchbtn2'>Request</Link>

                            </span>
                        </div>
                    </div>
                </div>
            </div>


            {/* six August Container  */}
            <div className="container-fluid calendar_cont">
                <div className="row">
                    <div className="col-lg-8">
                        <h3 className='month_title'>August</h3>
                        <div className="strip_one">
                            <span> Sicilian kite dream</span>
                            <span>02.08-09.08.2024</span>
                            <span>€ 649</span>
                            <span>Last Spots</span>
                            <span>
                                <Link to="/trip/Sail&kite" className='cal_searchbtn'>Book Now</Link>
                            </span>
                        </div>

                        <div className="strip_two">
                            <span>Sicilian kite dream</span>
                            <span>09.08.-16.08.2024</span>
                            <span>€ 649</span>
                            <span>Last Spots</span>
                            <span>
                                <Link to="/trip/Sail&kite" className='cal_searchbtn2'>Book Now</Link>
                            </span>
                        </div>

                        <div className="strip_one">
                            <span>Sicilian kite dream</span>
                            <span>16.08.-2308.2024</span>
                            <span>€ 649</span>
                            <span>Last Spots</span>
                            <span>
                                <Link to="/trip/Sail&kite" className='cal_searchbtn'>Book Now</Link>
                            </span>
                        </div>

                        <div className="strip_two">
                            <span>Sicilian kite dream</span>
                            <span>23.08.-30.08.2024</span>
                            <span>€ 649 </span>
                            <span>Last Spots</span>
                            <span>
                                <Link to="/trip/Sail&kite" className='cal_searchbtn2'>Book Now</Link>

                            </span>
                        </div>


                    </div>

                    <div className="col-lg-4">
                        <div>
                            <img src={calimg6} alt="" className='w-100 rounded-3' />
                        </div>
                    </div>
                </div>
            </div>






            {/*  seven September  container */}

            <div className="container-fluid calendar_cont">
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <img src={calimg7} alt="" className='w-100 m-2 rounded-3' />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h3 className='month_title'>September</h3>

                        <div className="strip_one">
                            <span>Endless summer party</span>
                            <span>07.09.2024</span>
                            <span>€ 18</span>
                            <span>Available</span>
                            <span>
                                <Link to="/trip/vanlife" className='cal_searchbtn'>Book Now</Link>
                            </span>
                        </div>

                        <div className="strip_two">
                            <span>Wad n Feest</span>
                            <span>26.09.-29.09.2024 </span>
                            <span>€ 399</span>
                            <span>Last Spots</span>
                            <span>
                                <Link to="/trip/vanlife" className='cal_searchbtn2'>Book Now</Link>
                            </span>
                        </div>

                        <div className="strip_one">
                            <span>Camper roadtrip</span>
                            <span>20.09.-30.09.2024</span>
                            <span>€ 379</span>
                            <span>Available</span>
                            <span>
                                <Link to="/trip/vanlife" className='cal_searchbtn'>Book Now</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}

export default Calendar
