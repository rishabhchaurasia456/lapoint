import React from 'react'

import bgimg from '../../Images/bg_img.webp';

const content = {
    title: {
        en: "Sustainability",
        gr: "Nachhaltigkeit",
        du: "Duurzaamheid",
    },

    subtitle: {
        en: "Thrills and Chills: Your Kiteactive Adventure Awaits",
        gr: "Spannung und Nervenkitzel: Dein Kiteactive-Abenteuer wartet auf dich",
        du: "Spanning en Koud: Jouw Kiteactive Avontuur Wacht.",
    },

    para: {
        en: "Get ready to embark on an unforgettable journey filled with thrills and chills with Kiteactive! From the exhilarating rush of kitesurfing over breathtaking waves to the serene moments spent soaking in stunning coastal views, our adventures cater to all levels of experience. Feel the adrenaline surge as you harness the power of the wind, and enjoy the thrill of mastering new skills alongside our expert instructors. Whether you're seeking the excitement of high-flying tricks or the tranquility of gliding across calm waters, Kiteactive promises a unique experience that will leave you invigorated and inspired.",
        gr: "Mach dich bereit, eine unvergessliche Reise voller Spannung und Nervenkitzel mit Kiteactive zu beginnen! Von dem aufregenden Rausch des Kitesurfens über atemberaubende Wellen bis hin zu den ruhigen Momenten, in denen du die atemberaubende Küstenlandschaft genießt, unsere Abenteuer sind für alle Erfahrungsstufen geeignet. Spüre den Adrenalinschub, während du die Kraft des Windes nutzt und genieße den Nervenkitzel, neue Fähigkeiten unter der Anleitung unserer erfahrenen Lehrer zu erlernen.",
        du: "Maak je klaar om aan een onvergetelijke reis te beginnen vol spanning en sensatie met Kiteactive! Van de opwindende kick van kitesurfen over adembenemende golven tot de serene momenten die je doorbrengt terwijl je geniet van prachtige kustlandschappen, onze avonturen zijn geschikt voor alle niveaus van ervaring. Voel de adrenaline stijgen terwijl je de kracht van de wind benut en geniet van de spanning van het beheersen van nieuwe vaardigheden onder begeleiding van onze deskundige instructeurs. Of je nu op zoek bent naar de opwinding van hoge sprongen of de rust van het glijden over kalme wateren, Kiteactive belooft een unieke ervaring die je verkwikt en inspireert.",
    }
}

const Bgimage = ({selectedLanguage}) => {
    return (
        <div>


            <div className="container-fluid mt-5 ">
                <div className="row ">
                    <div className="col m-0 p-0">
                        <div className="bg_image2" style={{ backgroundImage: `url(${bgimg})` }}>
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                    <p className='bg_text'>{content.title[selectedLanguage]}</p>
                                        <h1 className='bg_heading'>
                                        {content.subtitle[selectedLanguage]}
                                        </h1>
                                        <p className="bg_para">
                                        {content.para[selectedLanguage]}
                                        </p>
                                    </div>
                                    <div className="col-lg-6">                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bgimage
