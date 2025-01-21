import React, { useEffect, useState } from 'react';

import hosted_earth from "../../Images/earth.webp";
import hosted_at from "../../Images/at.webp";

import team1 from "../../Images/Footerimg/annemaj.webp";
import team2 from "../../Images/Footerimg/flex.webp";
import team3 from "../../Images/Footerimg/Roderick.jpg";
import team4 from "../../Images/Footerimg/Aj.jpg";
import team5 from "../../Images//Footerimg/arnaud.jpg";
import team6 from "../../Images/Footerimg/jan_willem.jpg";
import team7 from "../../Images/Footerimg/bas_boode.webp";
import team8 from "../../Images/Footerimg/Emiel_Rense.webp";
import team9 from "../../Images/Boaz.png";
import team10 from "../../Images/jurret.webp";
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config/config';


const hostedData = [
  {
    hosted_img: team1,
    hosted_name: "Annemaj Muiser",
    hosted_position: "Photographer & Instructor",
    kite_exp: "6 years kite experience",
    hosted_para: "I love shooting awesome pictures and learn you our amazing sport.",
    hosted_msg_img: hosted_earth,
    hosted_msg_head: "Top Destination",
    hosted_msg: "Zanzibar",
    hosted_year_img: hosted_at,
    hosted_year_head: "KiteActive",
    hosted_year: "5 Years",
    link: '/Annemaj',
  },
  {
    hosted_img: team2,
    hosted_name: "Felix Maks",
    hosted_position: "Founder, Host & Instructor",
    kite_exp: "19 years kite experience",
    hosted_para: "It is amazing to share my passion for kitesurfing & travelling with you!",
    hosted_msg_img: hosted_earth,
    hosted_msg_head: "Top Destination",
    hosted_msg: "Dutch Islands",
    hosted_year_img: hosted_at,
    hosted_year_head: "KiteActive",
    hosted_year: "13 Years",
    link: '/Felix_Maks',
  },
  {
    hosted_img: team3,
    hosted_name: "Roderick Pijls",
    hosted_position: "Host & Instructor",
    kite_exp: "16 years kite experience",
    hosted_para: "It’s great to see that everyone has a little ‘Columbus’ inside that wants to explore",
    hosted_msg_img: hosted_earth,
    hosted_msg_head: "Top Destination",
    hosted_msg: "Brazil",
    hosted_year_img: hosted_at,
    hosted_year_head: "KiteActive",
    hosted_year: "9 Years",
    link: '/Roderickje_Pijls',
  },
  {
    hosted_img: team4,
    hosted_name: "Aj",
    hosted_position: "Instructor & Office",
    kite_exp: "15 years kite experience",
    hosted_para: "Kitesurfing started for me in 2007, after years of flying kites on land I now wanted to follow my friends onto the water.",
    hosted_msg_img: hosted_earth,
    hosted_msg_head: "Top Destination",
    hosted_msg: "Zanzibar",
    hosted_year_img: hosted_at,
    hosted_year_head: "KiteActive",
    hosted_year: "7 Years",
    link: '/aj',
  },
  {
    hosted_img: team5,
    hosted_name: "Arnaud Plas",
    hosted_position: "Photographer / Instructor",
    kite_exp: "13 years kite experience",
    hosted_para: "I have been working with KiteActive for a while and taking photos and videos is my job and passion.1",
    hosted_msg_img: hosted_earth,
    hosted_msg_head: "Top Destination",
    hosted_msg: "Cape Town",
    hosted_year_img: hosted_at,
    hosted_year_head: "KiteActive",
    hosted_year: "7 Years",
    link: '/Arnaud_Plas',
  },
  {
    hosted_img: team6,
    hosted_name: "Jan Willem dantuma",
    hosted_position: "Instructor & Host",
    kite_exp: "11 years kite experience",
    hosted_para: "As a Gym teacher my job is to motivate people to do activities and sports. Kitesurfing is my biggest passion and I will teach you everything I know!",
    hosted_msg_img: hosted_earth,
    hosted_msg_head: "Top Destination",
    hosted_msg: "Sicily",
    hosted_year_img: hosted_at,
    hosted_year_head: "KiteActive",
    hosted_year: "5 Years",
    link: '/',
  },
  {
    hosted_img: team7,
    hosted_name: "bas Boode",
    hosted_position: "Instructor / Designer",
    kite_exp: "10 years kite experience",
    hosted_para: "My name is Bas and I am an enthusiastic kitesurfer, who’s always up for some adrenaline",
    hosted_msg_img: hosted_earth,
    hosted_msg_head: "Top Destination",
    hosted_msg: "Dakhla",
    hosted_year_img: hosted_at,
    hosted_year_head: "KiteActive",
    hosted_year: "7 Years",
    link: '/Bas_Boode',
  },
  {
    hosted_img: team8,
    hosted_name: "Emiel Rense",
    hosted_position: "Host & Instructor",
    kite_exp: "19 years kite experience",
    hosted_para: "I have been kitesurfing for several years. Sharing my passion with others is what drives me",
    hosted_msg_img: hosted_earth,
    hosted_msg_head: "Top Destination",
    hosted_msg: "Dakhla",
    hosted_year_img: hosted_at,
    hosted_year_head: "KiteActive",
    hosted_year: "3 Years",
    link: '/EmielRense',
  },

  {
    hosted_img: team9,
    hosted_name: "Boaz Oketch",
    hosted_position: "Instructor & guide",
    kite_exp: "0 years kite experience",
    hosted_para: "My name is Boaz Oketch and I am from Mombasa in Kenya",
    hosted_msg_img: hosted_earth,
    hosted_msg_head: "Top Destination",
    hosted_msg: "Zanzibar ",
    hosted_year_img: hosted_at,
    hosted_year_head: "KiteActive",
    hosted_year: "11 Years",
    link: '/Boaz_Oketch',
  },
  {
    hosted_img: team10,
    hosted_name: "Jurret Van Der Vliet",
    hosted_position: "Instructor",
    kite_exp: "9 years kite experience",
    hosted_para: "My name is jurret and I like to have loads of fun, on and off the water",
    hosted_msg_img: hosted_earth,
    hosted_msg_head: "Top Destination",
    hosted_msg: "Brazil ",
    hosted_year_img: hosted_at,
    hosted_year_head: "KiteActive",
    hosted_year: "8 Years",
    link: '/Jurret_Van ',
  },
];



