import React from 'react'

import lp1 from '../../Images/F_L_Maldives_LP.jpg'
import lp2 from '../../Images/F_L_Maldives_lp_2.jpg'

const LIfeStyle = () => {
    return (
        <div>
            <div className='container mt-5  pt-5 '>
                <div className='row mt-3'>
                    <div className='col-md-6'>
                        <div className='lifestyle' style={{ backgroundImage: `url(${lp2})` }}></div>
                    </div>
                    <div className='col-md-6'>
                        <div className="life_style_div">
                            <div className=" ">
                                <p className='lifestyle_text'>
                                    Lifestyle
                                </p>
                            </div>

                            <div className="">
                                <h1 className="lifestyle_heading">
                                    The Lapoint way of life
                                </h1>
                            </div>

                            <div className="">
                                <h1 className="lifestyle_para">
                                    At Lapoint, we’re all about turning our passion for surfing into unforgettable adventures. Our surf trips are one-of-a-kind, as we mix surfing with bucket-list experiences, social activities and local flavour.<br /><br />
                                    We believe surfing is more than a sport – it’s a lifestyle – and we want you to experience it at some of the most beautiful surf destinations across the planet. And in the end, we want you to be left not only with better surf skills, but also memories for life, new friends and a feeling that every day should be like this.
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-6'>
                        <div className="life_style_div">
                            <div className=" ">
                                <p className='lifestyle_text'>
                                    Surfing
                                </p><br />
                            </div>
                            <div className="">
                                <h1 className="lifestyle_heading">
                                    The best sport in the world
                                </h1>
                            </div>
                            <div className="">
                                <h1 className="lifestyle_para">
                                    We love sharing our passion for surfing, as we truly believe it’s the best sport in the world! Surfing gives you an incredible feeling of freedom and triggers real stoke that keeps you happy all throughout the day!<br /><br />
                                    Connecting with the ocean, being immersed in the moment and embracing outdoor living are other things we just love about it. We teach you how to surf the Lapoint way, together with local, experienced instructors who know just which breaks to head out to. You will be surfing in either levels 1, 2, 3 or with guiding. We got you covered for the ultimate surf holiday!
                                </h1>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className='lifestyle' style={{ backgroundImage: `url(${lp1})` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LIfeStyle