import React from 'react'

import config from '../../config/config'


const Fourcard = ({ data, selectedLanguage }) => {
    console.log("data fouecard", data)
    return (
        <div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className='text-center fourCard_div'>
                            <img src={`${config.API_BASE_URL}${data?.img1}`} alt="" className='crds_imgs' />
                            <p className='surf_para  fs-6'>{data?.text1}</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='text-center fourCard_div'>
                            <img src={`${config.API_BASE_URL}${data?.img2}`} alt="" className='crds_imgs' />
                            <p className='surf_para fs-6'>{data?.text2}</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='text-center fourCard_div'>
                            <img src={`${config.API_BASE_URL}${data?.img3}`} alt="" className='crds_imgs' />
                            <p className='surf_para fs-6'>{data?.text3}</p>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className='text-center fourCard_div'>
                            <img src={`${config.API_BASE_URL}${data?.img4}`} alt="" className='crds_imgs' />
                            <p className='surf_para fs-6'>{data?.text4}</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fourcard
