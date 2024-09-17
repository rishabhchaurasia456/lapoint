import React from 'react'
import img1 from "../../../Images/Hosted1.png"
import img2 from "../../../Images/hosted2.jpg"
import img3 from "../../../Images/hosted3.png"
import img4 from "../../../Images/hosted4.png"
import earth from "../../../Images/earth.webp"
import at from "../../../Images/at.webp"

const Hosted = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-4">
          <div className="col-md-3">
            <div className="hosted_card shadow text-center">
              <img src={img1} className='hosted_card_img' alt='card' width="100%" />
              <div className='hosted_card_body'>
                <p className='hosted_card_title'>Ellis Muiser</p>
                <p>Kitecamp Host</p>
                <p className='hosted_card_year'>2 years kite experience</p>
                <p >I will show you all the hidden gems of Zanzibar! Together we go on kitesurf adventures and amazing parties!</p>
                <p className='hosted_card_last'>
                  <span>
                    <img className='me-2' src={earth} alt="icon" style={{ maxWidth: '25px' }} />
                  </span>
                  <span className='hosted_card_last'><b>Top Destination</b></span>
                </p>
                <p className='hosted_card_last2'>Zanzibar & Waddensea!</p>
                <p className='hosted_card_last'>
                  <span>
                    <img className='me-2' src={at} alt="icon" style={{ maxWidth: '25px' }} />
                  </span>
                  <span><b>Top Destination</b></span>
                </p>
                <p className='hosted_card_last2'>4 years</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hosted_card shadow text-center">
              <img src={img2} className='hosted_card_img' alt='card' width="100%" />
              <div className='hosted_card_body'>
                <p className='hosted_card_title'>Alain ”the Magician”</p>
                <p>Instructor</p>
                <p className='hosted_card_year'>9 years kite experience</p>
                <p >Together we make an awesome time in Zanzibar! I am an experienced kite instructors for years and I will teach you everything I know</p>
                <p className='hosted_card_last'>
                  <span>
                    <img className='me-2' src={earth} alt="icon" style={{ maxWidth: '25px' }} />
                  </span>
                  <span className='hosted_card_last'><b>Favoriete Bestemming</b></span>
                </p>
                <p className='hosted_card_last2'>Paje beach, ZANZIBAR!</p>
                <p className='hosted_card_last'>
                  <span>
                    <img className='me-2' src={at} alt="icon" style={{ maxWidth: '25px' }} />
                  </span>
                  <span><b>KiteActive</b></span>
                </p>
                <p className='hosted_card_last2'>6 years</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hosted_card shadow text-center">
              <img src={img3} className='hosted_card_img' alt='card' width="100%" />
              <div className='hosted_card_body'>
                <p className='hosted_card_title'>Chollo ”Zanzibari”</p>
                <p>Instructor</p>
                <p className='hosted_card_year'>9 years kite experience</p>
                <p >Kitesurfing and teaching is my biggest passion. I am already with KiteActive for more then 8 years and I enjoy every minute on the water with you!</p>
                <p className='hosted_card_last'>
                  <span>
                    <img className='me-2' src={earth} alt="icon" style={{ maxWidth: '25px' }} />
                  </span>
                  <span className='hosted_card_last'><b>Favoriete Bestemming</b></span>
                </p>
                <p className='hosted_card_last2'>Paje east coast Zanzibar</p>
                <p className='hosted_card_last'>
                  <span>
                    <img className='me-2' src={at} alt="icon" style={{ maxWidth: '25px' }} />
                  </span>
                  <span><b>KiteActive</b></span>
                </p>
                <p className='hosted_card_last2'>8 years</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hosted_card shadow text-center">
              <img src={img4} className='hosted_card_img' alt='card' width="100%" />
              <div className='hosted_card_body'>
                <p className='hosted_card_title'>Furaha ”Happy”</p>
                <p>Camp manager</p>
                <p className='hosted_card_year'>8 years experience in KiteActive hotel</p>
                <p >Karibu Zanzibar! I will make sure you have an amazing stay. I am in charge of the bar, reception and I organize amazing trips for you when there is no wind.</p>
                <p className='hosted_card_last'>
                  <span>
                    <img className='me-2' src={earth} alt="icon" style={{ maxWidth: '25px' }} />
                  </span>
                  <span className='hosted_card_last'><b>Favoriete Bestemming</b></span>
                </p>
                <p className='hosted_card_last2'>I love Zanzibar</p>
                <p className='hosted_card_last'>
                  <span>
                    <img className='me-2' src={at} alt="icon" style={{ maxWidth: '25px' }} />
                  </span>
                  <span><b>KiteActive</b></span>
                </p>
                <p className='hosted_card_last2'>7 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hosted