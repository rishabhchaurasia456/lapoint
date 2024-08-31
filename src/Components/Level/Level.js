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
            nl: "Alle niveaus zijn welkom!", // Dutch
            hi: "सभी स्तरों का स्वागत है!!", // Hindi
        },
        subtitle: {
            en: "From beginner to pro",
            nl: "Van beginner tot pro", // Dutch
            hi: "शुरुआती से पेशेवर तक", // Hindi
        }
    }
];

const Card = [
    {
        link: {
            en: 'Beginner',
            nl: 'Beginner', // Dutch
            hi: 'शुरुआती', // Hindi
        },
        iconimg: img1,
        small: {
            en: "Learn the basics of kitesurfing",
            nl: "Leer de basis van kitesurfen", // Dutch
            hi: "काइटसर्फिंग की मूल बातें सीखें", // Hindi
        }
    },
    {
        link: {
            en: 'Water start',
            nl: 'Waterstart', // Dutch
            hi: 'वाटर स्टार्ट', // Hindi
        },
        iconimg: img2,
        small: {
            en: "Together we take the first steps!",
            nl: "Samen zetten we de eerste stappen!", // Dutch
            hi: "हम एक साथ पहले कदम उठाते हैं!", // Hindi
        }
    },
    {
        link: {
            en: 'Independent',
            nl: 'Onafhankelijk', // Dutch
            hi: 'स्वतंत्र', // Hindi
        },
        iconimg: img3,
        small: {
            en: "Learn new tricks",
            nl: "Leer nieuwe trucs", // Dutch
            hi: "नई तरकीबें सीखें", // Hindi
        }
    },
    {
        link: {
            en: 'Expert',
            nl: 'Expert', // Dutch
            hi: 'विशेषज्ञ', // Hindi
        },
        iconimg: img4,
        small: {
            en: "Train together for that one trick",
            nl: "Train samen voor die ene truc", // Dutch
            hi: "उस एक तरकीब के लिए एक साथ प्रशिक्षण लें", // Hindi
        }
    }
];


const Level = ({selectedLanguage}) => {
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
