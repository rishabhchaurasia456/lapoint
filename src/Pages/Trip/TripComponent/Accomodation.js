import React from 'react'

const Accomodation = ({ accommodationData, selectedLanguage }) => {


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <p className='surf_text text-center fs-1'>{accommodationData.main_title[selectedLanguage]}</p>
          <p className='surf_para fs-6 text-center'>{accommodationData.main_desc[selectedLanguage]}</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {accommodationData.card_details.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="box-accom-custom m-auto">
                <img src={item.imgSrc} className='over-img-accomodation ' alt="acc_image" />
                <div className="box-accom-title">{item.title[selectedLanguage]}</div>
                <div className="box-accom-des">{item.description[selectedLanguage]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <p className='surf_text text-center fs-1'>{accommodationData.location_title[selectedLanguage]}</p>
          <p className='surf_text text-center fs-1'>{accommodationData.location_subtitle[selectedLanguage]}</p>
          <p className='surf_para fs-6 text-center'>{accommodationData.location_desc[selectedLanguage]}</p>
        </div>

        {/* <div className="row">
          <iframe src={accommodationData.iframe} width="600" height="300" title='map' style={{border:"0", marginBottom:'5%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
        
      </div>
    </div>
  );
}



export default Accomodation;
