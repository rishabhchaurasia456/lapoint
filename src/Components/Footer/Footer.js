import React from 'react'
import { Link } from 'react-router-dom'

import footerlogo from '../../Images/logo-kiteactive.svg'


const Footer = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row footer_headcontainer pt-4'>

                    <div className='col-md-7 footer_headcontainer_text p-4'>
                        <p>Join our Membership Community and get 30€ off on your next surf trip!</p>
                    </div>
                    <div className='col-md-5 m-auto'>
                        <div class="input-group mb-3 w-75">
                            <input type="text" class="form-control p-2" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary emailbtn" type="button">Button</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="footer footer_bg">
                        <section class="py-4 py-md-5 py-xl-8">
                            <div class="container-fluid overflow-hidden">
                                <div class="row gy-4 gy-lg-0 justify-content-xl-between">

                                    {/* col one  */}
                                    <div class="col-12 col-md-4 col-lg-4 col-xl-3 p-0 m-0 mx-2">
                                        <div class="widget">
                                            <Link to="/demo/gfastreact/">
                                                <img src={footerlogo} alt="Logo" className='footerlogo' />
                                            </Link>
                                        </div>

                                        <div className='text-light'>
                                            <p className='mt-4'>Join the KiteActive community! Discover the best kitespots in the world and make new friends! Together with our team we will make sure you wil have the adventure of a lifetime!</p>
                                        </div>


                                    </div>

                                    {/* Col two  */}
                                    <div class="col-12 col-md-4 col-lg-2 col-xl-2 text-light p-0 m-0">
                                        <div class="">
                                            <h4 class="fw-bold mb-4">KiteActive World</h4>
                                            <ul class="list-unstyled">
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link"> <i className='fa fa-angle-double-right me-2'></i>Kite Camps</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Discover KiteActive</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>KiteActive Team</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Kitesurfing Packages</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Become Teamrider</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-2 col-xl-2 text-light p-0 m-0">
                                        <div class="">
                                            <h4 class="fw-bold mb-4">KiteActive World</h4>
                                            <ul class="list-unstyled">
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link"> <i className='fa fa-angle-double-right me-2'></i>About Us</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Booking & Payment</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Privacy Policy</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Terms & Condition</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Cookies Policy</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    {/* col three  */}
                                    <div class="col-12 col-md-4 col-lg-4 col-xl-3 text-light m-0 p-0">
                                        <div class="">
                                            <h4 class="fw-bold mb-4 mx-3">Get Contact</h4>
                                            <p>For kitesurfing trips and inquiries, reach out to us! Contact our team today for the ride of your life!</p>
                                            <ul class="list-unstyled m-0 p-0">
                                                <li class="mb-3" >

                                                </li>
                                                <li class="mb-3">

                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                        {/* <!-- Copyright - Section --> */}
                        <div className="container-fluid p-3">
                            <div className="row border-top">
                                <div className="col">
                                    <div class="copyright text-center mt-3">
                                        &copy; KiteActive™ – Travel brand since 2011
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* copyright end  */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer