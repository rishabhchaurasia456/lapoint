import React from 'react'
import vedio from "../../Images/website.filmpje.tarifa.mp4"
// import './Pages.css'
import '../../Pages/Pages.css';
//  import bigimg from '../../Images/abimg.png'
import img1 from '../../Images/ab1.webp'
import img2 from '../../Images/ab2.webp'
import img3 from '../../Images/ab3.webp'
import imga1 from '../../Images/ab2_1.webp'
import imga2 from '../../Images/ab2_2.webp'
import imga3 from '../../Images/ab2_3.webp'
import Bgimage from '../../Components/Bgimage/Bgimage';

import { Helmet } from 'react-helmet'



const aboutcontent = {
    title: {
      en: "Our essence - Good Times",
      gr: "Unser Wesen - Gute Zeiten", // German (GR)
      du: "Onze essentie - Goede Tijden"
    },
    
    para: {
      en: "At KiteActive, we believe in building a global community of kitesurfers who live and breathe the kiteboarding life. Every trip is designed not only to chase the best winds but to forge lasting connections and friendships that transcend borders. With KiteActive, you're not just embarking on a trip—you're joining a movement that embraces freedom, adventure, and the love of kitesurfing.",
      gr: "Bei KiteActive glauben wir daran, eine globale Gemeinschaft von Kitesurfern aufzubauen, die das Kiteboarding-Leben leben und atmen. Jede Reise ist so konzipiert, dass nicht nur die besten Winde verfolgt werden, sondern auch dauerhafte Verbindungen und Freundschaften entstehen, die Grenzen überschreiten. Mit KiteActive begibst du dich nicht nur auf eine Reise – du schließt dich einer Bewegung an, die Freiheit, Abenteuer und die Liebe zum Kitesurfen umarmt.", // German (GR)
      du: "Bij KiteActive geloven we in het opbouwen van een wereldwijde gemeenschap van kitesurfers die leven en ademen voor de kiteboarding levensstijl. Elke reis is ontworpen om niet alleen de beste winden te achtervolgen, maar ook om blijvende verbindingen en vriendschappen te smeden die grenzen overschrijden. Met KiteActive ga je niet alleen op reis—je sluit je aan bij een beweging die vrijheid, avontuur en de liefde voor kitesurfen omarmt.",
    }
  };
  
  const aboutbgcontent = {
    title: {
      en: "The Kiteactive Story",         
      gr: "Die Kiteactive-Geschichte", // German (GR)
      du: "Het Kiteactive Verhaal"
    }
  };
  
  const ourmindset = {
    title: {
      en: "Our Mindset",
      gr: "Unsere Denkweise", // German (GR)
      du: "Onze Mentaliteit"
    },
  
    subtitle: {
      en: "Be a Friend",
      gr: "Sei ein Freund", // German (GR)
      du: "Wees een Vriend"
    },
  
    para1: {
      en: "At KiteActive, our mindset revolves around freedom, exploration, and community.",
      gr: "Bei KiteActive dreht sich unsere Denkweise um Freiheit, Erkundung und Gemeinschaft.", // German (GR)
      du: "Bij KiteActive draait onze mentaliteit om vrijheid, verkenning en gemeenschap."
    },
  
    para2: {
      en: "To the Guests, by being cool, and always prepared to go the extra mile when needed.",
      gr: "Für die Gäste, indem wir entspannt sind und immer bereit, bei Bedarf die Extra-Meile zu gehen.", // German (GR)
      du: "Voor de gasten, door cool te zijn en altijd bereid te zijn een stap extra te zetten wanneer nodig."
    },
  
    para3: {
      en: "Our mindset is about more than just the sport; it’s about living a life of adventure, passion, and authenticity.",
      gr: "Unsere Denkweise dreht sich nicht nur um den Sport; es geht darum, ein Leben voller Abenteuer, Leidenschaft und Authentizität zu leben.", // German (GR)
      du: "Onze mentaliteit gaat over meer dan alleen de sport; het gaat om een leven vol avontuur, passie en authenticiteit."
    },
  
    para4: {
      en: "Adventure is in our DNA. We’re constantly seeking out new destinations, fresh experiences, and untamed waters that challenge us to improve, learn, and thrive.",
      gr: "Abenteuer liegt in unserer DNA. Wir sind ständig auf der Suche nach neuen Zielen, frischen Erlebnissen und ungezähmten Gewässern, die uns herausfordern, besser zu werden, zu lernen und zu gedeihen.", // German (GR)
      du: "Avontuur zit in ons DNA. We zijn constant op zoek naar nieuwe bestemmingen, frisse ervaringen en ongetemde wateren die ons uitdagen om beter te worden, te leren en te gedijen."
    }
  };
  
  const ourhistory = {
    head: {
      en: "Life should feel like this every day",
      gr: "So sollte sich das Leben jeden Tag anfühlen", // German (GR)
      du: "Het leven zou elke dag zo moeten voelen"
    },
  
    title: {
      en: "Our History",
      gr: "Unsere Geschichte", // German (GR)
      du: "Onze Geschiedenis"
    },
  
    subtitle1: {
      en: "The origin of good times", 
      gr: "Der Ursprung guter Zeiten", // German (GR)
      du: "De oorsprong van goede tijden"
    },
  
    para1: {
      en: "Are you ready for the ultimate kitesurf experience? Let us take you on a kitetrip like no other, where every moment is packed with excitement, discovery, and the wind at your back. Whether you're here for the adrenaline or the camaraderie, KiteActive is your gateway to an unforgettable kitesurfing journey.",
      gr: "Bist du bereit für das ultimative Kitesurferlebnis? Lass uns dich auf einen Kitetrip mitnehmen, der seinesgleichen sucht, bei dem jeder Moment voller Spannung, Entdeckung und Rückenwind steckt. Ob du wegen des Adrenalins oder der Kameradschaft hier bist, KiteActive ist dein Tor zu einer unvergesslichen Kitesurfreise.", // German (GR)
      du: "Ben je klaar voor de ultieme kitesurfervaring? Laat ons je meenemen op een kitetrip zoals geen ander, waar elk moment vol spanning, ontdekking en de wind in je rug zit. Of je nu komt voor de adrenaline of de vriendschap, KiteActive is jouw toegang tot een onvergetelijke kitesurfreis."
    },
  
    para2: {
      en: "KiteActive is dedicated to delivering the ultimate kitesurfing holiday, combining thrilling lessons and clinics with stunning global destinations.",
      gr: "KiteActive ist darauf spezialisiert, den ultimativen Kitesurf-Urlaub zu bieten, bei dem aufregende Lektionen und Kliniken mit atemberaubenden globalen Zielen kombiniert werden.", // German (GR)
      du: "KiteActive is toegewijd aan het bieden van de ultieme kitesurfvakantie, waarbij spannende lessen en clinics worden gecombineerd met prachtige wereldbestemmingen."
    },
  
    subtitle2: {
      en: "Life should feel like this every day.",
      gr: "So sollte sich das Leben jeden Tag anfühlen.", // German (GR)
      du: "Het leven zou elke dag zo moeten voelen."
    },
  
    para3: {
      en: "That was the comment that sparked the breakfast conversation that a few months later would lead to Sebastian’s and Alex’s idea of Lapoint. Peter joined the boys shortly after and so did long time friend Göran.",
      gr: "Das war der Kommentar, der das Frühstücksgespräch auslöste, das ein paar Monate später zu Sebastian's und Alex' Idee von Lapoint führte. Peter schloss sich den Jungs kurz darauf an, ebenso wie ihr langjähriger Freund Göran.", // German (GR)
      du: "Dat was de opmerking die het ontbijtgesprek op gang bracht dat enkele maanden later zou leiden tot het idee van Sebastian en Alex voor Lapoint. Peter voegde zich kort daarna bij de jongens, net als hun oude vriend Göran."
    },
  
    para4: {
      en: "Our expert team of instructors curates exceptional locations, ensuring you get the best spots to ride the waves.",
      gr: "Unser Expertenteam von Ausbildern wählt außergewöhnliche Orte aus, um sicherzustellen, dass du die besten Spots zum Wellenreiten bekommst.", // German (GR)
      du: "Ons deskundige team van instructeurs stelt uitzonderlijke locaties samen, zodat je de beste plekken krijgt om de golven te rijden."
    }
  };
  
  const ourlastword = {
    title: {
      en: "Our last words",
      gr: "Unsere letzten Worte", // German (GR)
      du: "Onze laatste woorden"
    },
  
    subtitle: {
      en: "I guess we will see you soon?",
      gr: "Ich denke, wir sehen uns bald?", // German (GR)
      du: "Ik denk dat we je snel zullen zien?"
    },
  
    para: {
      en: "At KiteActive, our mission is to craft the ultimate kitesurfing adventure for you, combining top-notch lessons and clinics with some of the world’s most breathtaking locations. We’re committed to providing an unparalleled experience, thanks to our dedicated team of professional instructors who know the best spots for kitesurfing and relaxation.",
      gr: "Bei KiteActive ist es unsere Mission, das ultimative Kitesurfabenteuer für dich zu gestalten, indem wir erstklassige Lektionen und Kliniken mit einigen der atemberaubendsten Orte der Welt kombinieren. Wir sind bestrebt, eine unvergleichliche Erfahrung zu bieten, dank unseres engagierten Teams von professionellen Ausbildern, die die besten Orte für Kitesurfen und Entspannung kennen.", // German (GR)
      du: "Bij KiteActive is het onze missie om het ultieme kitesurfavontuur voor jou samen te stellen, waarbij we eersteklas lessen en clinics combineren met enkele van de meest adembenemende locaties ter wereld. We streven ernaar om een ongeëvenaarde ervaring te bieden, dankzij ons toegewijde team van professionele instructeurs die de beste plekken kennen voor kitesurfen en ontspanning."
    }
  };
  


