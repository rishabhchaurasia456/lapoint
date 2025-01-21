import React from 'react'
import config from '../../../config/config';

const Accomodation = ({ accommodationData, selectedLanguage }) => {

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p className='surf_text text-center fs-1'>{accommodationData.mainTitle}</p>
            <p className='surf_para fs-6 text-center'>{accommodationData.mainDesc}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {accommodationData.cardData.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="box-accom-custom m-auto">
                <img src={`${config.API_BASE_URL}/${item.img}`} className='over-img-accomodation ' alt="acc_image" />
                <div className="box-accom-title">{item.title}</div>
                <div className="box-accom-des">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <p className='surf_text text-center fs-1'>{accommodationData.locationTitle}</p>
          <p className='surf_text text-center fs-1'>{accommodationData.locationSubtitle}</p>
          <p className='surf_para fs-6 text-center'>{accommodationData.locationDesc}</p>
        </div>

        <div className="row">
          <iframe src={accommodationData.iframe} width="600" height="450" title='map' style={{border:"0", marginBottom:'5%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </div>
  );
}



export default Accomodation;
