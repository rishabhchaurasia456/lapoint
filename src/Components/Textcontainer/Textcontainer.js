import React from 'react'

const Textcontainer = () => {
    return (
        <div>



            <div className="container d-flex flex-column align-items-center justify-content-center text_container">
                <div className="row">
                    <div className="col text-center">
                        <small className='text_small '>Kiteactive</small>
                        <h1 className=" surf_text"><span className='text_span'>What it’s all about</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className='text_para'>
                        In 2011 we expanded our destinations to include Tarifa, Brazil and in 2012 Zanzibar. <br /> This was followed by many other unique destinations. Each location has its own <br /> advantages from low-budget to ultimate experience. But what is always the same  <br />with every holiday is the unique location, good kite spot, relaxed atmosphere,  <br />active no-wind options and our experienced instructors.
                        </p>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                {/* first row  */}
                <div className="row">
                    <div className="col-lg-6 p-2">
                        <div className='p-2'>
                            <h2 className=" text_head">
                            The <span className='text_span'>  Heartbeat</span> of KiteActive
                            </h2>
                            <p className='text_para'>KiteActive’s mission is to give you the best kite/holiday. We offer kitesurfing lessons and clinics in the most beautiful places in the world. Thanks to our professional team of instructors, many locations have already been discovered and KiteActive has made a selection of the best destinations for you. By making competitive deals with accommodations at an early stage, you can always stay cheaply through us at the most beautiful locations directly or close to the beach.</p>
                        </div>

                    </div>
                    <div className="col-lg-6 p-2">
                        <div className='p-2'>
                            <h2 className=" text_head">
                            The KiteActive <span className="text_span"> Path to Wellness</span>
                            </h2>
                            <p className='text_para'> From 2015 onwards we started to focus on every kitesurfer, from beginner to advanced, from the adventurous kiter who wants to travel alone to someone who wants to join a fun group. KiteActive – By kitesurfers, for kitesurfers. both on the surfboard and on the yoga mat and be more aware of your mind and body connection. Immersed in nature, the ocean and good vibes, we have the perfect setup for a feelgood week that definitely will give you a positive boost.</p>

                        </div>
                    </div>
                </div>
                <br />
                {/* Second row  */}
                <div className="row mt-4">
                    <div className="col-lg-6 p-2">
                        <div className='p-2'>
                            <h2 className=" text_head">
                            Living the <span className='text_span'>KiteActive Lifestyle</span>
                            </h2>
                            <p className='text_para'>A professional and passionate team, on the beach and behind the computer. We organize your kitesurfing trip down to the last detail! We look forward to meet you and to have a great holiday together!. Learn to read the ocean better, get more comfortable in the line-up and get individual feedback on the areas you need to improve in your surfing. </p>
                        </div>

                    </div>
                    <div className="col-lg-6 p-2">
                        <div className='p-2'>
                            <h2 className=" text_head">
                            The KiteActive <span className="text_span">Experience</span>
                            </h2>
                            <p className='text_para'>Let’s unite our powers and be partners!  We have partner programs for everyone. Do you have a kiteschool? A travel agency? Or are you just a kiter who thinks he can sell kitesurf trips? Together we can move mountains, create a synergy and build a stronger brand. </p>

                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Textcontainer
