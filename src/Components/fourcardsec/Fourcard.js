import React from 'react'

import img1 from '../../Images/surf_img9.png'
import img2 from '../../Images/surf_img2.png'
import img3 from '../../Images/surf_img4.png'
import img4 from '../../Images/surf_img5.png'

const Fourcard = ({ selectedLanguage }) => {
    return (
        <div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className='text-center'>
                            <img src={img1} alt="" className='crds_imgs' />
                            <p className='surf_para fs-6'>160 travellers gave us 4,9 on google!</p>
                        </div>
                    </div>
                    <div className="col-lg-3">

                        <div className='text-center'>
                            <img src={img2} alt="" className='crds_imgs' />
                            <p className='surf_para fs-6'>only the best kite holiday destinations with wind guarantee</p>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='text-center'>
                            <img src={img3} alt="" className='crds_imgs' />
                            <p className='surf_para fs-6'>Make progression! From complete beginner to hardcore kite experts!</p>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className='text-center'>
                            <img src={img4} alt="" className='crds_imgs' />
                            <p className='surf_para fs-6'>meet an awesome kite community and make new friends</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fourcard
