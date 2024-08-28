import React from 'react'

import lifestyleimg2 from '../../Images/kitecenter-zanzibar-edited-2046x2048-1-1200x900-1.webp'
import lifestyleimg1 from '../../Images/img3.png'


const LIfeStyle = () => {
    return (
        <div>
            <div className='container mt-5  pt-5 '>
                <div className='row mt-3'>
                    <div className='col-md-6'>
                        <div className='lifestyle_div'>
                        <img src={lifestyleimg1} className='lifestyle' alt="lifestyle" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="life_style_div">
                            <div className=" ">
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

                                        A professional kite team, on the beach and behind the computer. We organize your kitesurfing trip down to the last detail. We look forward to meeting you and having a great time together!
                                    </p>

                                    Whether you're a beginner looking to learn the basics or an experienced kitesurfer seeking the thrill of new adventures, our team is here to support you every step of the way. From selecting the best locations with optimal wind conditions to arranging accommodations and equipment, we handle it all.
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className="life_style_div">
                            <div className=" ">
                                <p className='lifestyle_text'>
                                Why KiteActive?
                                </p><br />
                            </div>
                            <div className="">
                                <h1 className="lifestyle_heading">
                                    The best sport in the world
                                </h1>
                            </div>
                            <div className="">
                                <h1 className="lifestyle_para">
                                Because it's the best choice! With KiteActive you travel with a group of like-minded people. During all our kitesurfing camps & events we focus on progression and fun!<br /><br />
                                    Connecting with the ocean, being immersed in the moment and embracing outdoor living are other things we just love about it. We teach you how to surf the Lapoint way, together with local, experienced instructors who know just which breaks to head out to. You will be surfing in either levels 1, 2, 3 or with guiding. We got you covered for the ultimate surf holiday!
                                </h1>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        {/* <div className='lifestyle' style={{ backgroundImage: `url(${lp1})` }}></div> */}
                        <img src={lifestyleimg2} className='lifestyle' alt="lifestyle" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LIfeStyle