const Aboutus = ({ selectedLanguage }) => {
    return (
        <div>
            {/* for seo  */}
            <Helmet>
                <title>KiteActive: Exciting Kite & Sailing Trips Along West Frisian Islands</title>
                <meta name="description" content="Discover KiteActive's thrilling kitesurfing holidays with expert instructors at stunning destinations worldwide. Join us for an unforgettable adventure!" />
                <meta name="keywords" content="kite surfing, kitesurfing trips, kitesurf spots, kite surfing lessons, kitesurfing lessons worldwide, kitesurf vacation, kite travel, kitesurf holiday" />
                <link rel="canonical" href="https://www.kiteactiveventures.com/about" />
            </Helmet>


            {/* vedio container  */}

            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src={vedio} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* About us page  main content start here  */}
            <div className="container">
                <div className="ab_container">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className=" ab_text"> {aboutcontent.title[selectedLanguage]}</h1>
                            <p className='ab_para'>
                                {aboutcontent.para[selectedLanguage]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* big img container here  */}
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col">
                        <div className=" bg-image rounded-4">
                            <div className="bg_img_text">
                                {aboutbgcontent.title[selectedLanguage]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OUR mindsed  section  */}
            <div className="container">
                <div className="ab_container">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className=" text-start  mb-3 fs-4 ">{ourmindset.title[selectedLanguage]} </h1>
                            <h1 className=" ab2_text "><span className='text_span'> {ourmindset.subtitle[selectedLanguage]} </span></h1>
                            <p className='ab2_para'>{ourmindset.para1[selectedLanguage]} </p>
                            <p className='ab2_para'>{ourmindset.para2[selectedLanguage]} </p>
                            <p className='ab2_para'>{ourmindset.para3[selectedLanguage]} </p>
                            <p className='ab2_para'>{ourmindset.para4[selectedLanguage]} </p>

                        </div>
                    </div>
                </div>
            </div>

            {/*  image Section  here  */}

            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga1} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga2} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga3} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* (OUR HISTROY )Life should Component */}

            <div className="container">
                <div className="ab_container">
                    <div className="row">
                        <h1 className='text-center ab_text fw-bold mb-5'>
                            {ourhistory.head[selectedLanguage]}
                        </h1>
                        <div className="col text-center">
                            <h1 className=" text-start fs-4 "> {ourhistory.title[selectedLanguage]}</h1>
                            <h1 className=" ab2_text "><span className='text_span'>{ourhistory.subtitle1[selectedLanguage]}</span></h1>
                            <p className='ab2_para'>  {ourhistory.para1[selectedLanguage]}  </p>
                            <p className='ab2_para'> {ourhistory.para2[selectedLanguage]} </p>
                            <h1 className=" ab2_text "><span className='text_span'>{ourhistory.subtitle2[selectedLanguage]}</span></h1>
                            <p className='ab2_para'>{ourhistory.para3[selectedLanguage]}</p>
                            <p className='ab2_para'>{ourhistory.para4[selectedLanguage]}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second image Section  here  */}

            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={img1} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={img2} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={img3} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                </div>
            </div>



            {/* Our last words section */}
            <div className="container">
                <div className="ab_container">
                    <div className="row">
                        <h1 className="text-center fs-4 "> {ourlastword.title[selectedLanguage]}</h1>
                        <div className="col text-center">
                            <h1 className=" ab_text"> {ourlastword.subtitle[selectedLanguage]}</h1>
                            <p className='ab_para'>{ourlastword.para[selectedLanguage]}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga3} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga2} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div>
                            <img src={imga1} alt="" className="img-fluid rounded-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background image component  */}

            <Bgimage selectedLanguage={selectedLanguage}  />


        </div>
    )
}

export default Aboutus
