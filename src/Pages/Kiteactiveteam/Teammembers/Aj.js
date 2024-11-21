import React from 'react'
import ajimg from '../../../Images/aj.webp'
const Aj = () => {
    return (
        <div>



            <div>
                {/* banner img  */}
                <div className="team_banner aj page_cont">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="lifestyle_heading fs-1 fw-bold">
                            AJ
                        </h2>
                    </div>
                </div>

                {/* main container  */}

                <div className='container-fluid mt-3 pt-3'>
                    <div className='row mt-5' >
                        <div className='col-md-6'>
                            <div className='lifestyle_div text-center'>
                                <img src={ajimg} className='lifestyle w-100' alt="lifestyle" />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <h2 className="lifestyle_heading fs-1">
                                        AJ
                                    </h2>
                                </div>
                                <div className="">
                                    <p className='lifestyle_text'>
                                        'The Booker'

                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_para">
                                        <p>
                                            Kitesurfing started for me in 2007, after years of flying kites on land I now wanted to follow my friends onto the water. In 2009 I started my training as an NKV instructor in order to convey my passion for kitesurfing and the life around it to as many other people as possible.
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
                                                <li className='list-group-item mb-3'><strong>Nickname</strong> Anne-Jelmer Book</li>
                                                <li className='list-group-item mb-3'><strong>Date of birth: </strong> 25-08-1990</li>
                                                <li className='list-group-item mb-3'><strong>Home spot:</strong> NL</li>
                                                <li className='list-group-item mb-3'><strong>Kite since: </strong> De Lemmer, Workum</li>
                                                <li className='list-group-item mb-3'><strong>Teaching since:</strong>  2010</li>
                                                <li className='list-group-item mb-3'><strong>Coolest trick:</strong> Jesus Walk</li>
                                                <li className='list-group-item mb-3'><strong>Favorite KiteActive location:</strong>  Zanzibar!  </li>

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

export default Aj
