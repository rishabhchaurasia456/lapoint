import React from 'react';

import img1 from "../../Images/level1.svg";
import img2 from "../../Images/level2.svg";
import img3 from "../../Images/level3.svg";
import img4 from "../../Images/level4.svg";
import { NavLink } from 'react-router-dom';
import config from '../../config/config';

const Carddata_head_section = [
    {

        title: {
            en: "All levels are welcome!!",
            gr: "Alle Niveaus sind willkommen!!", // German
            du: "Alle niveaus zijn welkom!!", // Dutch
        },
        subtitle: {
            en: "From Beginner to Pro",
            gr: "Vom Anfänger bis zum Profi", // German
            du: "Van beginner tot pro", // Dutch
        }
    }
];


const Card = [
    {
        link: {
            en: 'Beginner',
            gr: "Anfänger", // German
            du: 'Beginner', // Dutch
        },
        iconimg: img1,
        small: {
            en: "Learn the basics of kitesurfing",
            gr: "Lerne die Grundlagen des Kitesurfens", // German
            du: "Leer de basis van kitesurfen", // Dutch
        }
    },
    {
        link: {
            en: 'Water start',
            gr: "Wasserstart", // German
            du: 'Waterstart', // Dutch
        },
        iconimg: img2,
        small: {
            en: "Together we take the first steps!",
            gr: "Gemeinsam machen wir ersten Schritte!", // German
            du: "Samen zetten we de eerste stappen!", // Dutch
        }
    },
    {
        link: {
            en: 'Independent',
            gr: "Unabhängig", // German
            du: 'Onafhankelijk', // Dutch
        },
        iconimg: img3,
        small: {
            en: "Learn new tricks",
            gr: "Lerne neue Tricks", // German
            du: "Leer nieuwe trucs", // Dutch
        }
    },
    {
        link: {
            en: 'Expert',
            gr: "Experte", // German
            du: 'Expert', // Dutch
        },
        iconimg: img4,
        small: {
            en: "Train together for that one trick",
            gr: "Trainiere zusammen für diesen einen Trick", // German
            du: "Train samen voor die ene truc", // Dutch
        }
    }
];


const Level = ({ data, selectedLanguage }) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-5 pt-5 p-3">
                    <div className='Level_cont text-center col-12'>
                        <h1 className='Level_cont_head'>
                            {data?.levelHeading}
                        </h1>
                        <p className='Level_cont_para'>{data?.levelSubHeading}</p>
                    </div>

                    {/* {Card.map((item, index) => ( */}
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="text-center m-1 p-4 level_card border-1">
                                {/* Background data */}
                                <div>
                                    <img src={`${config.API_BASE_URL}${data?.levelimg1}`} alt="" className='leve_icon_img' />
                                </div>
                                <div>
                                    <NavLink to="#" className="nav-link level_card_text">{data?.leveltitle1}</NavLink>
                                </div>
                                <div>
                                    <small className='level_small_text'>{data?.levelpara1}</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="text-center m-1 p-4 level_card border-1">
                                {/* Background data */}
                                <div>
                                    <img src={`${config.API_BASE_URL}${data?.levelimg2}`} alt="" className='leve_icon_img' />
                                </div>
                                <div>
                                    <NavLink to="#" className="nav-link level_card_text">{data?.leveltitle2}</NavLink>
                                </div>
                                <div>
                                    <small className='level_small_text'>{data?.levelpara2}</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="text-center m-1 p-4 level_card border-1">
                                {/* Background data */}
                                <div>
                                    <img src={`${config.API_BASE_URL}${data?.levelimg3}`} alt="" className='leve_icon_img' />
                                </div>
                                <div>
                                    <NavLink to="#" className="nav-link level_card_text">{data?.leveltitle3}</NavLink>
                                </div>
                                <div>
                                    <small className='level_small_text'>{data?.levelpara3}</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="text-center m-1 p-4 level_card border-1">
                                {/* Background data */}
                                <div>
                                    <img src={`${config.API_BASE_URL}${data?.levelimg4}`} alt="" className='leve_icon_img' />
                                </div>
                                <div>
                                    <NavLink to="#" className="nav-link level_card_text">{data?.leveltitle4}</NavLink>
                                </div>
                                <div>
                                    <small className='level_small_text'>{data?.levelpara4}</small>
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
