import React from 'react'

import Emielrenseimg from '../../../Images/EmielRense.webp'

const Emielrense = () => {
    return (
        <div>

            <div>
                {/* banner img  */}
                <div className="team_banner EmielRense page_cont">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="lifestyle_heading fs-1">
                            Emiel Rense
                        </h2>
                    </div>
                </div>

                {/* main container  */}

                <div className='container-fluid mt-3 pt-3'>
                    <div className='row mt-5' >
                        <div className='col-md-6'>
                            <div className='lifestyle_div text-center'>
                                <img src={Emielrenseimg} className='lifestyle w-100' alt="lifestyle" />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <h2 className="lifestyle_heading fs-1">
                                        Emiel Rense
                                    </h2>
                                </div>
                                <div className="">
                                    <p className='lifestyle_text'>
                                        'Emilio'
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_para">
                                        <p>
                                            Since the beginning I fell in love with kitesurfing and being exposed to all the elements. A couple of years ago I moved to the south of France to combine my love for the ocean with the mountains. Nowadays, I live 1 hour away from an amazing kitespot and I get to combine it with snowboarding and snowkiting.
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
                                                <li className='list-group-item mb-3'><strong>Nickname</strong> Emilio   </li>
                                                <li className='list-group-item mb-3'><strong>Date of birth: </strong> 24-05-1988</li>
                                                <li className='list-group-item mb-3'><strong>home spot:      </strong> Serre Poncon lake</li>
                                                <li className='list-group-item mb-3'><strong>Nationality:</strong>  Dutch </li>
                                                <li className='list-group-item mb-3'><strong>Kite since: </strong>2003

                                                </li>
                                                <li className='list-group-item mb-3'><strong>Teaching since:</strong> 2007</li>
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

export default Emielrense
