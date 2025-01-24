import React from 'react'


import imgleft from '../../Images/whykiteimg.png'

import img from '../../Images/surf_img4.png'
import img2 from '../../Images/surf_img6.png'
import img3 from '../../Images/surf_img12.png'
import img4 from '../../Images/surf_img8.png'
import config from '../../config/config'

const Whykiteactive = ({data}) => {
    return (
        <div>

            <div className="container">
                <h2 className='text-center surf_text text_span mt-5'>{data?.whySectionHeading}</h2>

                <div className="row">
                    <div className="col-lg-7">
                        <div className='text-center'>
                            <img src={`${config.API_BASE_URL}${data?.whySectionImg}`} alt="" className='why_K_left_img' />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className=''>
                            <div className="row why_K_right_div mt-5">
                                <div className="col-3">
                                    <img src={`${config.API_BASE_URL}${data?.whyimg1}`} alt="" className=' whykite_sm_img' />
                                </div>
                                <div className="col-9">
                                    <h3 className='why_k_heading'>{data?.whytitle1}</h3>
                                    <p className='why_k_para'>{data?.whypara1}</p>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className="row why_K_right_div">
                                <div className="col-3">
                                    <img src={`${config.API_BASE_URL}${data?.whyimg2}`} alt="" className=' whykite_sm_img' />
                                </div>
                                <div className="col-9">
                                    <h3 className='why_k_heading'>{data?.whytitle2}</h3>
                                    <p className='why_k_para'>{data?.whypara2}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="row why_K_right_div">
                                <div className="col-3">
                                    <img src={`${config.API_BASE_URL}${data?.whyimg3}`} alt="" className=' whykite_sm_img' />
                                </div>
                                <div className="col-9">
                                    <h3 className='why_k_heading'>{data?.whytitle3}</h3>
                                    <p className='why_k_para'>{data?.whypara3}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row why_K_right_div">
                                <div className="col-3">
                                    <img src={`${config.API_BASE_URL}${data?.whyimg4}`} alt="" className='whykite_sm_img' />
                                </div>
                                <div className="col-9">
                                    <h3 className='why_k_heading'>{data?.whytitle4}</h3>
                                    <p className='why_k_para'>{data?.whypara3}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Whykiteactive
