import React from 'react'

import bgimg from '../../Images/bg_img.webp';

const content = {
    en: {
        title: "Sustainability",
        subtitle: "Thrills and Chills: Your Kiteactive Adventure Awaits",
        para: "Get ready to embark on an unforgettable journey filled with thrills and chills with Kiteactive! From the exhilarating rush of kitesurfing over breathtaking waves to the serene moments spent soaking in stunning coastal views, our adventures cater to all levels of experience. Feel the adrenaline surge as you harness the power of the wind, and enjoy the thrill of mastering new skills alongside our expert instructors. Whether you're seeking the excitement of high-flying tricks or the tranquility of gliding across calm waters, Kiteactive promises a unique experience that will leave you invigorated and inspired. Your adventure starts here—join us and embrace the excitement that awaits!"
    },
    du: {
        title: "Duurzaamheid",
        subtitle: "2011, KiteActive werd geboren",
        para: "KiteActive heeft begonnen met het organiseren van kite- en zeilreizen langs de Waddeneilanden. De combinatie van een week intensief kitesurfen (lessen) en een week vakantie op een plek met de ingrediënten: wind, strand, water en een relaxte sfeer bleek een goed concept te zijn. Onze passie voor reizen en kitesurfen heeft ervoor gezorgd dat we veel kitespots in de wereld hebben bezocht en nog steeds op zoek zijn naar de beste bestemmingen om (leren) kitesurfen. Dankzij de ervaringen en enthousiasme van onze instructeurs, is KiteActive blijven groeien."
    },
    nl: {
        title: "Duurzaamheid",
        subtitle: "Thrills and Chills: Uw Kiteactive Avontuur Verwacht",
        para: "Maak je klaar om een onvergetelijke reis te beginnen vol spanning en sensatie met Kiteactive! Van de opwindende rush van kitesurfen over adembenemende golven tot de serene momenten die je doorbrengt met het in je opnemen van prachtige kustgezichten, onze avonturen zijn geschikt voor alle ervaringsniveaus. Voel de adrenaline stijgen terwijl je de kracht van de wind benut, en geniet van de opwinding van het beheersen van nieuwe vaardigheden naast onze deskundige instructeurs. Of je nu op zoek bent naar de opwinding van hoge sprongen of de rust van het glijden over kalme wateren, Kiteactive belooft een unieke ervaring die je verkwikt en inspireert. Jouw avontuur begint hier—sluit je bij ons aan en omarm de opwinding die je te wachten staat!"
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
                                    <p className='bg_text'>{content[selectedLanguage].title}</p>
                                        <h1 className='bg_heading'>
                                        {content[selectedLanguage].subtitle}
                                        </h1>
                                        <p className="bg_para">
                                        {content[selectedLanguage].para}
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
