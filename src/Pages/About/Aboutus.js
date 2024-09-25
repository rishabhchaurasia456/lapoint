import React from 'react'
import vedio from "../../Images/website.filmpje.tarifa.mp4"
// import './Pages.css'
import '../../Pages/Pages.css';


//  import bigimg from '../../Images/abimg.png'
import img1 from '../../Images/ab1.png'
import img2 from '../../Images/ab3.png'
import img3 from '../../Images/ab2.png'



import imga1 from '../../Images/ab2_1.png'
import imga2 from '../../Images/ab2_2.png'
import imga3 from '../../Images/ab2_3.png'
import Bgimage from '../../Components/Bgimage/Bgimage';
import { Helmet } from 'react-helmet'


const Aboutus = ({selectedLanguage}) => {
    return (
        <div>


            {/* for seo  */}
            <Helmet>
                <title>KiteActive: Exciting Kite & Sailing Trips Along West Frisian Islands</title>

                <meta name="description" content="Discover KiteActive's thrilling kitesurfing holidays with expert instructors at stunning destinations worldwide. Join us for an unforgettable adventure!" />

                <meta name="keywords" content="kite surfing, kitesurfing trips, kitesurf spots, kite surfing lessons, kitesurfing lessons worldwide, kitesurf vacation, kite travel, kitesurf holiday" />

                <link rel="canonical" href="https://www.kiteactiveventures.com/about"/>
                
            </Helmet>


            {/* vedio container  */}

            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src={vedio} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* About us page  main content start here  */}
            <div className="ab_container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className=" ab_text"> Our essence - Good Times</h1>
                        <p className='ab_para'>
                            At KiteActive, we believe in building a global community of kitesurfers who live and breathe the kiteboarding life. Every trip is designed not only to chase the best winds but to forge lasting connections and friendships that transcend borders. With KiteActive, you're not just embarking on a trip—you're joining a movement that embraces freedom, adventure, and the love of kitesurfing.
                        </p>
                    </div>
                </div>
            </div>

            {/* big img container here  */}

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col">
                        <div className=" bg-image rounded-4">
                            <div className="bg_img_text">
                                The  <br />Kiteactive Story
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OUR mindsed  section  */}
            <div className="ab_container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className=" text-start  mb-3 fs-4 ">Our Mindset</h1>
                        <h1 className=" ab2_text "><span className='text_span'>Be a Friend</span></h1>
                        <p className='ab2_para'>
                            At KiteActive, our mindset revolves around freedom, exploration, and community
                        </p>
                        <p className='ab2_para'>
                            To the Guests, by being cool, and always prepared to go the extra mile when needed.
                        </p>
                        <p className='ab2_para'>
                            Our mindset is about more than just the sport; it’s about living a life of adventure, passion, and authenticity.
                        </p>
                        <p className='ab2_para'>
                            Adventure is in our DNA. We’re constantly seeking out new destinations, fresh experiences, and untamed waters that challenge us to improve, learn, and thrive.
                        </p>
                    </div>
                </div>
            </div>

            {/*  image Section  here  */}

            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga1} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga2} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga3} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* (OUR HISTROY )Life should Component */}

            <div className="ab_container">
                <div className="row">
                    <h1 className='text-center ab_text fw-bold mb-5'>
                        "Life should feel like this every day."
                    </h1>


                    <div className="col text-center">
                        <h1 className=" text-start fs-4 ">Our History</h1>
                        <h1 className=" ab2_text "><span className='text_span'>The orgin of good times</span></h1>
                        <p className='ab2_para'>
                            Are you ready for the ultimate kitesurf experience? Let us take you on a kitetrip like no other, where every moment is packed with excitement, discovery, and the wind at your back. Whether you're here for the adrenaline or the camaraderie, KiteActive is your gateway to an unforgettable kitesurfing journey.
                        </p>
                        <p className='ab2_para'>
                            KiteActive is dedicated to delivering the ultimate kitesurfing holiday, combining thrilling lessons and clinics with stunning global destinations
                        </p>

                        <h1 className=" ab2_text "><span className='text_span'>“Life should feel like this every day.” </span></h1>

                        <p className='ab2_para'>
                            That was the comment that sparked the breakfast conversation that a few months later would lead to Sebastian’s and Alex’s idea of Lapoint. Peter joined the boys shortly after and so did long time friend Göran.
                        </p>
                        <p className='ab2_para'>
                            Our expert team of instructors curates exceptional locations, ensuring you get the best spots to ride the waves.
                        </p>

                    </div>
                </div>
            </div>

            {/* Second image Section  here  */}

            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={img1} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={img2} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={img3} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our last words section */}

            <div className="ab_container">
                <div className="row">
                    <h1 className="text-center fs-4 ">Our last words</h1>
                    <div className="col text-center">
                        <h1 className=" ab_text">I guess we will see you soon?</h1>
                        <p className='ab_para'>
                            At KiteActive, our mission is to craft the ultimate kitesurfing adventure for you, combining top-notch lessons and clinics with some of the world’s most breathtaking locations. We’re committed to providing an unparalleled experience, thanks to our dedicated team of professional instructors who know the best spots for kitesurfing and relaxation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga3} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga2} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga1} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background image component  */}

            <Bgimage selectedLanguage={ selectedLanguage }/>

          
        </div>
    )
}

export default Aboutus
