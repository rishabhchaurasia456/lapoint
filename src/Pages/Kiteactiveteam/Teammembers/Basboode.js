import React from 'react'

import Basboodeimg from '../../../Images/baas.webp'
const Basboode = () => {
    return (
        <div>
            <div>
                {/* banner img  */}
                <div className="team_banner Bassimg page_cont">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="lifestyle_heading fs-1">
                            Jump Bus
                        </h2>
                    </div>
                </div>

                {/* main container  */}

                <div className='container-fluid mt-3 pt-3'>
                    <div className='row mt-5' >
                        <div className='col-md-6'>
                            <div className='lifestyle_div text-center'>
                                <img src={Basboodeimg} className='lifestyle w-100' alt="lifestyle" />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <h2 className="lifestyle_heading fs-1">
                                        Jump Bus
                                    </h2>
                                </div>
                                <div className="">
                                    <p className='lifestyle_text'>
                                        'The Contact'
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_para">
                                        <p>
                                            My name is Bas. I try to enjoy life as much as possible. Seek for adventure and explore as much as possible. In my daily life I am a creative person and being on the water I am able to express that as well
                                        </p>
                                    </h1>
                                </div>
                                <div className="">
                                    <div className="lifestyle_text m-0 p-0">
                                        <div className="text_span">
                                            Overview
                                        </div>
                                    </div>
                                    <p className='lifestyle_para'>
                                        <div>
                                            <ul className='px-0 fs-5'>
                                                <li className='list-group-item mb-3'><strong>Nickname</strong> Bassoe   </li>
                                                <li className='list-group-item mb-3'><strong>Date of birth: </strong> 08 - 09 - 1999</li>
                                                <li className='list-group-item mb-3'><strong>Nationality:</strong>  Dutch </li>
                                                <li className='list-group-item mb-3'><strong>Kite since: </strong>2010</li>
                                                <li className='list-group-item mb-3'><strong>Teaching since:</strong> 2014</li>
                                                <li className='list-group-item mb-3'><strong>Coolest trick:</strong> S-bend</li>
                                                <li className='list-group-item mb-3'><strong>Favorite KiteActive location:</strong> Morocco </li>
                                            </ul>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Basboode
