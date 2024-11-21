import React from 'react'


import Arnaudimg from "../../../Images/Arnaud.webp"
const Arnaud = () => {
    return (
        <div>

            <div>
                {/* banner img  */}
                <div className="team_banner Arnaudimg page_cont">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="lifestyle_heading fs-1">
                            Arnaud Plas
                        </h2>
                    </div>
                </div>

                {/* main container  */}

                <div className='container-fluid mt-3 pt-3'>
                    <div className='row mt-5' >
                        <div className='col-md-6'>
                            <div className='lifestyle_div text-center'>
                                <img src={Arnaudimg} className='lifestyle w-100' alt="lifestyle" />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <h2 className="lifestyle_heading fs-1">
                                        Arnaud Plas
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
                                            Arnaud Plas is not only a skilled kitesurfer but also a passionate advocate for the sport. With a profound love for the wind and the waves, he has honed his kitesurfing skills over the years. Arnaud's dedication to kitesurfing goes beyond personal enjoyment; he is also actively involved in promoting the sport, organizing events, and fostering a vibrant community of fellow enthusiasts. Whether he's gracefully gliding across the water or sharing his passion with others, Arnaud Plas embodies the spirit of adventure and camaraderie that defines the kitesurfing lifestyle.
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
                                                <li className='list-group-item mb-3'><strong>Nickname</strong> Cappuccino</li>
                                                <li className='list-group-item mb-3'><strong>Date of birth: </strong>  18 - 02 - 1994</li>
                                                <li className='list-group-item mb-3'><strong>Home spot:</strong>  Zandvoort</li>
                                                <li className='list-group-item mb-3'><strong>Kite since: </strong>2014</li>
                                                <li className='list-group-item mb-3'><strong>Teaching since:</strong> 2018</li>
                                                <li className='list-group-item mb-3'><strong>Favorite trick:</strong> Boogieloop</li>
                                                <li className='list-group-item mb-3'><strong>Favorite discipline:</strong> Big Air </li>
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

export default Arnaud
