import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import popimg1 from '../../../Images/popupimg1.png'
import popimg2 from '../../../Images/popupimg9.png'
import popimg3 from '../../../Images/popupimg3.png'
import popimg4 from '../../../Images/popupimg4.png'
import popimg5 from '../../../Images/popupimg5.png'
import popimg6 from '../../../Images/popupimg6.png'
import popimg7 from '../../../Images/popupimg7.png'
import popimg8 from '../../../Images/popupimg8.png'
import config from '../../../config/config'
import axios from 'axios'

const Overview = ({ overviewData, tripname, selectedLanguage }) => {

    const [overviewdata, setOverviewData] = useState(null)

    useEffect(() => {
        const fetchOverview = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_trip_overview/${tripname}`);
                console.log(response.data);
                setOverviewData(response.data);
            } catch (error) {
                console.error('Error fetching trip levels:', error);
            }
        };

        fetchOverview();
    }, [tripname]);

    const gall_img1 = `${config.API_BASE_URL}/${overviewdata?.gall[0]}`
    const gall_img2 = `${config.API_BASE_URL}/${overviewdata?.gall[1]}`
    const gall_img3 = `${config.API_BASE_URL}/${overviewdata?.gall[2]}`
    const gall_img4 = `${config.API_BASE_URL}/${overviewdata?.gall[3]}`

    // jsx for popup box ................
    const [showPopup, setShowPopup] = useState(false);

    // Function to toggle popup visibility
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <div className="container d-flex flex-column align-items-center justify-content-center surf_container mt-2 pt-2">
                <div className="row">
                    <div className="col text-center mt-0 pt-0">
                        <h1 className="surf_text text_span fs-1 mt-0 pt-0">
                            {overviewdata?.trip_heading || 'No Heading Available'}
                        </h1>
                        <p className="surf_para fs-5">
                            {overviewdata?.trip_para || 'No Description Available'}
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div className="col">
                                        <div className="img_spacing">
                                            <img src={`${config.API_BASE_URL}/${overviewdata?.img1}`} width="100%" alt="" />
                                            <p className='img_head'>{overviewdata?.img_head1 || 'No Heading Available'}</p>
                                            <p className='img_para'>{overviewdata?.img_para1 || 'No Heading Available'}</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="img_spacing">
                                            <img src={`${config.API_BASE_URL}/${overviewdata?.img2}`} width="100%" alt="" />
                                            <p className='img_head'>{overviewdata?.img_head2 || 'No Heading Available'}</p>
                                            <p className='img_para'>{overviewdata?.img_para2 || 'No Heading Available'}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div className="col">
                                        <div className="img_spacing">
                                            <img src={`${config.API_BASE_URL}/${overviewdata?.img3}`} width="100%" alt="" />
                                            <p className='img_head'>{overviewdata?.img_head3 || 'No Heading Available'}</p>
                                            <p className='img_para'>{overviewdata?.img_para3 || 'No Heading Available'}</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="img_spacing">
                                            <img src={`${config.API_BASE_URL}/${overviewdata?.img4}`} width="100%" alt="" />
                                            <p className='img_head'>{overviewdata?.img_head4 || 'No Heading Available'}</p>
                                            <p className='img_para'>{overviewdata?.img_para4 || 'No Heading Available'}</p>
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
                            <img src={gall_img1} alt="" className='surf_img1' />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={gall_img2} alt="" className=' surf_img2' />
                                </div>
                                <div className="col-lg-6 ">
                                    <div className='p-1'>
                                        <img src={gall_img3} alt="" className=' surf_img3' />
                                    </div>
                                    <br />

                                    <div className='p-1'>
                                        <img src={gall_img4} alt="" className=' surf_img4' />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                {/*  See all photo section POP up Container  */}
                {/* this is popup show for images  */}
                <div>
                    <Link className="nav-link" onClick={togglePopup}>
                        <p className="photo_title text-center">SEE ALL PHOTOS & VIDEOS</p>
                    </Link>

                    {/* Popup Component */}
                    {showPopup && (
                        <div className="popup-overlay scroll-1" onClick={togglePopup}>
                            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                                <i className="fa fa-close  popupclose" onClick={togglePopup}></i>
                                {/* <h2>Shop Popup</h2> */}
                                <div className="popimgs_div">
                                    {overviewdata?.gall?.map((image, index) => (
                                        <img key={index} src={`${config.API_BASE_URL}/${image}`} alt={`Gallery image ${index + 1}`} className="popimg" />
                                    ))}
                                    {/* <img src={popimg1} alt="" className='popimg' />
                                    <img src={popimg2} alt="" className='popimg' />
                                    <img src={popimg3} alt="" className='popimg' />
                                    <img src={popimg4} alt="" className='popimg' />
                                    <img src={popimg5} alt="" className='popimg' />
                                    <img src={popimg6} alt="" className='popimg' />
                                    <img src={popimg7} alt="" className='popimg' />
                                    <img src={popimg8} alt="" className='popimg' /> */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* photo container div end  */}
            </div>
        </div>
    )
}

export default Overview