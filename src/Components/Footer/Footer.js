import React from 'react'
import { Link } from 'react-router-dom'

import footerlogo from '../../Images/logo-kiteactive.svg'

  const footerhead = {
    headtitle : {
      en: "Unlock Your Surfing Adventure: Join Our Membership for 30€ Off",
      du: "Ontgrendel je surfavontuur: Word lid van onze community en ontvang 30€ korting op je volgende surftrip!",
      nl: "Word lid van onze ledencommunity en ontvang 30€ korting op je volgende surftrip!"
    }

  }

  const sections = [
    {
        heading: {
            en: 'KiteActive World',
            du: 'KiteActive Wereld', // Dutch translation
            nl: 'KiteActive Wereld', // Netherlands translation
        },
        links: [
            {
                to: '/',
                text: {
                    en: 'Kite Camps',
                    du: 'Kite Camps', // Dutch translation
                    nl: 'Kitekampen', // Netherlands translation
                },
            },
            {
                to: '/',
                text: {
                    en: 'Discover KiteActive',
                    du: 'Ontdek KiteActive', // Dutch translation
                    nl: 'Ontdek KiteActive', // Netherlands translation
                },
            },
            {
                to: '/',
                text: {
                    en: 'KiteActive Team',
                    du: 'KiteActive Team', // Dutch translation
                    nl: 'KiteActive Team', // Netherlands translation
                },
            },
            {
                to: '/',
                text: {
                    en: 'Kitesurfing Packages',
                    du: 'Kitesurfpakketten', // Dutch translation
                    nl: 'Kitesurf Pakketten', // Netherlands translation
                },
            },
            {
                to: '/',
                text: {
                    en: 'Become Teamrider',
                    du: 'Word Teamrijder', // Dutch translation
                    nl: 'Word Teamrijder', // Netherlands translation
                },
            },
        ],
    },
    {
        heading: {
            en: 'KiteActive World',
            du: 'KiteActive Wereld', // Dutch translation
            nl: 'KiteActive Wereld', // Netherlands translation
        },
        links: [
            {
                to: '/',
                text: {
                    en: 'About Us',
                    du: 'Over ons', // Dutch translation
                    nl: 'Over ons', // Netherlands translation
                },
            },
            {
                to: '/',
                text: {
                    en: 'Booking & Payment',
                    du: 'Boeking en Betaling', // Dutch translation
                    nl: 'Boeking & Betaling', // Netherlands translation
                },
            },
            {
                to: '/',
                text: {
                    en: 'Privacy Policy',
                    du: 'Privacybeleid', // Dutch translation
                    nl: 'Privacybeleid', // Netherlands translation
                },
            },
            {
                to: '/',
                text: {
                    en: 'Terms & Conditions',
                    du: 'Algemene Voorwaarden', // Dutch translation
                    nl: 'Algemene Voorwaarden', // Netherlands translation
                },
            },
            {
                to: '/',
                text: {
                    en: 'Cookies Policy',
                    du: 'Cookiebeleid', // Dutch translation
                    nl: 'Cookiebeleid', // Netherlands translation
                },
            },
        ],
    },
];


const footerdata = {
  maindesc: {
      en: "Join the KiteActive community! Discover the best kitespots in the world and make new friends! Together with our team we will make sure you will have the adventure of a lifetime!",
      du: "Sluit je aan bij de KiteActive-gemeenschap! Ontdek de beste kitespots ter wereld en maak nieuwe vrienden! Samen met ons team zorgen we ervoor dat je het avontuur van je leven beleeft!", // Dutch translation
      nl: "Sluit je aan bij de KiteActive-gemeenschap! Ontdek de beste kitespots ter wereld en maak nieuwe vrienden! Samen met ons team zorgen we ervoor dat je het avontuur van je leven beleeft!", // Netherlands translation
  },
  heading: {
      en: "Contact Us",
      du: "Neem contact met ons op", // Dutch translation
      nl: "Neem contact met ons op", // Netherlands translation
  },
  para: {
      en: "For kitesurfing trips and inquiries, reach out to us! Contact our team today for the ride of your life!",
      du: "Voor kitesurfreizen en vragen kunt u contact met ons opnemen! Neem vandaag nog contact op met ons team voor de rit van je leven!", // Dutch translation
      nl: "Voor kitesurfreizen en vragen kunt u contact met ons opnemen! Neem vandaag nog contact op met ons team voor de rit van je leven!", // Netherlands translation
  },
};


const Footer = ({selectedLanguage}) => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row footer_headcontainer pt-4'>

                    <div className='col-md-7 footer_headcontainer_text p-4'>
                        <p>{footerhead.headtitle[selectedLanguage]}</p>
                    </div>
                    <div className='col-md-5 m-auto'>
                        <div class="input-group mb-3 w-75">
                            <input type="text" class="form-control p-2" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary emailbtn" type="button">subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="footer footer_bg">
                        <section class="py-4 py-md-5 py-xl-8">
                            <div class="container-fluid overflow-hidden">
                                <div class="row gy-4 gy-lg-0 justify-content-xl-between">

                                    {/* col one  */}
                                    <div class="col-12 col-md-4 col-lg-4 col-xl-3 p-0 m-0 mx-2">
                                        <div class="widget">
                                            <Link to="/">
                                                <img src={footerlogo} alt="Logo" className='footerlogo' />
                                            </Link>
                                        </div>

                                        <div className='text-light'>
                                            <p className='mt-4'>{footerdata.maindesc[selectedLanguage]}</p>
                                        </div>


                                    </div>

                                    {sections.map((section, index) => (
                                      <div class="col-12 col-md-4 col-lg-2 col-xl-2 text-light p-0 m-0">
                                      <div>
                                          <h4 class="fw-bold mb-4">{section.heading[selectedLanguage]}</h4>
                                          <ul class="list-unstyled">
                                          {section.links.map((link, index) => (
                                              <li class="mb-3" key={index}>
                                              <Link to={link.to} class="footer_link">
                                                  <i className="fa fa-angle-double-right me-2"></i>
                                                  {link.text[selectedLanguage]}
                                              </Link>
                                              </li>
                                          ))}
                                          </ul>
                                      </div>
                                      </div>
                                    ))}

                                    {/* col three  */}
                                    <div class="col-12 col-md-4 col-lg-4 col-xl-3 text-light m-0 p-0">
                                        <div class="">
                                            <h4 class="fw-bold">{footerdata.heading[selectedLanguage]}</h4>
                                            <p className='mt-4'>{footerdata.para[selectedLanguage]}</p>

                                        </div>

                                        <div className="navbar-nav TNB mt-3">
                                        {/* socila icons  */}
                                            {/* <div className='d-flex'>
                                                <Link to="/" className="nav-link me-5"> <i className='fa fa-facebook fa_icon_footer'></i></Link>
                                                <Link to="/" className="nav-link me-5"> <i className='fa fa-instagram  fa_icon_footer'></i></Link>
                                                <Link to="/" className="nav-link me-5"> <i className='fa fa-youtube fa_icon_footer '></i></Link>
                                                <Link to="/" className="nav-link me-5"> <i className='fa fa-twitter fa_icon_footer '></i></Link>
                                            </div> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                        {/* <!-- Copyright - Section --> */}
                        <div className="container-fluid p-3">
                            <div className="row border-top">
                                <div className="col">
                                    <div class="copyright text-center mt-3">
                                        &copy; KiteActive™ – Travel brand since 2011
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* copyright end  */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer