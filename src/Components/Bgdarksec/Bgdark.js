import React from 'react'

const Bgdark = ({data}) => {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col bg_d_cont">
                        <div className='text-center'>
                            <h2 className='text_span bg_main_head'>{data?.kiteforlifesecHeading}</h2>
                        <p className='surf_para text-light'>{data?.kiteforlifesecPara}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bgdark
