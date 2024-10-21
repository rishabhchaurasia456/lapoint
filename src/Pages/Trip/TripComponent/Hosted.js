import React from 'react'
// import img1 from "../../../Images/Hosted1.webp"
// import img2 from "../../../Images/hosted2.jpg"
// import img3 from "../../../Images/hosted3.webp"
// import img4 from "../../../Images/hosted4.webp"
// import earth from "../../../Images/earth.webp"

import at from "../../../Images/at.webp"

const Hosted = ({ hostedData, selectedLanguage }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-4">
          {hostedData.map((item, index) => (
            <div className="col-md-3">
              <div className="hosted_card shadow text-center" key={index}>
                <img src={item.hosted_img} className='hosted_card_img' alt='card' width="100%" />
                <div className='hosted_card_body'>
                  <p className='hosted_card_title'>{item.hosted_name[selectedLanguage]}</p>
                  <p>{item.hosted_position[selectedLanguage]}</p>
                  <p className='hosted_card_year'>{item.kite_exp[selectedLanguage]}</p>
                  <p >{item.hosted_para[selectedLanguage]}</p>
                  <p className='hosted_card_last'>
                    <span>
                      <img className='me-2' src={item.hosted_msg_img} alt="icon" style={{ maxWidth: '25px' }} />
                    </span>
                    <span className='hosted_card_last'><b>{item.hosted_msg_head[selectedLanguage]}</b></span>
                  </p>
                  <p className='hosted_card_last2'>{item.hosted_msg[selectedLanguage]}</p>
                  <p className='hosted_card_last'>
                    <span>
                      <img className='me-2' src={item.hosted_year_img} alt="icon" style={{ maxWidth: '25px' }} />
                    </span>
                    <span><b>{item.hosted_year_head[selectedLanguage]}</b></span>
                  </p>
                  <p className='hosted_card_last2'>{item.hosted_year[selectedLanguage]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hosted