import React from 'react'

import lifestyleimg1 from '../../Images/img3.webp'
import { Link } from 'react-router-dom';
import config from '../../config/config';

const lifestyleData = [
    {
        imgSrc: lifestyleimg1,
        text: {
            en: 'Meet Our Team',
            gr: 'Lerne unser Team kennen', // German
            du: 'Ontmoet ons team', // Dutch
        },
        heading: {
            en: 'The kiteactive way of life',
            gr: 'Der Kiteactive Lebensstil', // German
            du: 'De KiteActive levensstijl', // Dutch
        },
        para: {
            en: `Kiteactive for Veventures! Immerse yourself in a realm of excitement and discovery with Kiteactive. Whether you're looking for exhilarating surf camps, peaceful yoga retreats, or unforgettable travel experiences, we provide the ideal mix of adventure and tranquility. Our thoughtfully designed itineraries enable you to connect with nature, tackle new challenges, and forge lasting memories. Join us to uncover the extraordinary adventures that await, as you ride the waves and explore stunning landscapes. Your next unforgettable journey starts here!`,
            gr: `Kiteactive für Veventures! Tauche ein in eine Welt voller Aufregung und Entdeckung mit Kiteactive. Ob du nach spannenden Surf-Camps, friedlichen Yoga-Retreats oder unvergesslichen Reiseerlebnissen suchst – wir bieten die perfekte Mischung aus Abenteuer und Entspannung. Unsere durchdachten Reiserouten ermöglichen es dir, dich mit der Natur zu verbinden, neue Herausforderungen anzunehmen und bleibende Erinnerungen zu schaffen. Schließe dich uns an, um die außergewöhnlichen Abenteuer zu entdecken, die dich erwarten, während du die Wellen reitest und atemberaubende Landschaften erkundest. Dein nächstes unvergessliches Abenteuer beginnt hier!`, // German
            du: `Een professioneel kite team, op het strand en achter de computer. We organiseren je kitesurftrip tot in de puntjes. We kijken ernaar uit om je te ontmoeten en samen een geweldige tijd te hebben! Of je nu een beginner bent die de basis wil leren of een ervaren kitesurfer die op zoek is naar nieuwe avonturen, ons team staat klaar om je bij elke stap te ondersteunen. Van het selecteren van de beste locaties met optimale windomstandigheden tot het regelen van accommodatie en uitrusting, wij regelen alles.`, // Dutch
        },
        imgPosition: 'left',
    },

];




const LIfeStyle = ({ data, selectedLanguage }) => {
    return (
        <div>
            <div className='container-fluid mt-5 pt-5 mb-5'>
                {lifestyleData.map((item, index) => (
                    <div className='row mt-5' key={index}>
                        {item.imgPosition === 'left' && (
                            <div className='col-md-6'>
                                <div className='lifestyle_div'>
                                    <img src={`${config.API_BASE_URL}${data?.teamimg}`} className='lifestyle' alt="lifestyle" />
                                </div>
                            </div>
                        )}
                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <p className='lifestyle_text'>
                                        {data?.teamSubHeading}
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_heading">
                                        {data?.teamHeading}
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_para">
                                        <p>{data?.teamPara}</p>
                                    </h1>
                                </div>

                                <div>
                                    <Link to="/Kiteactive_Team" className=' lifestyle_btn'>Meet Our Team</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}


export default LIfeStyle