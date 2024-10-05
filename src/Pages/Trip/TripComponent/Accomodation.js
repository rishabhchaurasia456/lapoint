import React from 'react'
import hotel1 from "../../../Images/hotel1.webp";
import hotel2 from "../../../Images/hotel2.webp";
import hotel3 from "../../../Images/hotel3.webp";

import service1 from "../../../Images/service1.webp";
import service2 from "../../../Images/service2.webp";
import service3 from "../../../Images/service3.webp";

const accomodationData = [
  {
    hotel:[
      {
        imgSrc: hotel1,
        title: "SHARED ROOM",
        description: "Sleep in a room with a maximum of 2 other kiters. We try to keep ladies and gentlemen separate."
      },
      {
        imgSrc: hotel2,
        title: "PRIVATE ROOM",
        description: "Would you like to enjoy a little more privacy? Book a private room for a surcharge of €30/night."
      },
      {
        imgSrc: hotel3,
        title: "DELUXE SUITE",
        description: "You can share a room with your friend at no extra cost. Please let us know when you make your booking."
      }
    ]
  },
  {
    service:[
      {
        imgSrc: service1,
        title: "ROOFTOP TERRACE",
        description: "Sleep in a room with a maximum of 2 other kiters. We try to keep ladies and gentlemen separate."
      },
      {
        imgSrc: service2,
        title: "KITE SERVICE IN OUR CENTER",
        description: "Would you like to enjoy a little more privacy? Book a private room for a surcharge of €30/night."
      },
      {
        imgSrc: service3,
        title: "PERFECT LOCATION",
        description: "You can share a room with your friend at no extra cost. Please let us know when you make your booking."
      }
    ]
  }
];

const Accomodation = () => {
  const hotelData = accomodationData.find(data => data.hotel)?.hotel || [];
  const serviceData = accomodationData.find(data => data.service)?.service || [];

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <p className='Accomodation1_head'>Feel at Home in our Kiteactive Hotel</p>
          <p className='Accomodation_desc'>We proudly present you our own KiteActive Hotel on the beach in Paje. The ideal set-up for kite surfers. The atmosphere and our team ensure a top stay with everything you need within reach!</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {hotelData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="box-accom-custom">
                <img src={item.imgSrc} className='over-img-accomodation' alt="acc_image" />
                <div className="box-accom-title">{item.title}</div>
                <div className="box-accom-des">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <p className='Accomodation1_head'>Service is our middle name</p>
          <p className='Accomodation_desc'>Feel at home in our kite hotel. Every evening we prepare a delicious meal for you while you discuss the day's adventures with other kiters while enjoying an ice-cold drink on the roof terrace with a beautiful setting sun. In the morning you will be on the water in no time with the help of our kite boys and your room will be equipped with everything you need for a comfortable stay.</p>
        </div>
      </div>
      <div className="container">
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
      </div>
      <div className="container-fluid">
        <div className="row">
          <p className='Accomodation1_head'>How to get here</p>
          <p className='Accomodation1_head'>The Caribbean of Africa</p>
          <p className='Accomodation_desc'>We proudly present you our own KiteActive Hotel on the beach in Paje. The ideal set-up for kite surfers. The atmosphere and our team ensure a top stay with everything you need within reach!</p>
        </div>
        <div className="row">
          {/* <iframe></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7931.967296071621!2d39.52781068769302!3d-6.2658804101041286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185d3d0a989c2b8f%3A0xd23378fca6a1a8db!2sPaje%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1725534658936!5m2!1sen!2sus" width="600" height="300" title='map' style={{border:"0", marginBottom:'5%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Accomodation;
