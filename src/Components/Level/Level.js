import React from 'react';

import img1 from "../../Images/level1.svg";
import img2 from "../../Images/level2.svg";
import img3 from "../../Images/level3.svg";
import img4 from "../../Images/level4.svg";
import { NavLink } from 'react-router-dom';

const Card = [
    { link: 'Beginner ', iconimg: img1, small: "Learn the basics of kitesurfing" },
    { link: 'Water start', iconimg: img2, small: "Together we take the first steps!" },
    { link: 'Independent', iconimg: img3, small: "Learn new tricks" },
    { link: 'Expert', iconimg: img4, small: "Train together for that one trick" },
];

const Level = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-5 pt-5 p-3">
                    <div className='Level_cont text-center'>
                        <h1 className='Level_cont_head'>
                            All levels are welcome!!
                        </h1>
                        <p className='Level_cont_para'>From beginner to pro</p>
                    </div>

                    {Card.map((item, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="text-center m-1  p-4 level_card border-1">
                                {/* Background data */}
                                <div>
                                    <img src={item.iconimg} alt={item.link} className='leve_icon_img' />
                                </div>
                                <div>
                                    <NavLink to="#" className=" nav-link level_card_text">{item.link}</NavLink>
                                </div>
                                <div>
                                    <small className='level_small_text'>{item.small}</small>
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
