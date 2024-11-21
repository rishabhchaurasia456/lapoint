import React from 'react'


import roadrickesimg from '../../../Images/team2.jpg'
const Roderick = () => {
    return (
        <div>


            <div>
                {/* banner img  */}
                <div className="team_banner Roadrickes page_cont">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="lifestyle_heading fs-1 fw-bold">
                            Roderickje Pijls
                        </h2>
                    </div>
                </div>

                {/* main container  */}

                <div className='container-fluid mt-3 pt-3'>
                    <div className='row mt-5' >
                        <div className='col-md-6'>
                            <div className='lifestyle_div text-center'>
                                <img src={roadrickesimg} className='lifestyle w-100' alt="lifestyle" />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <h2 className="lifestyle_heading fs-1">
                                        Roderickje Pijls
                                    </h2>
                                </div>
                                <div className="">
                                    <p className='lifestyle_text'>
                                        'Aquaman'
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_para">
                                        <p>
                                            Having a background of professional kitesurfer for over 12 years has taught me a lot. Seeing many cultures, meeting great people and knowing everything from the best spots in the world has convinced me to start sharing this with everyone who has that little 'Columbus' inside him/ herself.
                                        </p>
                                    </h1>
                                </div>
                                <div className="">
                                    <div className="lifestyle_text m-0 p-0">
                                        <div className="text_span">
                                            In a nutshell
                                        </div>
                                    </div>
                                    <p className='lifestyle_para'>
                                        <div>
                                            <ul className='px-0 fs-5'>
                                                <li className='list-group-item mb-3'><strong>Nickname</strong> Aquaman</li>
                                                <li className='list-group-item mb-3'><strong>Date of birth: </strong> 28-09-1991</li>
                                                <li className='list-group-item mb-3'><strong>Home spot:</strong> Ouddorp</li>
                                                <li className='list-group-item mb-3'><strong>Kite since: </strong> 2007</li>
                                                <li className='list-group-item mb-3'><strong>Teaching since:</strong>  2016</li>
                                                <li className='list-group-item mb-3'><strong>Favorite trick:</strong>  Getting inside a barrel</li>
                                                <li className='list-group-item mb-3'><strong>Favorite discipline:</strong> Wave & Freestyle    </li>

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

export default Roderick
