import React from 'react';

import faqimage from "../../Images/faw.webp"
const Faq = ({selectedLanguage}) => {
    
    const Carddata_head_section = [
        {
            title: {
                en: "FAQ",
                nl: "Veelgestelde vragen", // Dutch
                du: "Veelgestelde vragen", // Netherlands Dutch
            },
            subtitle: {
                en: "Questions and answers",
                nl: "Vragen en antwoorden", // Dutch
                du: "Vragen en antwoorden", // Netherlands Dutch
            }
        }
    ];

    const faqs = [
        {
            question: {
                en: "Why Kiteactive is Your Ideal Surf Camp Destination",
                nl: "Waarom zou ik kiezen voor een surfcamp met Kiteactive?", // Dutch
                du: "Waarom zou ik kiezen voor een surfcamp met Kiteactive?", // Dutch
            },
            answer: {
                en: "When it comes to selecting the perfect surf camp, Kiteactive stands out as your ultimate destination for adventure and growth. Our camps are designed to cater to surfers of all skill levels, from beginners eager to catch their first wave to seasoned pros looking to refine their technique. Located in breathtaking coastal settings, Kiteactive provides a unique blend of exhilarating surf sessions, personalized instruction, and a vibrant community of fellow surf enthusiasts.",
                nl: "Verblijven in een Kiteactive surfcamp is zoveel meer dan alleen een hostelervaring. Wanneer je Kiteactive bezoekt, willen we dat je je thuis voelt, weg van huis. Naast surfen met ervaren surfcoaches en op een veilige en leuke manier leren surfen, creëer je ook herinneringen voor het leven buiten het water. Bij Kiteactive zijn we echt een grote familie met vriendelijke sociale gastheren die ervoor zorgen dat je je niet alleen voelt, zelfs als je alleen reist.", // Dutch
                du: "Verblijven in een Kiteactive surfcamp is zoveel meer dan alleen een hostelervaring. Wanneer je Kiteactive bezoekt, willen we dat je je thuis voelt, weg van huis. Naast surfen met ervaren surfcoaches en op een veilige en leuke manier leren surfen, creëer je ook herinneringen voor het leven buiten het water. Bij Kiteactive zijn we echt een grote familie met vriendelijke sociale gastheren die ervoor zorgen dat je je niet alleen voelt, zelfs als je alleen reist.", // Dutch
            }
        },
        {
            question: {
                en: "Which destinations are best to visit for digital nomads?",
                nl: "Welke bestemmingen zijn het beste om te bezoeken voor digitale nomaden?", // Dutch
                du: "Welke bestemmingen zijn het beste om te bezoeken voor digitale nomaden?", // Dutch
            },
            answer: {
                en: "At Kiteactive, we believe that surfing is not just about riding waves; it's about embracing the lifestyle, connecting with nature, and forging lifelong memories. Our well-structured itineraries include not only surfing but also opportunities for yoga, beach games, and cultural excursions, creating a holistic experience that nourishes both body and mind. The friendships you forge during your stay will enrich your journey, as you'll share laughter, challenges, and triumphs with like-minded adventurers.",
                nl: "De beste bestemming voor digitale nomaden is ons surfcamp in Ericeira. Daar hebben we een grote co-werkruimte met een wifi-verbinding, vergaderruimtes en ruime werkruimtes met comfortabele stoelen. Alle bestemmingen hebben gemeenschappelijke ruimtes waar je kunt zitten en werken. Ahangama, Canggu, Santa Teresa en El Tunco hebben allemaal goede cafés en restaurants met goede internetverbindingen. In Canggu zijn er ook veel coworking-kantoren in de stad.", // Dutch
                du: "De beste bestemming voor digitale nomaden is ons surfcamp in Ericeira. Daar hebben we een grote co-werkruimte met een wifi-verbinding, vergaderruimtes en ruime werkruimtes met comfortabele stoelen. Alle bestemmingen hebben gemeenschappelijke ruimtes waar je kunt zitten en werken. Ahangama, Canggu, Santa Teresa en El Tunco hebben allemaal goede cafés en restaurants met goede internetverbindingen. In Canggu zijn er ook veel coworking-kantoren in de stad.", // Dutch
            }
        },
        {
            question: {
                en: "Exploring Guest Ages at Kiteactive Ventures Surf Camps?",
                nl: "Wat is de gemiddelde leeftijd van de gasten die naar de surfcamps komen?", // Dutch
                du: "Wat is de gemiddelde leeftijd van de gasten die naar de surfcamps komen?", // Dutch
            },
            answer: {
                en: "At Kiteactive Ventures, we pride ourselves on welcoming a diverse community of surf enthusiasts, each bringing their unique spirit and passion for the waves. Our surf camps attract guests of various ages, from adventurous youths eager to catch their first wave to seasoned surfers seeking new challenges. Understanding the age demographics of our guests helps us tailor our programs and experiences to meet their needs, ensuring a vibrant and inclusive atmosphere.",
                nl: "Alle bestemmingen hebben ongeveer 30% solo reizigers en zijn allemaal geweldige bestemmingen voor mensen die alleen reizen. We hebben de hele week door veel sociale activiteiten, dus het is heel gemakkelijk om de andere gasten te leren kennen. Er zijn sociale gastheren werkzaam op het kamp die ervoor zorgen dat niemand zich buitengesloten of alleen voelt (tenzij ze dat natuurlijk willen).", // Dutch
                du: "Alle bestemmingen hebben ongeveer 30% solo reizigers en zijn allemaal geweldige bestemmingen voor mensen die alleen reizen. We hebben de hele week door veel sociale activiteiten, dus het is heel gemakkelijk om de andere gasten te leren kennen. Er zijn sociale gastheren werkzaam op het kamp die ervoor zorgen dat niemand zich buitengesloten of alleen voelt (tenzij ze dat natuurlijk willen).", // Dutch
            }
        },
        {
            question: {
                en: "Discover the Best Seasons for Surfing at Kiteactive Ventures",
                nl: "In welk seizoen kun je het beste de surfcamps bezoeken?", // Dutch
                du: "In welk seizoen kun je het beste de surfcamps bezoeken?", // Dutch
            },
            answer: {
                en: "At Kiteactive Ventures, we believe that timing is everything when it comes to enjoying the ultimate surf experience. Our surf camps are designed to provide optimal conditions throughout the year, but certain seasons offer unique advantages. Typically, the best time to visit is during the spring and fall, when swells are consistent, and the weather is mild, creating perfect surfing conditions for both beginners and seasoned pros.",
                nl: "Je kunt lezen over de verschillende niveaus op onze website en je kiest dit tijdens het afrekenproces. Maak je geen zorgen als je het verkeerde niveau kiest, we kunnen dit altijd wijzigen als je in het kamp aankomt.", // Dutch
                du: "Je kunt lezen over de verschillende niveaus op onze website en je kiest dit tijdens het afrekenproces. Maak je geen zorgen als je het verkeerde niveau kiest, we kunnen dit altijd wijzigen als je in het kamp aankomt.", // Dutch
            }
        },
        {
            question: {
                en: "Which destinations are best to visit for solo travelers?",
                nl: "Welke bestemmingen kun je het beste bezoeken als soloreiziger?", // Dutch
                du: "Welke bestemmingen kun je het beste bezoeken als soloreiziger?", // Dutch
            },
            answer: {
                en: "For solo travelers seeking adventure and connection, Kiteactive Ventures offers a selection of exceptional destinations that cater to the spirit of exploration and independence. From the stunning coastlines of Hawaii to the vibrant beaches of Bali, each location provides a unique blend of breathtaking scenery, welcoming communities, and exhilarating activities.",
                nl: "Je kunt lezen over de verschillende niveaus op onze website en je kiest dit tijdens het afrekenproces. Maak je geen zorgen als je het verkeerde niveau kiest, we kunnen dit altijd wijzigen als je in het kamp aankomt.", // Dutch
                du: "Je kunt lezen over de verschillende niveaus op onze website en je kiest dit tijdens het afrekenproces. Maak je geen zorgen als je het verkeerde niveau kiest, we kunnen dit altijd wijzigen als je in het kamp aankomt.", // Dutch
            }
        },
        {
            question: {
                en: "Staying Connected: Wi-Fi Quality at Kiteactive Ventures Surf Camps",
                nl: "Hoe is de wifi-verbinding in de surfcamps?", // Dutch
                du: "Hoe is de wifi-verbinding in de surfcamps?", // Dutch
            },
            answer: {
                en: "At Kiteactive Ventures, we understand the importance of staying connected, whether you're sharing your latest surfing adventures on social media or keeping in touch with friends and family back home. Our surf camps are equipped with reliable Wi-Fi, ensuring that you can effortlessly browse the web, stream content, and communicate without hassle. We’ve invested in high-speed internet access to provide our guests with a seamless online experience, allowing you to balance your passion for surfing with the convenience of modern connectivity.",
                nl: "Je zult vriendschappen voor het leven sluiten met gelijkgestemde mensen en samen allerlei avonturen beleven. Afhankelijk van de locatie die je kiest, kun je op safari gaan, wandelen in regenwouden en paardrijden op stranden.", // Dutch
                du: "Je zult vriendschappen voor het leven sluiten met gelijkgestemde mensen en samen allerlei avonturen beleven. Afhankelijk van de locatie die je kiest, kun je op safari gaan, wandelen in regenwouden en paardrijden op stranden.", // Dutch
            }
        }
    ];
    


    return (
        <>
            <div className='container-fluid faq_container'>
                <div className="row">
                    <div className="col pb-4 text-center">
                        <p className='faq_para'>{Carddata_head_section[0].title[selectedLanguage]}</p>
                        <h2 className='faq_text'>{Carddata_head_section[0].subtitle[selectedLanguage]}</h2>
                    </div>
                </div>

                <div className='row mb-3 p-3'>
                    <div className="col-lg-8">
                        <div class="row">
                            {faqs.map((faq, index) => (
                                <div className='col-md-6'>
                                    <details className='shadow-sm mt-3' key={index}>
                                        <summary>{faq.question[selectedLanguage]}</summary>
                                        <div className="faq__content fs-5 mb-2">
                                            <p>{faq.answer[selectedLanguage]}</p>
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4 m-0 p-0">
                        <div className='text-center m-0 p-0'>
                            <img src={faqimage} alt="FAQ Visual" className='faq_img rounded-4' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;