const Kiteactiveteam = () => {

  const [hostedData, setHostedData] = useState([])

  useEffect(() => async () => {
    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_myteam`);
      console.log("response", response)
      setHostedData(response.data)
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  }, []);

  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center surf_container">
        <div className="row">
          <div className="col">
            <h1 className=" surf_text text-center"> <span className='text_span'>meet our team</span></h1>
            <p className='surf_para mt-3 '>
              A group of Social and professional kiters
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row p-4">
          {hostedData.map((item, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="hosted_card h-100 shadow text-center">
                <Link to={item._id} className="nav-link">
                  <img
                    src={`${config.API_BASE_URL}/${item.img.replace(/\\/g, '/')}`}
                    className="hosted_card_img rounded-3"
                    alt={`Image of ${item.hosted_name}`}
                    width="100%"
                  />
                  <div className="hosted_card_body">
                    <p className="hosted_card_title fw-bold">{item.name}</p>
                    <p>{item.position}</p>
                    <p className="hosted_card_year">{item.totalExp}</p>
                    <p>{item.shortIntro}</p>
                    <p className="hosted_card_last">
                      <img
                        className="me-2"
                        src={hosted_earth}
                        alt="Message icon"
                        style={{ maxWidth: "25px" }}
                      />
                      <b>Top Destination</b>
                    </p>
                    <p className="hosted_card_last2">{item.destination}</p>
                    <p className="hosted_card_last">
                      <img
                        className="me-2"
                        src={hosted_at}
                        alt="Year icon"
                        style={{ maxWidth: "25px" }}
                      />
                      <b>KiteActive</b>
                    </p>
                    <p className="hosted_card_last2">{item.kiteactiveExp}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default Kiteactiveteam;
