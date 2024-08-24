import React from 'react'
import { NavLink } from 'react-router-dom';

import img1 from '../../Images/ERICEIRA-min.jpeg';
import img2 from '../../Images/FUERTEVENTURA.jpg';
import img3 from '../../Images/ALENTEJO.jpg';
import img4 from '../../Images/HODDEVIK.jpg';


const Card = [
    { link: 'ERICEIR ', img: img1 },
    { link: 'FUERTE VENTURA ', img: img2 },
    { link: 'ALENTEJO', img: img3 },
    { link: 'HODDEVIK', img: img4 },

];


const European = () => {
    return (
        <div>

            {/* Text Container  */}
            <div className="container d-flex flex-column align-items-center justify-content-center Eurp_container">
                <div className="row">
                    <div className="col text-center">
                        <p className='Eurp_para'>Find your surf camp for an epic summer in Europe!</p>
                        <h3 className=" Eurp_text">European get away - top picks  <br />for surf camps 2024!</h3>
                    </div>
                </div>
            </div>

            {/* // card container  */}

            <div className="container-fluid">
                <div className="row mt-5 pt-5 p-3">
                    {Card.map((item, index) => (
                        <div key={index} className="col-md-3 mb-4 ">
                            <div>
                                <div className="text-center m-1 border-0 Eurp_img_container" style={{ backgroundImage: `url(${item.img})` }}>
                                    {/* Background data */}
                                    <div className="">
                                        <NavLink className="nav-link background_text">{item.link}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>        
            </div>
        </div>





    )
}

export default European
