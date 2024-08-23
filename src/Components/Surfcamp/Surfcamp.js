import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../Images/SP_long_beach_lapoint_surfcamp.jpg'
import img2 from '../../Images/SP_Carry_surfboards_surfcamp_lapoint.jpg'
import img3 from '../../Images/happy_people_pool_surf_training_lapoint_surfcamp.jpg'
import img4 from '../../Images/SP_happy_people_lapoint_surfcamp.jpg'

const Surfcamp = () => {
  return (
    <div>
      <div className="container d-flex flex-column align-items-center justify-content-center surf_container">
        <div className="row">
          <div className="col text-center">
            <h1 className=" surf_text">SURF CAMPS - IN NO WAY <br />ORDINARY</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className='surf_para'>
              Some of the best feelings we have ever had have been connected to <br /> surf. Add to that new friends, amazing scenery, and local culture, and <br /> you will know what we are all about. Feel good, have fun, meet <br /> interesting people in amazing places, and evolve and progress in <br /> every way possible at our surf camps.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------- */}


      {/* Photo Section  */}
      <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <Link>
              <img src={img1} alt="" className='surf_img1' />
            </Link>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <Link>
                  <img src={img2} alt="" className=' surf_img2' />
                </Link>
              </div>
              <div className="col-lg-6 ">
                <div className='p-1'>
                  <Link>
                    <img src={img3} alt="" className=' surf_img3' />
                  </Link>
                </div>
                <br />

                <div className='p-1'>
                  <Link>

                    <img src={img4} alt="" className=' surf_img4' />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div>
          <Link className='nav-link'>
            <p className='text-danger fw-bold m-3 fs-5 text-center'> SEE ALL PHOTOS & VEDIOS</p>
          </Link>
        </div>

      </div>

      {/* photo container end  */}


    </div>
  )
}

export default Surfcamp
