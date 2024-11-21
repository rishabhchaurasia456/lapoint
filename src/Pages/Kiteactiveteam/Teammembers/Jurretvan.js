import React from 'react'
import Jurretvanimg from '../../../Images/jurret.webp'

const Jurretvan = () => {
    return (
        <div>


            <div>
                {/* banner img  */}
                <div className="team_banner Jurretvanimg page_cont">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="lifestyle_heading fs-1">
                        Jurret Van Der Vliet
                        </h2>
                    </div>
                </div>

                {/* main container  */}

                <div className='container-fluid mt-3 pt-3'>
                    <div className='row mt-5' >
                        <div className='col-md-6'>
                            <div className='lifestyle_div text-center'>
                                <img src={Jurretvanimg} className='lifestyle w-100' alt="lifestyle" />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <h2 className="lifestyle_heading fs-1">
                                    Jurret Van Der Vliet
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
                                        Jurret is an entertainer on and off the water. The moment you think you've seen it all he pulls another (party) trick you've never seen. Next to that he's one of the best instructors on the water with his never-ending patience and didactic skills. He will do everything he can to make you learn kiting, progress or have the time of you holiday.
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
                                                <li className='list-group-item mb-3'><strong>Nickname</strong> Jurret Van Der Vliet   </li>
                                                <li className='list-group-item mb-3'><strong>Date of birth: </strong>  15-02-2000</li>
                                                <li className='list-group-item mb-3'><strong>Nationality:</strong>   Netherlands </li>
                                                <li className='list-group-item mb-3'><strong>Kite since: </strong>2017</li>
                                                <li className='list-group-item mb-3'><strong>Teaching since:</strong> 2019</li>
                                                <li className='list-group-item mb-3'><strong>Coolest trick:</strong>Backroll one footer</li>
                                                <li className='list-group-item mb-3'><strong>Favorite KiteActive location:</strong> Sicily </li>
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

export default Jurretvan
