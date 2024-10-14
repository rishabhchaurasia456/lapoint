import React from 'react'
import '../../Pages/Pages.css';

import { Helmet } from 'react-helmet'

import headerbackimg from '../../Images/con_img.webp'
import lifeimg from '../../Images/img4.webp'
import icon1 from '../../Images/mail.webp'
import icon2 from '../../Images/whatsapp.webp'
import icon3 from '../../Images/phone-call.webp'

const mainContainer = {
    title: {
        en: "Contact us and make your surf dream a reality",
        nl: "Neem contact met ons op en maak je surfdroom waar",  // Netherlands Dutch (NL)
        du: "Neem contact met ons op en maak je surfdroom werkelijkheid"  // Dutch (DU)
    },

    para: {
        en: "KiteActive is your gateway to the ultimate kitesurfing adventure, where exhilaration meets luxury. Our expert instructors craft tailor-made lessons and clinics at some of the world’s most stunning kitesurfing destinations. Whether you’re a beginner or a seasoned rider, we’ve scouted the globe for the best locations to ensure an unforgettable experience on the water.",
        nl: "KiteActive is jouw toegangspoort tot het ultieme kitesurfavontuur, waar opwinding luxe ontmoet. Onze deskundige instructeurs bieden op maat gemaakte lessen en clinics op enkele van de meest adembenemende kitesurfbestemmingen ter wereld. Of je nu een beginner of een ervaren rijder bent, we hebben de beste locaties ter wereld gezocht om een onvergetelijke ervaring op het water te garanderen.",  // Netherlands Dutch (NL)
        du: "KiteActive is jouw toegang tot het ultieme kitesurfavontuur, waar opwinding luxe ontmoet. Onze deskundige instructeurs bieden op maat gemaakte lessen en clinics aan op enkele van de meest adembenemende kitesurfbestemmingen ter wereld. Of je nu een beginner bent of een doorgewinterde rijder, we hebben wereldwijd gezocht naar de beste locaties om een onvergetelijke ervaring op het water te garanderen."  // Dutch (DU)
    },

    title2: {
        en: "Does something feel unclear?",
        nl: "Voelt iets onduidelijk?",  // Netherlands Dutch (NL)
        du: "Voelt er iets onduidelijk?",  // Dutch (DU)
    },

    title4: {
        en: "Get in Touch!",
        nl: "Neem contact op!",  // Netherlands Dutch (NL)
        du: "Neem contact op!"  // Dutch (DU)
    },


  title5: {
        en: "Free rebooking up to 14 days prior to arrival",
        nl: "Gratis omboeken tot 14 dagen voor aankomst",  // Netherlands Dutch (NL)
        du: "Gratis omboeken tot 14 dagen voor aankomst",  // Dutch (DU)
    },

    lifestylepara: {
        en: "A professional kite team, on the beach and behind the computer. We organize your kitesurfing trip down to the last detail. We look forward to meeting you and having a great time together! Whether you're a beginner looking to learn the basics or an experienced kitesurfer seeking the thrill of new adventures, our team is here to support you every step of the way. From selecting the best locations with optimal wind conditions to arranging accommodations and equipment, we handle it all.",
        nl: "Een professioneel kite team, op het strand en achter de computer. We organiseren je kitesurftrip tot in de kleinste details. We kijken ernaar uit om je te ontmoeten en samen een geweldige tijd te hebben! Of je nu een beginner bent die de basis wil leren of een ervaren kitesurfer die op zoek is naar de opwinding van nieuwe avonturen, ons team is er om je bij elke stap te ondersteunen. Van het selecteren van de beste locaties met optimale windomstandigheden tot het regelen van accommodaties en apparatuur, wij regelen het allemaal.",  // Netherlands Dutch (NL)
        du: "Een professioneel kite team, op het strand en achter de computer. We organiseren je kitesurftrip tot in de kleinste details. We kijken ernaar uit om je te ontmoeten en samen een geweldige tijd te hebben! Of je nu een beginner bent die de basis wil leren of een ervaren kitesurfer die op zoek is naar de opwinding van nieuwe avonturen, ons team is er om je bij elke stap te ondersteunen. Van het selecteren van de beste locaties met optimale windomstandigheden tot het regelen van accommodaties en uitrusting, wij regelen het allemaal.",  // Dutch (DU)
    }
};

   

const Contactus = ({ selectedLanguage }) => {

    return (
        <div>
            {/* For seo  */}
            <Helmet>
                <title>Contact Us - KiteActive: Your Kitesurfing Experts </title>

                <meta name="description" content="Get in touch with KiteActive for all your kitesurfing needs. Our team is here to help with lessons, gear, and more. Contact us today!." />

                <meta name="keywords" content="kite surfing, kitesurfing trips, kitesurf spots, kite surfing lessons, kitesurfing lessons worldwide, kitesurf vacation, kite travel, kitesurf holiday" />

                <link rel="canonical" href="https://www.kiteactiveventures.com/contact"/>
            </Helmet>



            <div className="page_cont">
                <img src={headerbackimg} className='headerbackimg' alt="" />
            </div>

            {/* image background content  */}


            <div className='main_container'> 
                <h1 className='contact_text'> {mainContainer.title[selectedLanguage]}</h1>
                <p className='contact_para'>{mainContainer.para[selectedLanguage]} </p>
                <div className=" fw-bold  text-center fs-4 mt-5">
                {mainContainer.title2[selectedLanguage]}                  
                </div>
                <h1 className='contact_text'>{mainContainer.title4[selectedLanguage]}</h1>
            </div>


            <div className=' container crd_main_div'>
                <div className="row text-center">
                    <div className="col-lg-4">
                        <div className="card crd_div    ">
                            <img src={icon1} className='card_icon m-auto w-25' alt="" />
                            <div className="crd_title m-3">Email</div>
                            <div className="crd_title2">Click on icon to submit</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card crd_div">
                            <img src={icon2} className='card_icon m-auto w-25' alt="" />
                            <div className="crd_title m-3">Whatsapp</div>
                            <div className="crd_title2">+478075757558</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card crd_div">
                            <img src={icon3} className='card_icon m-auto  w-25' alt="" />
                            <div className="crd_title m-3">Phone</div>
                            <div className="crd_title2">+46 188 008 125</div>
                        </div>
                    </div>
                </div>
            </div>




            <div className='container mt-5  pt-5 '>
                <div className='row mt-3'>
                    <div className='col-md-6'>
                        <div className='lifestyle_div'>
                            <img src={lifeimg} className='lifestyle' alt="lifestyle" />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="life_style_div">
                            <div className="">
                                <h1 className="lifestyle_heading">
                                {mainContainer.title5[selectedLanguage]}                                   
                                </h1>
                            </div>
                            <div className="">
                                <h1 className="lifestyle_para">
                                    <p> {mainContainer.lifestylepara[selectedLanguage]}</p>                                  
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Contactus
