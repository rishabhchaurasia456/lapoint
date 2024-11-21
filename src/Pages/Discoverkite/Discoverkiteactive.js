import React from 'react'

import discoveimg from '../../Images/img3.webp'
import whykiteimg2 from '../../Images/Footerimg/footer1.webp'
import philosophyimg from '../../Images/Footerimg/footer2.jpg'

const Discoverkiteactive = () => {
    return (
        <div>



            <div className="container-fluid w_K_sec mt-0 pt-0">
                <div className="row" >
                    {/* content div  */}
                    <div className="col-lg-6 p-4">
                        <div className='mt-4'>
                            <h5 className="school_heading">2011, KiteActive wass born</h5>
                            <div className='mt-4'>
                                <p className='school_para'>KiteActive has started organizing kite & sailing trips along the Wadden Islands. The combination of a week of intensive kitesurfing (lessons) and a week’s holiday in a place with the ingredients: wind, beach, water and a chill atmosphere turned out to be a good concept. Our passion for traveling and kitesurfing has ensured that we have visited many kitespots in the world and are still looking for the best destinations to (learn to) kitesurf. Thanks to the experiences and enthusiasm of our instructors, KiteActive has continued to grow. In 2011 we expanded our destinations to include Tarifa, Brazil and in 2012 Zanzibar. This was followed by many other unique destinations. Each location has its own advantages from low-budget to ultimate experience. </p>
                            </div>

                        </div>
                    </div>

                    {/* img col  */}
                    <div className="col-lg-6">
                        <div className='text-center'>
                            <img src={whykiteimg2} alt="" className='w_K_img w-100 ' />
                        </div>
                    </div>
                </div>
            </div>



            {/* Our philosophy Section  */}
            <div className='container-fluid mt-5 pt-5'>
                <div className='row mt-5 m-auto' >
                    <div className='col-md-6'>
                        <div className="life_style_div">
                            <div className="">
                                <h1 className="lifestyle_heading">
                                    Our philosophy
                                </h1>
                            </div>
                            <div className="">
                                <h1 className="lifestyle_para">
                                    <p>
                                        KiteActive’s mission is to give you the best kite/holiday. We offer kitesurfing lessons and clinics in the most beautiful places in the world. Thanks to our professional team of instructors, many locations have already been discovered and KiteActive has made a selection of the best destinations for you. By making competitive deals with accommodations at an early stage, you can always stay cheaply through us at the most beautiful locations directly or close to the beach. From 2015 onwards we started to focus on every kitesurfer, from beginner to advanced, from the adventurous kiter who wants to travel alone to someone who wants to join a fun group. KiteActive – By kitesurfers, for kitesurfers.


                                    </p>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='lifestyle_div text-center'>
                            <img src={philosophyimg} className='lifestyle w-75' alt="lifestyle" />
                        </div>
                    </div>

                </div>

            </div>




            <div className='container-fluid mt-5 pt-5'>
                <div className='row mt-5' >
                    <div className='col-md-6'>
                        <div className='lifestyle_div text-center'>
                            <img src={discoveimg} className='lifestyle w-75' alt="lifestyle" />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="life_style_div">
                            <div className="">
                                <p className='lifestyle_text'>
                                    Meet Our Team
                                </p>
                            </div>
                            <div className="">
                                <h1 className="lifestyle_heading">
                                    The kiteactive way of life
                                </h1>
                            </div>
                            <div className="">
                                <h1 className="lifestyle_para">
                                    <p>
                                        A professional and passionate team, on the beach and behind the computer. We organize your kitesurfing trip down to the last detail! We look forward to meet you and to have a great holiday together!

                                        Kiteactive for Veventures! Immerse yourself in a realm of excitement and discovery with Kiteactive. Whether you're looking for exhilarating surf camps, peaceful yoga retreats, or unforgettable travel experiences, we provide the ideal mix of adventure and tranquility. Our thoughtfully designed itineraries enable you to connect with nature, tackle new challenges, and forge lasting memories. Join us to uncover the extraordinary adventures that await, as you ride the waves and explore stunning landscapes. Your next unforgettable journey starts here!
                                    </p>
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Discoverkiteactive
