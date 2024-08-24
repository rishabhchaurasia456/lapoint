import React from 'react'

import bgimg from '../../Images/Underwater_shot_of_surfer_sitting_on_surfboard.jpg';

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
                                    <div className="col-lg-6"></div>
                                    <div className="col-lg-6">
                                        <p className='bg_text'>Sustainability</p>
                                        <h1 className='bg_heading'>
                                        The beach is our home. We are leaving it better than we found it.
                                        </h1>
                                        <p className="bg_para">
                                        We have made a commitment to our ocean, beaches and community. They are our playground, our home and our livelihood. We are going to leave them better than we found them. That means that all our employees, friends and guests helps out with recycling and taking other actions for the environment. Each week there are beach cleaning and recycling activities to ensure that our home stays the way it was supposed to be.
                                        </p>
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
