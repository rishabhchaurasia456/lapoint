import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../Images/logo-kiteactive.svg';


const Formheader = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };


    return (
        <div>
            <div className="container-fluid pt-3" style={{ backgroundColor: 'black' }}>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="row">
                            {/* Back button col */}
                            <div className="col-4" onClick={handleBackClick}>
                                <i className='fa fa-long-arrow-left left_icon'></i>
                            </div>
                            {/* Logo col */}
                            <div className="col-4">
                                <NavLink to="/" className="navbar-brand">
                                    <img src={logo} alt="logo" className="img-fluid w-75" />
                                </NavLink>
                            </div>

                            {/* question mark popup btn */}
                            <div className="col-4">
                                <div className='text-center'>
                                    <i className="fa fa-question-circle-o que_mark" onClick={togglePopup}></i>


                                    {showPopup && (
                                        <div className="popup-box">
                                            <p className='fw-bold '>Need help? Something not working? <i className='fa fa-close mx-2 px-2 close_btn' onClick={togglePopup} ></i></p>
                                            <p>
                                                If you have any issues with the booking or the payment, please contact us on  <Link to="https://wa.me/31850091325" target="_blank">WhatsApp +31 850091325</Link> or email us at <Link to="mailto:info@kiteactive.com">info@kiteactive.com</Link> so we can help you out. No matter what your problem is, we have the answer!!
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Formheader;
