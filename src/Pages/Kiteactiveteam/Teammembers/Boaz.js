import React from 'react'
import Boazimg from '../../../Images/Boaz.png'

const Boaz = () => {
    return (
        <div>

            <div>
                {/* banner img  */}
                <div className="team_banner Boaz page_cont">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="lifestyle_heading fs-1">
                        Boaz Oketch
                        </h2>
                    </div>
                </div>

                {/* main container  */}

                <div className='container-fluid mt-3 pt-3'>
                    <div className='row mt-5' >
                        <div className='col-md-6'>
                            <div className='lifestyle_div text-center'>
                                <img src={Boazimg} className='lifestyle w-100' alt="lifestyle" />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <h2 className="lifestyle_heading fs-1">
                                    Boaz Oketch
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
                                        Boaz is our hands and feet in Zanzibar! His friendly smile, warm and charismatic character is hard to not notice. Since a couple of years he fell in love with the island and also started kitesurfing. Boaz.. one you will not forget 🙂
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
                                                <li className='list-group-item mb-3'><strong>Nickname</strong> Boaz Oketch</li>
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

export default Boaz
