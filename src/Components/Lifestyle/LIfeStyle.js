import React from 'react'

import lp1 from '../../Images/F_L_Maldives_LP.jpg'
import lp2 from '../../Images/F_L_Maldives_lp_2.jpg'

const LIfeStyle = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={lp1} alt="" className='lifestyle' />
                    </div>
                    <div className='col-md-6'>
                        <div className="col">
                            <p className='lifestyle_text'>
                                Lifestyle
                            </p><br />
                        </div>
                        <div className="col">
                            <h1 className="lifestyle_heading">
                                The Lapoint way of life
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LIfeStyle