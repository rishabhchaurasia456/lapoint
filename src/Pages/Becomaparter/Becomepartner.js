import React from 'react'
import discoveimg from '../../Images/DSC09834-1536x1024-1.webp'

import checkicon from '../../Images/check-mark.png'


const items = [
    { id: 1, text: "Travel agencies", icon: checkicon },
    { id: 2, text: "Hotels and resorts", icon: checkicon },
    { id: 3, text: "Enthusiastic sellers", icon: checkicon },
    { id: 4, text: "Kiteshops", icon: checkicon },
    { id: 5, text: "Kiteschool owners", icon: checkicon },
    { id: 6, text: "Snowboard / Sailing / Paraglide instructors", icon: checkicon },
];


const Becomepartner = () => {
    return (
        <div>
            <div className="container d-flex flex-column align-items-center justify-content-center surf_container mt-3 pt-5">
                <div className="row">
                    <div className="col">
                        <h1 className=" surf_text"> <span className='text_span'>Become a Partner</span></h1>
                        <p className='surf_para mt-3 '>
                            Let’s unite our powers and be partners!  We have partner programs for everyone. Do you have a kiteschool? A travel agency? Or are you just a kiter who thinks he can sell kitesurf trips? Together we can move mountains, create a synergy and build a stronger brand.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-5 pt-5'>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='lifestyle_div text-center'>
                            <img src={discoveimg} className='lifestyle w-75' alt="lifestyle" />
                        </div>
                    </div>

                    <div className='col-md-6 pb-5'>
                        <div className="life_style_div">
                            <div className="">
                                <h1 className="lifestyle_heading">
                                    For who?
                                </h1>
                            </div>
                            <div className="row mt-4">
                                {items.map((item) => (
                                    <div className="d-flex " key={item.id}>
                                        <img src={item.icon} alt="icon" className="check_icon" />
                                        <p className="mx-2 high_text">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Becomepartner
