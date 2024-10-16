import React from 'react'

const Overview = ({overviewData, selectedLanguage}) => {
    return (
        <div>
            <div className="container-fluid mb-5">
                <div className="row ">
                    <p className='trip_heading'>{overviewData.trip_heading[selectedLanguage]}</p>
                    <p className='trip_para text-center'>{overviewData.trip_para[selectedLanguage]}</p>
                </div>
                <div className="row">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div className="col">
                                        <div className="img_spacing">
                                            <img src={overviewData.img1} width="100%" alt="" />
                                            <p className='img_head'>{overviewData.img1_head[selectedLanguage]}</p>
                                            <p className='img_para'>{overviewData.img1_para[selectedLanguage]}</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="img_spacing">
                                            <img src={overviewData.img2} width="100%" alt="" />
                                            <p className='img_head'>{overviewData.img2_head[selectedLanguage]}</p>
                                            <p className='img_para'>{overviewData.img2_para[selectedLanguage]}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div className="col">
                                        <div className="img_spacing">
                                            <img src={overviewData.img3} width="100%" alt="" />
                                            <p className='img_head'>{overviewData.img3_head[selectedLanguage]}</p>
                                            <p className='img_para'>{overviewData.img3_para[selectedLanguage]}</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="img_spacing">
                                            <img src={overviewData.img4} width="100%" alt="" />
                                            <p className='img_head'>{overviewData.img4_head[selectedLanguage]}</p>
                                            <p className='img_para'>{overviewData.img4_para[selectedLanguage]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                            <img src={overviewData.gall_img1} alt="" className='surf_img1' />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={overviewData.gall_img2} alt="" className=' surf_img2' />
                                </div>
                                <div className="col-lg-6 ">
                                    <div className='p-1'>
                                        <img src={overviewData.gall_img3} alt="" className=' surf_img3' />
                                    </div>
                                    <br />

                                    <div className='p-1'>
                                        <img src={overviewData.gall_img4} alt="" className=' surf_img4' />
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

export default Overview