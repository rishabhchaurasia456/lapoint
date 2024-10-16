import React from 'react'

import lifestyleimg2 from '../../Images/img4.webp'
import lifestyleimg1 from '../../Images/img3.webp'

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
    {
        imgSrc: lifestyleimg2,
        text: {
            en: 'Why KiteActive?',
            gr: 'Warum KiteActive?', // German
            du: 'Waarom KiteActive?', // Dutch
        },
        heading: {
            en: 'The Greatest Sport of All Time',
            gr: 'Die beste Sportart aller Zeiten', // German
            du: 'De beste sport ter wereld', // Dutch
        },
        para: {
            en: `Kite surfing stands as a testament to the exhilarating fusion of skill, adrenaline, and the beauty of nature, earning its title as the greatest sport of all time. At Kiteactive, we celebrate this extraordinary adventure by offering unparalleled experiences that allow you to harness the wind and ride the waves like never before. Whether you're a beginner eager to learn or an experienced rider looking to refine your skills, our expert instructors are dedicated to helping you reach your goals in a supportive and thrilling environment. Embrace the rush of freedom as you soar through the air, feel the spray of the ocean, and connect with a vibrant community of fellow enthusiasts.`,
            gr: `Kitesurfen steht als Beweis für die aufregende Fusion aus Können, Adrenalin und der Schönheit der Natur und verdient seinen Titel als beste Sportart aller Zeiten. Bei Kiteactive feiern wir dieses außergewöhnliche Abenteuer, indem wir unvergleichliche Erlebnisse bieten, die es dir ermöglichen, den Wind zu beherrschen und die Wellen zu reiten wie nie zuvor. Ob du ein Anfänger bist, der lernen möchte, oder ein erfahrener Fahrer, der seine Fähigkeiten verfeinern will – unsere erfahrenen Lehrer helfen dir, deine Ziele in einer unterstützenden und aufregenden Umgebung zu erreichen. Spüre die Freiheit, während du durch die Luft schwebst, den Ozean sprühst und dich mit einer lebendigen Gemeinschaft von Gleichgesinnten verbindest.`, // German
            du: `Omdat het de beste keuze is! Met KiteActive reis je met een groep gelijkgestemde mensen. Tijdens al onze kitesurfcamps en evenementen richten we ons op progressie en plezier! Verbinding maken met de oceaan, opgaan in het moment en genieten van het buitenleven zijn andere dingen waar we dol op zijn. We leren je surfen op de Lapoint-manier, samen met lokale, ervaren instructeurs die precies weten welke golven je moet pakken. Je gaat surfen op niveau 1, 2, 3 of met begeleiding. Wij hebben alles geregeld voor de ultieme surfvakantie!`, // Dutch
        },
        imgPosition: 'right',
    },
];




const LIfeStyle = ({ selectedLanguage }) => {
    return (
        <div>
            <div className='container-fluid mt-5 pt-5'>
                {lifestyleData.map((item, index) => (
                    <div className='row mt-5' key={index}>
                        {item.imgPosition === 'left' && (
                            <div className='col-md-6'>
                                <div className='lifestyle_div'>
                                    <img src={item.imgSrc} className='lifestyle' alt="lifestyle" />
                                </div>
                            </div>
                        )}
                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <p className='lifestyle_text'>
                                        {item.text[selectedLanguage]}
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_heading">
                                        {item.heading[selectedLanguage]}
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_para">
                                        <p>{item.para[selectedLanguage]}</p>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {item.imgPosition === 'right' && (
                            <div className='col-md-6'>
                                <div className='lifestyle_div'>
                                    <img src={item.imgSrc} className='lifestyle' alt="lifestyle" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default LIfeStyle