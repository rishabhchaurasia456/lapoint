import React from 'react'


const Accomodation = ({ accommodationData, selectedLanguage }) => {

<<<<<<< HEAD
=======
const Accomodation = ({ accommodationData, selectedLanguage }) => {

>>>>>>> 38ad342e0030567fafadde58ef9a7902a83b1e70

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <p className='Accomodation1_head'>{accommodationData.main_title[selectedLanguage]}</p>
          <p className='Accomodation_desc'>{accommodationData.main_desc[selectedLanguage]}</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {accommodationData.card_details.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
<<<<<<< HEAD
              <div className="box-accom-custom">
                <img src={item.imgSrc} className='over-img-accomodation' alt="acc_image" />
=======
              <div className="box-accom-custom m-auto">
                <img src={item.imgSrc} className='over-img-accomodation ' alt="acc_image" />
>>>>>>> 38ad342e0030567fafadde58ef9a7902a83b1e70
                <div className="box-accom-title">{item.title[selectedLanguage]}</div>
                <div className="box-accom-des">{item.description[selectedLanguage]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row">
<<<<<<< HEAD
          <p className='Accomodation1_head'>Service is our middle name</p>
          <p className='Accomodation_desc'>Feel at home in our kite hotel. Every evening we prepare a delicious meal for you while you discuss the day's adventures with other kiters while enjoying an ice-cold drink on the roof terrace with a beautiful setting sun. In the morning you will be on the water in no time with the help of our kite boys and your room will be equipped with everything you need for a comfortable stay.</p>
        </div>
      </div> */}
      {/* <div className="container">
        <div className="row">
          {serviceData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="box-accom-custom">
                <img src={item.imgSrc} className='over-img-accomodation' alt="acc_image" />
                <div className="box-accom-title">{item.title}</div>
                <div className="box-accom-des">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="container-fluid">
        <div className="row">
=======
>>>>>>> 38ad342e0030567fafadde58ef9a7902a83b1e70
          <p className='Accomodation1_head'>{accommodationData.location_title[selectedLanguage]}</p>
          <p className='Accomodation1_head'>{accommodationData.location_subtitle[selectedLanguage]}</p>
          <p className='Accomodation_desc'>{accommodationData.location_desc[selectedLanguage]}</p>
        </div>
        <div className="row">
          {/* <iframe></iframe> */}
          <iframe src={accommodationData.iframe} width="600" height="300" title='map' style={{border:"0", marginBottom:'5%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}



export default Accomodation;
