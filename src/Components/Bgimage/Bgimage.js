import React from 'react'

import bgimg from '../../Images/bg_img.jpg';

const Bgimage = () => {
    return (
        <div>


            <div className="container-fluid mt-5 ">
                <div className="row ">
                    <div className="col m-0 p-0">
                        <div className="bg_image2" style={{ backgroundImage: `url(${bgimg})` }}>
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                    <p className='bg_text'>Sustainability</p>
                                        <h1 className='bg_heading'>
                                        2011, KiteActive wass born
                                        </h1>
                                        <p className="bg_para">
                                        KiteActive has started organizing kite & sailing trips along the Wadden Islands. The combination of a week of intensive kitesurfing (lessons) and a week’s holiday in a place with the ingredients: wind, beach, water and a chill atmosphere turned out to be a good concept. Our passion for traveling and kitesurfing has ensured that we have visited many kitespots in the world and are still looking for the best destinations to (learn to) kitesurf. Thanks to the experiences and enthusiasm of our instructors, KiteActive has continued to grow.
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bgimage
