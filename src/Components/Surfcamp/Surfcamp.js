import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../Images/img1.webp'
import img2 from '../../Images/img2.webp'
import img3 from '../../Images/img3.webp'
import img4 from '../../Images/img4.webp'

const Surfcamp = ({ selectedLanguage }) => {

  const content = {
    en: {
      title: "Kiteactive",
      title1: "for Veventures!",
      subtitle: "Kiteactive for Veventures offers an unparalleled experience for adventure seekers and kite surfing enthusiasts. With our expertly curated trips, you can explore breathtaking destinations while enjoying world-class kite surfing conditions. We prioritize your comfort and safety, providing you with top-notch equipment and personalized guidance from our skilled instructors."
    },
    gr: {
      title: "Kiteactive",
      title1: "für Veventures!",
      subtitle: "Kiteactive für Veventures bietet ein unvergleichliches Erlebnis für Abenteuersuchende und Kitesurfing-Enthusiasten. Mit unseren fachkundig zusammengestellten Reisen kannst du atemberaubende Reiseziele erkunden und erstklassige Kitesurfing-Bedingungen genießen. Wir legen großen Wert auf deinen Komfort und deine Sicherheit, stellen dir erstklassige Ausrüstung zur Verfügung und bieten dir eine persönliche Anleitung durch unsere erfahrenen Trainer."
    },
    du: {
      title: "Kiteactive",
      title1: "voor het avontuur!",
      subtitle: "KiteActive voor avonturiers biedt een ongeëvenaarde ervaring voor avonturiers en kitesurf-enthousiastelingen. Met onze zorgvuldig samengestelde reizen kun je adembenemende bestemmingen verkennen terwijl je geniet van kitesurfomstandigheden van wereldklasse. Wij geven prioriteit aan jouw comfort en veiligheid, met topkwaliteit uitrusting en persoonlijke begeleiding door onze ervaren instructeurs."
    }
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
          <div className="col-12 col-md-6 col-lg-5">
            <Link>
              <img src={img1} alt="" className='surf_img1' />
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-7">
            <div className="row">
              <div className="col-12 col-lg-6">
                <Link>
                  <img src={img2} alt="" className='surf_img2' />
                </Link>
              </div>
              <div className="col-12 col-lg-6">
                <div className='sufr_inside_row '>
                  <div className='p-1'>
                    <Link>
                      <img src={img3} alt="" className='surf_img3' />
                    </Link>
                  </div>
                  <br />
                  <div className='p-1'>
                    <Link>
                      <img src={img4} alt="" className='surf_img4' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link className='nav-link'>
            <p className='text-danger fw-bold m-3 fs-5 text-center'>SEE ALL PHOTOS & VIDEOS</p>
          </Link>
        </div>
      </div>


      {/* photo container end  */}


    </div>
  )
}

export default Surfcamp
