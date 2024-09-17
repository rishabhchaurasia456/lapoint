import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import vedio from "../../Images/website.filmpje.tarifa.mp4"
import img1 from "../../Images/level-icon-6.png"
import img2 from "../../Images/community-icon.png"
import img3 from "../../Images/level-icon-4.png"
import img4 from "../../Images/review-real-icon-2.png"
import gall_img1 from '../../Images/JordyBrouns-KiteActive-Sicily2022-239-800x600-1.jpg'
import gall_img2 from '../../Images/2S1A1600-scaled-e1724058576388.jpg'
import gall_img3 from '../../Images/kitecenter-zanzibar-edited-2046x2048-1-1200x900-1.webp'
import gall_img4 from '../../Images/img3.png'
import Kitespots from './TripComponent/Kitespots'
import Packages from './TripComponent/Packages'
import Accomodation from './TripComponent/Accomodation'
import Included from './TripComponent/Included'
import Review from './TripComponent/Review'
import Hosted from './TripComponent/Hosted'
import Activites from './TripComponent/Activites'

const Trip = () => {

    const [activeTab, setActiveTab] = useState('KITESPOTS');

    const handleButtonClick = (tabName) => {
        setActiveTab(tabName);
    };


    return (
        <div>
            <Helmet>
                <title>KiteActive</title>
                <meta name="description" content="This is the home page of your website where you can find information about surfcamps, lifestyle, and more." />
                <meta name="keywords" content="surfcamp, lifestyle, adventure, activities, reviews" />
                <link rel="canonical" href="https://danstring.co.in/kiteactive/" />
            </Helmet>
            <div>
                <div className="video-container">
                    <video autoPlay loop muted className="background-video">
                        <source src={vedio} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="container">
                    <div className="text-center mb-2 my-3 tab_scroll">
                        <button className="trip_tabs" onClick={() => handleButtonClick('KITESPOTS')}>
                            <p>KITESPOTS</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('PACKAGES')}>
                            <p>PACKAGES</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('ACCOMMODATION')}>
                            <p>ACCOMMODATION</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('INCLUDED')}>
                            <p>INCLUDED</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('REVIEWS')}>
                            <p>REVIEWS</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('HOSTED_BY')}>
                            <p>HOSTED BY</p>
                        </button>
                        <button className="trip_tabs" onClick={() => handleButtonClick('ACTIVITIES')}>
                            <p>ACTIVITIES</p>
                        </button>
                    </div>
                </div>
                {/* </div> */}
                <div className="container-fluid">
                    <div className="output-container">
                        {/* <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="my-4">
                                    <h4 className="h2">{featureData.head}</h4>
                                    <div className="w-50 my-3">
                                        <div className="card w-25" style={{ borderBottom: "3px solid #2F4590" }}></div>
                                    </div>
                                    <p className='fs-5'>{featureData.text}</p>
                                    <h5 className="mt-4">POPULAR FEATURES</h5>
                                    <div className="row">
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <p className='fs-5'><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp; Contact Management</p>
                                            <p className='fs-5'><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp; Contact Scoring</p>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <p className='fs-5'><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp; Segmentation</p>
                                            <p className='fs-5'><i class="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp; Tag Management</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <img id="changeImage" className="mx-auto d-block w-100 p-2 my-3" src={featureData.imageSrc} alt="" />
                            </div>
                        </div> */}
                        <div className="row">
                            <p className='trip_heading'>Kitesurf heaven on earth Karibu zanzibar</p>
                            <p className='trip_para'>Dakhla is located on the edge of the Sahara with a huge flat water lagoon near the Atlantic Ocean. If you are looking for a kitesurfing destination with guaranteed wind and the flattest water you have ever seen, Dakhla is the right place for you. Dakhla has enormous wind reliability, a fantastic culture and great weather. The birds and dolphins will sail side by side with you. Everyone will enjoy with you when you talk about your kitesurfing adventures while enjoying a drink after your kitesurfing session! After a half-hour drive with the 4×4 you will have one of the most beautiful right-hand waves in the world. It is not without reason that they regularly organize the World Cup wave event here.  </p>
                        </div>
                        <div className="row">
                            {/* <div class="col-md-3">
                                <img src={img1} width="100%" alt=""/>
                            </div>
                            <div class="col-md-3">
                                <img src={img2} width="100%" alt=""/>
                            </div>
                            <div class="col-md-3">
                                <img src={img3} width="100%" alt=""/>
                            </div>
                            <div class="col-md-3">
                                <img src={img4} width="100%" alt=""/>
                            </div> */}
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div className="col">
                                                <div className="img_spacing">
                                                    <img src={img1} width="100%" alt="" />
                                                    <p className='img_head'>Early bird discount</p>
                                                    <p className='img_para'>Book before 1 November and get 10% discount</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="img_spacing">
                                                    <img src={img2} width="100%" alt="" />
                                                    <p className='img_head'>Join our community</p>
                                                    <p className='img_para'>7-15 kiters / week Suited for: couples, solo, family, singles</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div className="col">
                                                <div className="img_spacing">
                                                    <img src={img3} width="100%" alt="" />
                                                    <p className='img_head'>Surf skill</p>
                                                    <p className='img_para'>Suited for all levels. Especially Level 1 - beginners!</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="img_spacing">
                                                    <img src={img4} width="100%" alt="" />
                                                    <p className='img_head'>Only stars</p>
                                                    <p className='img_para'>Read the reviews of our travellers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container pt-5">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                        <img src={gall_img1} alt="" className='surf_img1' />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                                    <div className="row">
                                        <div className="col-lg-6">
                                                <img src={gall_img2} alt="" className=' surf_img2' />
                                        </div>
                                        <div className="col-lg-6 ">
                                            <div className='p-1'>
                                                    <img src={gall_img3} alt="" className=' surf_img3' />
                                            </div>
                                            <br />

                                            <div className='p-1'>
                                                    <img src={gall_img4} alt="" className=' surf_img4' />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {activeTab === 'KITESPOTS' && <Kitespots />}
                            {activeTab === 'PACKAGES' && <Packages />}
                            {activeTab === 'ACCOMMODATION' && <Accomodation />}
                            {activeTab === 'INCLUDED' && <Included />}
                            {activeTab === 'REVIEWS' && <Review />}
                            {activeTab === 'HOSTED_BY' && <Hosted />}
                            {activeTab === 'ACTIVITIES' && <Activites />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trip