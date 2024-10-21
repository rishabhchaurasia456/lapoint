import React from 'react'
// import hotel1 from "../../../Images/hotel1.webp";
// import hotel2 from "../../../Images/hotel2.webp";
// import hotel3 from "../../../Images/hotel3.webp";

// import service1 from "../../../Images/service1.webp";
// import service2 from "../../../Images/service2.webp";
// import service3 from "../../../Images/service3.webp";

// const accomodationData = [
//   {
//     hotel:[
//       {
//         imgSrc: hotel1,
//         title: "SHARED ROOM",
//         description: "Sleep in a room with a maximum of 2 other kiters. We try to keep ladies and gentlemen separate."
//       },
//       {
//         imgSrc: hotel2,
//         title: "PRIVATE ROOM",
//         description: "Would you like to enjoy a little more privacy? Book a private room for a surcharge of €30/night."
//       },
//       {
//         imgSrc: hotel3,
//         title: "DELUXE SUITE",
//         description: "You can share a room with your friend at no extra cost. Please let us know when you make your booking."
//       }
//     ]
//   },
//   {
//     service:[
//       {
//         imgSrc: service1,
//         title: "ROOFTOP TERRACE",
//         description: "Sleep in a room with a maximum of 2 other kiters. We try to keep ladies and gentlemen separate."
//       },
//       {
//         imgSrc: service2,
//         title: "KITE SERVICE IN OUR CENTER",
//         description: "Would you like to enjoy a little more privacy? Book a private room for a surcharge of €30/night."
//       },
//       {
//         imgSrc: service3,
//         title: "PERFECT LOCATION",
//         description: "You can share a room with your friend at no extra cost. Please let us know when you make your booking."
//       }
//     ]
//   }
// ];

const Accomodation = ({ accommodationData, selectedLanguage }) => {


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
