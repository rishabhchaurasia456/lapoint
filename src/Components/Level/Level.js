import React from 'react';

import img1 from "../../Images/level1.svg";
import img2 from "../../Images/level2.svg";
import img3 from "../../Images/level3.svg";
import img4 from "../../Images/level4.svg";
import { NavLink } from 'react-router-dom';

const Carddata_head_section = [
    {
        title: {
            en: "All levels are welcome!!",
            nl: "Alle niveaus zijn welkom!", // Netherlands
            du: "Alle niveaus zijn welkom!!", // Dutch
        },
        subtitle: {
            en: "From beginner to pro",
            nl: "Van beginner tot pro", // Netherlands
            du: "Van beginner tot pro", // Dutch
        }
    },
];

const Card = [
    {
        link: {
            en: 'Beginner',
            nl: 'Beginner', // Netherlands
            du: 'Beginner', // Dutch
        },
        iconimg: img1,
        small: {
            en: "Learn the basics of kitesurfing",
            nl: "Leer de basis van kitesurfen", // Netherlands
            du: "Leer de basis van kitesurfen", // Dutch
        }
    },
    {
        link: {
            en: 'Water start',
            nl: 'Waterstart', // Netherlands
            du: 'Waterstart', // Dutch
        },
        iconimg: img2,
        small: {
            en: "Together we take the first steps!",
            nl: "Samen zetten we de eerste stappen!", // Netherlands
            du: "Samen zetten we de eerste stappen!", // Dutch
        }
    },
    {
        link: {
            en: 'Independent',
            nl: 'Onafhankelijk', // Netherlands
            du: 'Onafhankelijk', // Dutch
        },
        iconimg: img3,
        small: {
            en: "Learn new tricks",
            nl: "Leer nieuwe trucs", // Netherlands
            du: "Leer nieuwe trucs", // Dutch
        }
    },
    {
        link: {
            en: 'Expert',
            nl: 'Expert', // Netherlands
            du: 'Expert', // Dutch
        },
        iconimg: img4,
        small: {
            en: "Train together for that one trick",
            nl: "Train samen voor die ene truc", // Netherlands
            du: "Train samen voor die ene truc", // Dutch
        }
    }
];



const Level = ({ selectedLanguage }) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-5 pt-5 p-3">
                    <div className='Level_cont text-center'>
                        <h1 className='Level_cont_head'>
                            {Carddata_head_section[0].title[selectedLanguage]}
                        </h1>
                        <p className='Level_cont_para'>{Carddata_head_section[0].subtitle[selectedLanguage]}</p>
                    </div>

                    {Card.map((item, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="text-center m-1  p-4 level_card border-1">
                                {/* Background data */}
                                <div>
                                    <img src={item.iconimg} alt={item.link[selectedLanguage]} className='leve_icon_img' />
                                </div>
                                <div>
                                    <NavLink to="#" className=" nav-link level_card_text">{item.link[selectedLanguage]}</NavLink>
                                </div>
                                <div>
                                    <small className='level_small_text'>{item.small[selectedLanguage]}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Level;
