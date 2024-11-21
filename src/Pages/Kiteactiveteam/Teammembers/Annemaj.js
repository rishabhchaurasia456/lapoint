import React from 'react'
import AnnemajIMG from '../../../Images/annemaj.webp'
import './Team.css';

const Annemaj = () => {
    return (
        <div>
            {/* banner img  */}
            <div className="team_banner page_cont">
                <div className="overlay"></div>

                <div className="content">
                    <h2 className="lifestyle_heading fs-1">
                        Annemaj Muiser
                    </h2>
                </div>
            </div>

            {/* main container  */}

            <div className='container-fluid mt-3 pt-3'>
                <div className='row mt-5' >
                    <div className='col-md-6'>
                        <div className='lifestyle_div text-center'>
                            <img src={AnnemajIMG} className='lifestyle w-100' alt="lifestyle" />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="life_style_div">
                            <div className="">
                                <h2 className="lifestyle_heading fs-1">
                                    Annemaj Muiser
                                </h2>
                            </div>
                            <div className="">
                                <p className='lifestyle_text'>
                                    'The Eagle'
                                </p>
                            </div>
                            <div className="">
                                <h1 className="lifestyle_para">
                                    <p>
                                        Annie 'the Eagle' is a passionate kitesurfer who loves adventure, fun and Outdoor Activities. For several years it has been a familiar KiteActive face who unleashes her creativity to take fantastic photos and videos. You will definitely get to meet her during one of our camps and will remember her inexhaustible enthusiasme.
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
                                            <li className='list-group-item mb-3'><strong>Nickname</strong> The Eagle</li>
                                            <li className='list-group-item mb-3'><strong>Date of birth: </strong> 23 - 10 - 1995</li>
                                            <li className='list-group-item mb-3'><strong>Home spot:</strong>  Lemmer</li>
                                            <li className='list-group-item mb-3'><strong>Kite since: </strong> 2019</li>
                                            <li className='list-group-item mb-3'><strong>Teaching since:</strong> 2021</li>
                                            <li className='list-group-item mb-3'><strong>Favorite trick:</strong> Backroll</li>

                                        </ul>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Annemaj
