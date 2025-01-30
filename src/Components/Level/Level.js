import React, { useEffect, useState } from 'react';

import img1 from "../../Images/level1.svg";
import img2 from "../../Images/level2.svg";
import img3 from "../../Images/level3.svg";
import img4 from "../../Images/level4.svg";
import { NavLink } from 'react-router-dom';
import config from '../../config/config';
import axios from 'axios';

const Level = ({ selectedLanguage }) => {

    const [homeData, setHomeData] = useState(null)
    useEffect(() => {
        axios
            .post(`${config.API_BASE_URL}/api/admin/get_home`)
            .then((response) => {
                setHomeData(response.data);
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-5 pt-5 p-3">
                    <div className='Level_cont text-center col-12'>
                        <h1 className='Level_cont_head'>
                            {homeData?.levelHeading}
                        </h1>
                        <p className='Level_cont_para'>{homeData?.levelSubHeading}</p>
                    </div>

                    {/* {Card.map((item, index) => ( */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="text-center m-1 p-4 level_card border-1">
                            {/* Background data */}
                            <div>
                                <img src={`${config.API_BASE_URL}${homeData?.levelimg1}`} alt="" className='leve_icon_img' />
                            </div>
                            <div>
                                <NavLink to="#" className="nav-link level_card_text">{homeData?.leveltitle1}</NavLink>
                            </div>
                            <div>
                                <small className='level_small_text'>{homeData?.levelpara1}</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="text-center m-1 p-4 level_card border-1">
                            {/* Background data */}
                            <div>
                                <img src={`${config.API_BASE_URL}${homeData?.levelimg2}`} alt="" className='leve_icon_img' />
                            </div>
                            <div>
                                <NavLink to="#" className="nav-link level_card_text">{homeData?.leveltitle2}</NavLink>
                            </div>
                            <div>
                                <small className='level_small_text'>{homeData?.levelpara2}</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="text-center m-1 p-4 level_card border-1">
                            {/* Background data */}
                            <div>
                                <img src={`${config.API_BASE_URL}${homeData?.levelimg3}`} alt="" className='leve_icon_img' />
                            </div>
                            <div>
                                <NavLink to="#" className="nav-link level_card_text">{homeData?.leveltitle3}</NavLink>
                            </div>
                            <div>
                                <small className='level_small_text'>{homeData?.levelpara3}</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="text-center m-1 p-4 level_card border-1">
                            {/* Background data */}
                            <div>
                                <img src={`${config.API_BASE_URL}${homeData?.levelimg4}`} alt="" className='leve_icon_img' />
                            </div>
                            <div>
                                <NavLink to="#" className="nav-link level_card_text">{homeData?.leveltitle4}</NavLink>
                            </div>
                            <div>
                                <small className='level_small_text'>{homeData?.levelpara4}</small>
                            </div>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            </div>

        </div>
    );
}

export default Level;
