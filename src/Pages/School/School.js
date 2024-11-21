import React from 'react'
import {  NavLink } from 'react-router-dom';

import '../../Pages/Pages.css';
import headerbackimg from '../../Images/schoolbanner.png'
import whykiteimg from '../../Images/schoolimg2.png'
import whykiteimg2 from '../../Images/schoolimg3.png'

import cantimg from '../../Images/schoolimg1.png'


import team1 from '../../Images/team1.jpg'
import team2 from '../../Images/team2.jpg'
import team3 from '../../Images/team3.jpg'
import team4 from '../../Images/team4.jpg'
import team5 from '../../Images/team5.jpg'
import team6 from '../../Images/team6.jpg'
import team7 from '../../Images/team7.jpg'
import Level from '../../Components/Level/Level';


const School = ({ selectedLanguage }) => {
    return (
        <div>
            {/* banner div  */}
            <div className="page_cont">
                <img src={headerbackimg} className='headerbackimg' alt="" />
            </div>

            {/* text_div  */}
            <div className="container d-flex flex-column align-items-center justify-content-center surf_container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className=" surf_text"> <span className='text_span'> Join the KiteActive community</span></h1>
                        <p className='surf_para'>
                            With KiteActive we do things a little bit different. After more then 15 years of teaching we know that you can not learn kitesurfing in 1 afternoon. Our philosophy is that progression comes when you repeat the process on a steady basis ( a few days in a row) and that it is much more fun to learn something new together than alone! That is why we are focused on specialized learning camps worldwide on the best kite spots with a wind guarantee! So you can spend lots of hours and focus yourself on mastering this new skill!
                        </p>
                    </div>
                </div>
            </div>


            {/* Why kiteactive container  */}


            <div className="container-fluid w_K_sec">
                <div className="row" >
                    {/* img col  */}
                    <div className="col-lg-6">
                        <div className=' text-center'>
                            <img src={whykiteimg} alt="" className='w_K_img' />
                        </div>
                    </div>

                    {/* content div  */}
                    <div className="col-lg-6 ">
                        <div className='mt-4'>
                            <h3 className="school_heading"> Why KiteActive?</h3>
                            <div className='mt-4'>
                                <ul>
                                    <li className='mt-2 school_para'>Only perfect kitespots to make progress</li>
                                    <li className='mt-2 school_para'>Find your focus! Dedicated learning weeks!</li>
                                    <li className='mt-2 school_para'>Wind guarantee so you learn kitesurfing 3 x as fast!</li>
                                    <li className='mt-2 school_para'>We have our own customized lesson module</li>
                                    <li className='mt-2 school_para'>A very professional and enthusiastic team of kite experts!</li>
                                    <li className='mt-2 school_para'>Only with the best material</li>
                                    <li className='mt-2 school_para'>Learning together with like-minded people is more fun! right?</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* con't Wait section  */}
            <div className="container mt-5 m-auto">
                <div className="row pt-4">
                    {/* text col  */}
                    <div className="col-lg-6">
                        <p className="school_heading mt-3"> <span className='text_span'>Can’t wait?</span></p>
                        <h5 className="school_para    ">Start your lesson now <span className='text_span'>for free</span> at 1 of our locations in Holland!</h5>
                        {/* <button type='button' className='storiesbtn'>more info</button> */}
                        <span className="text_span">
                            <NavLink className="nav-link fw-bold fs-5">Read More</NavLink>
                        </span>
                    </div>
                    {/* img col  */}
                    <div className="col-lg-6">
                        <div className='text-center'>
                            <img src={cantimg} alt="" className='w_K_img' />
                        </div>
                    </div>
                </div>
            </div>


                <div className="container-fluid w_K_sec">
                    <div className="row" >
                        {/* img col  */}
                        <div className="col-lg-6">
                            <div className='text-center'>
                                <img src={whykiteimg2} alt="" className='w_K_img ' />
                            </div>
                        </div>

                        {/* content div  */}
                        <div className="col-lg-6 p-4">
                            <div className='mt-4'>
                                <h5 className="school_heading">When we say we are professional we mean it</h5>
                                <div className='mt-4'>
                                    <p className='school_para'>We bring years of expertise from our team into an engaging and comprehensive online learning environment. Here, you'll discover a complete course tailored to your level, with clear guidance on the steps to follow for effective progress. Our platform includes slow-motion videos of exercises, detailed explanations, interactive quizzes, and practical assignments to solidify your understanding. Additionally, you'll gain access to bonus tips, downloadable resources, and a community forum where you can connect with peers and instructors for support and feedback. </p>
                                </div>

                                <NavLink to="/kitecamp" className=' mx-0 storiesbtn' >Join the kiteactive  community</NavLink>

                            </div>
                        </div>
                    </div>
                </div>



            {/* our team Section  */}


            <div className="container d-flex flex-column align-items-center justify-content-center surf_container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className=" surf_text"> <span className='text_span'> Meet Our Team</span></h1>
                        <p className='surf_para'>
                            We are very proud of our team of kitesurf enthusiasts. They are all kitesurf trainers for years and have so much experience which they want to share with you. When you join KiteActive there is no rush, we have 1 week, you have 1 instructor, together you will rock it out!
                        </p>
                    </div>
                </div>
            </div>
            {/* images container */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='text-center'>
                            <img src={team1} alt="" className='t_M_img' />
                            <img src={team2} alt="" className='t_M_img ' />
                            <img src={team3} alt="" className='t_M_img' />
                            <img src={team4} alt="" className='t_M_img' />
                            <img src={team5} alt="" className='t_M_img' />
                            <img src={team6} alt="" className='t_M_img' />
                            <img src={team7} alt="" className='t_M_img' />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid w_K_sec mb-0 pb-0">
                <div className="row">
                    <div className="col">
                        <div>
                            <h2 className='school_para text-center mt-0 p-5'>
                                We teach every level because there is so much to learn for everyone!
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <Level selectedLanguage={selectedLanguage} />

        </div>
    )
}

export default School
