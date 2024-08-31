import React from 'react'
import { Link } from 'react-router-dom'

import footerlogo from '../../Images/logo-kiteactive.svg'

  const footerhead = {
    headtitle : {
      en: "Join our Membership Community and get 30€ off on your next surf trip!",
      hi: "हमारे सदस्यता समुदाय में शामिल हों और अपनी अगली सर्फ यात्रा पर 30€ की छूट पाएं!",
      nl: "Word lid van onze ledencommunity en ontvang 30€ korting op je volgende surftrip!"
    }

  }

  const sections = [
    {
      heading: {
        en: 'KiteActive World',
        hi: 'काइटएक्टिव वर्ल्ड',
        nl: 'KiteActive Wereld',
      },
      links: [
        {
          to: '/',
          text: {
            en: 'Kite Camps',
            hi: 'काइट कैंप्स',
            nl: 'Kitekampen',
          },
        },
        {
          to: '/',
          text: {
            en: 'Discover KiteActive',
            hi: 'काइटएक्टिव के बारे में जानें',
            nl: 'Ontdek KiteActive',
          },
        },
        {
          to: '/',
          text: {
            en: 'KiteActive Team',
            hi: 'काइटएक्टिव टीम',
            nl: 'KiteActive Team',
          },
        },
        {
          to: '/',
          text: {
            en: 'Kitesurfing Packages',
            hi: 'काइटसर्फिंग पैकेज',
            nl: 'Kitesurf Pakketten',
          },
        },
        {
          to: '/',
          text: {
            en: 'Become Teamrider',
            hi: 'टीम राइडर बनें',
            nl: 'Word Teamrijder',
          },
        },
      ],
    },
    {
      heading: {
        en: 'KiteActive World',
        hi: 'काइटएक्टिव वर्ल्ड',
        nl: 'KiteActive Wereld',
      },
      links: [
        {
          to: '/',
          text: {
            en: 'About Us',
            hi: 'हमारे बारे में',
            nl: 'Over ons',
          },
        },
        {
          to: '/',
          text: {
            en: 'Booking & Payment',
            hi: 'बुकिंग और भुगतान',
            nl: 'Boeking & Betaling',
          },
        },
        {
          to: '/',
          text: {
            en: 'Privacy Policy',
            hi: 'गोपनीयता नीति',
            nl: 'Privacybeleid',
          },
        },
        {
          to: '/',
          text: {
            en: 'Terms & Condition',
            hi: 'नियम और शर्तें',
            nl: 'Algemene Voorwaarden',
          },
        },
        {
          to: '/',
          text: {
            en: 'Cookies Policy',
            hi: 'कुकीज नीति',
            nl: 'Cookiebeleid',
          },
        },
      ],
    },
  ];

  const footerdata = {
    maindesc: {
      en: "Join the KiteActive community! Discover the best kitespots in the world and make new friends! Together with our team we will make sure you will have the adventure of a lifetime!",
      hi: "काइटएक्टिव समुदाय से जुड़ें! दुनिया के बेहतरीन काइटस्पॉट्स की खोज करें और नए दोस्तों से मिलें! हमारी टीम के साथ मिलकर हम यह सुनिश्चित करेंगे कि आपके पास जीवनभर का रोमांच हो!",
      nl: "Sluit je aan bij de KiteActive-gemeenschap! Ontdek de beste kitespots ter wereld en maak nieuwe vrienden! Samen met ons team zorgen we ervoor dat je het avontuur van je leven beleeft!",
    },
    heading: {
      en: "Contact Us",
      hi: "हमसे संपर्क करें",
      nl: "Neem contact met ons op",
    },
    para: {
      en: "For kitesurfing trips and inquiries, reach out to us! Contact our team today for the ride of your life!",
      hi: "काइटसर्फिंग यात्राओं और पूछताछ के लिए, हमसे संपर्क करें! अपने जीवन की सवारी के लिए आज ही हमारी टीम से संपर्क करें!",
      nl: "Voor kitesurfreizen en vragen kunt u contact met ons opnemen! Neem vandaag nog contact op met ons team voor de rit van je leven!",
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
                                            <Link to="/demo/gfastreact/">
                                                <img src={footerlogo} alt="Logo" className='footerlogo' />
                                            </Link>
                                        </div>

                                        <div className='text-light'>
                                            <p className='mt-4'>{footerdata.maindesc[selectedLanguage]}</p>
                                        </div>


                                    </div>

                                    {/* Col two  */}
                                    {/* <div class="col-12 col-md-4 col-lg-2 col-xl-2 text-light p-0 m-0">
                                        <div class="">
                                            <h4 class="fw-bold mb-4">KiteActive World</h4>
                                            <ul class="list-unstyled">
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link"> <i className='fa fa-angle-double-right me-2'></i>Kite Camps</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Discover KiteActive</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>KiteActive Team</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Kitesurfing Packages</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Become Teamrider</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-2 col-xl-2 text-light p-0 m-0">
                                        <div class="">
                                            <h4 class="fw-bold mb-4">Important Links</h4>
                                            <ul class="list-unstyled">
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link"> <i className='fa fa-angle-double-right me-2'></i>About Us</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Booking & Payment</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Privacy Policy</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Terms & Condition</Link>
                                                </li>
                                                <li class="mb-3">
                                                    <Link to='/' class="footer_link">  <i className='fa fa-angle-double-right me-2'></i>Cookies Policy</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div> */}
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
                                            <div className='d-flex'>
                                                <Link to="/" className="nav-link me-5"> <i className='fa fa-facebook fa_icon_footer'></i></Link>
                                                <Link to="/" className="nav-link me-5"> <i className='fa fa-instagram  fa_icon_footer'></i></Link>
                                                <Link to="/" className="nav-link me-5"> <i className='fa fa-youtube fa_icon_footer '></i></Link>
                                                <Link to="/" className="nav-link me-5"> <i className='fa fa-twitter fa_icon_footer '></i></Link>
                                            </div>


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