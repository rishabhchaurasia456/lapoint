import React from 'react'


import imgleft from '../../Images/whykiteimg.png'

import img from '../../Images/surf_img4.png'
import img2 from '../../Images/surf_img6.png'
import img3 from '../../Images/surf_img12.png'
import img4 from '../../Images/surf_img8.png'
const Whykiteactive = () => {
    return (
        <div>

            <div className="container">
                <h2 className='text-center surf_text text_span mt-5'>Why kiteactive?</h2>

                <div className="row">
                    <div className="col-lg-7">
                        <div className='text-center'>
                            <img src={imgleft} alt="" className='why_K_left_img' />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className=''>
                            <div className="row why_K_right_div mt-5">
                                <div className="col-3">
                                    <img src={img} alt="" className=' whykite_sm_img' />
                                </div>
                                <div className="col-9">
                                    <h3 className='why_k_heading'>Secure booking & payment</h3>
                                    <p className='why_k_para'>Your booking details and payments are safe with us</p>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className="row why_K_right_div">
                                <div className="col-3">
                                    <img src={img2} alt="" className=' whykite_sm_img' />
                                </div>
                                <div className="col-9">
                                    <h3 className='why_k_heading'>Read the adventures of our travellers</h3>
                                    <p className='why_k_para'>We will guarantee you have fun with us.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="row why_K_right_div">
                                <div className="col-3">
                                    <img src={img3} alt="" className=' whykite_sm_img' />
                                </div>
                                <div className="col-9">
                                    <h3 className='why_k_heading'>Make new kite friends!</h3>
                                    <p className='why_k_para'>Join the KiteActive community! Good vibes ONLY!</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row why_K_right_div">
                                <div className="col-3">
                                    <img src={img4} alt="" className='whykite_sm_img' />
                                </div>
                                <div className="col-9">
                                    <h3 className='why_k_heading'>A selection of the best kitespots in the world</h3>
                                    <p className='why_k_para'>Find, compare and book your ideal kitesurfing holiday</p>
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
