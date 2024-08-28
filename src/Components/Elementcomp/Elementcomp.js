import React from 'react'
import img from "../../Images/just.svg"

const Elementcomp = () => {
    return (
        <div>


            <div className="container-fluid mt-5 pt-5">
                <div className="row element_row">
                    <div className="col-12 col-md-3">
                        {/* <!-- Content for the first column --> */}
                        <div>
                            <img src={img} alt="" className='w-75 mt-5 mx-3 pt-4' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <h1 className="element_text">Let's cool down the planet <br />Together</h1>
                            <p className="element_para">
                                At KiteActive we believe in the future of our planet and the oceans. Wouldn't it be great if our children could enjoy the same wonderful planet as we do? Just dig in!
                            </p>
                        </div>
                    </div>
                        {/* <!-- Content for the third column --> */}
                    <div className="col-12 col-md-3">
                    <button className='element_btn text-center'>
                        digg inn!
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Elementcomp
