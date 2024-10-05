import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../Images/img1.webp'
import img2 from '../../Images/img2.webp'
import img3 from '../../Images/img3.webp'
import img4 from '../../Images/img4.webp'

const Surfcamp = ({selectedLanguage}) => {

  const content = {
    en: {
        title: "Kiteactive",
        title1: " for Veventures!",
        subtitle: "Kiteactive for Veventures offers an unparalleled experience for adventure seekers and kite surfing enthusiasts. With our expertly curated trips, you can explore breathtaking destinations while enjoying world-class kite surfing conditions. We prioritize your comfort and safety, providing you with top-notch equipment and personalized guidance from our skilled instructors.",
    },
    nl: {
        title: "Kiteactive",
        title1: "voor het leven!",
        subtitle: "KiteActive, een kitesurfreismerk dat anders is dan anders. Wij creëren onvergetelijke avonturen die een community van gepassioneerde kitesurfers met elkaar verbinden. Of je nu op jacht bent naar wind of nieuwe vrienden ontmoet, KiteActive draait om het ten volle leven van het kitesurfen. Ga met ons mee op de kitetrip van je leven!",
    },

    hi: {
        title: "काइटएक्टिव",
        title1: "जीवन के लिए!",
        subtitle: "काइटएक्टिव, एक असाधारण काइटसर्फ ट्रैवल ब्रांड। हम अविस्मरणीय रोमांच बनाते हैं जो भावुक काइटसर्फर्स के समुदाय को जोड़ते हैं। चाहे आप हवा का पीछा कर रहे हों या नए दोस्तों से मिल रहे हों, काइटएक्टिव का उद्देश्य पतंगबाजी के जीवन को पूरी तरह से जीना है। अपने जीवन की सबसे बेहतरीन पतंग यात्रा पर हमारे साथ जुड़ें!",
    },
};

  return (
    <div>
      <div className="container d-flex flex-column align-items-center justify-content-center surf_container">
        <div className="row">
          <div className="col text-center">
            <h1 className=" surf_text"> <span className='text_span'>{content[selectedLanguage].title}</span>{content[selectedLanguage].title1}</h1>
            <p className='surf_para'>
              {content[selectedLanguage].subtitle}
            </p>
          </div>
        </div>
        
      </div>

      {/* ----------------------------------------------- */}


      {/* Photo Section  */}
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5">
            <Link>
              <img src={img1} alt="" className='surf_img1' />
            </Link>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-7">
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
