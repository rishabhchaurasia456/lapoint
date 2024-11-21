import React from 'react'

import fleximg from '../../../Images/fleximg.webp'
const Felix = () => {
  return (
    <div>
      


      <div>
            {/* banner img  */}
            <div className="team_banner fleximg page_cont">
                <div className="overlay"></div>
                <div className="content">
                    <h2 className="lifestyle_heading fs-1">
                    Felix Maks
                    </h2>
                </div>
            </div>

            {/* main container  */}

            <div className='container-fluid mt-3 pt-3'>
                <div className='row mt-5' >
                    <div className='col-md-6'>
                        <div className='lifestyle_div text-center'>
                            <img src={fleximg} className='lifestyle w-100' alt="lifestyle" />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="life_style_div">
                            <div className="">
                                <h2 className="lifestyle_heading fs-1">
                                Felix Maks
                                </h2>
                            </div>
                            <div className="">
                                <p className='lifestyle_text'>
                                'The Little One'

                                </p>
                            </div>
                            <div className="">
                                <h1 className="lifestyle_para">
                                    <p>
                                    My kite adventure started in Workum in 2005, after a kite lesson with friends I was sold. As soon as I saw the leaves on the trees moving, everything went wrong and I had to go straight to the water. I learned my first tricks at my home spot De Lemmer. After training with friends in Brazil for a winter in 2009, I did several European kite trips with good results and the national events here in the Netherlands were always very enjoyable! Traveling, kiting and teaching are my three passions in life and I am happy that I can make my passions my job. Since 2012 I have been teaching kite lessons at different locations all over the world and I enjoy it! Now that I have completed my Hotel Management School education, I am ready to make your KiteActive holiday a legendary success!
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
                                            <li className='list-group-item mb-3'><strong>Nickname</strong> The the little one</li>
                                            <li className='list-group-item mb-3'><strong>Date of birth: </strong>  13-04-1991</li>
                                            <li className='list-group-item mb-3'><strong>Home spot:</strong>   Lemmer & Workum (NL)</li>
                                            <li className='list-group-item mb-3'><strong>Kite since: </strong> May 1, 2005</li>
                                            <li className='list-group-item mb-3'><strong>Teaching since:</strong> since: 2007</li>
                                            <li className='list-group-item mb-3'><strong>Favorite trick:</strong> double heart attack</li>
                                            <li className='list-group-item mb-3'><strong>Favorite discipline:</strong> Freestyle    </li>

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

export default Felix
