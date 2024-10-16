import React from 'react';

import faqimage from "../../Images/faw.webp"
const Faq = ({ selectedLanguage }) => {

    const Carddata_head_section = [
        {
            title: {
                en: "FAQ",
                gr: "Häufig gestellte Fragen", // German
                du: "Veelgestelde vragen", // Dutch
            },
            subtitle: {
                en: "Questions and answers",
                gr: "Fragen und Antworten", // German
                du: "Vragen en antwoorden", // Dutch
            }
        }
    ];
    
    const faqs = [
        {
            question: {
                en: "Why Kiteactive is Your Ideal Surf Camp Destination",
                gr: "Warum Kiteactive dein ideales Surfcamp-Ziel ist", // German
                du: "Waarom zou ik kiezen voor een surfcamp met Kiteactive?", // Dutch
            },
            answer: {
                en: "When it comes to selecting the perfect surf camp, Kiteactive stands out as your ultimate destination for adventure and growth. Our camps are designed to cater to surfers of all skill levels, from beginners eager to catch their first wave to seasoned pros looking to refine their technique. Located in breathtaking coastal settings, Kiteactive provides a unique blend of exhilarating surf sessions, personalized instruction, and a vibrant community of fellow surf enthusiasts.",
                gr: "Wenn es darum geht, das perfekte Surfcamp auszuwählen, ist Kiteactive dein ultimatives Ziel für Abenteuer und persönliches Wachstum. Unsere Camps sind für Surfer aller Fähigkeitsstufen konzipiert, von Anfängern, die ihre erste Welle reiten möchten, bis hin zu erfahrenen Profis, die ihre Technik verfeinern möchten. In atemberaubenden Küstengebieten gelegen, bietet Kiteactive eine einzigartige Mischung aus aufregenden Surf-Sessions, persönlichem Unterricht und einer lebendigen Community von Surf-Enthusiasten.", // German
                du: "Verblijven in een Kiteactive surfcamp is zoveel meer dan alleen een hostelervaring. Wanneer je Kiteactive bezoekt, willen we dat je je thuis voelt, weg van huis. Naast surfen met ervaren surfcoaches en op een veilige en leuke manier leren surfen, creëer je ook herinneringen voor het leven buiten het water. Bij Kiteactive zijn we echt een grote familie met vriendelijke sociale gastheren die ervoor zorgen dat je je niet alleen voelt, zelfs als je alleen reist.", // Dutch
            }
        },
        {
            question: {
                en: "Which destinations are best to visit for digital nomads?",
                gr: "Welche Ziele sind am besten für digitale Nomaden geeignet?", // German
                du: "Welke bestemmingen zijn het beste om te bezoeken voor digitale nomaden?", // Dutch
            },
            answer: {
                en: "At Kiteactive, we believe that surfing is not just about riding waves; it's about embracing the lifestyle, connecting with nature, and forging lifelong memories. Our well-structured itineraries include not only surfing but also opportunities for yoga, beach games, and cultural excursions, creating a holistic experience that nourishes both body and mind. The friendships you forge during your stay will enrich your journey, as you'll share laughter, challenges, and triumphs with like-minded adventurers.",
                gr: "Bei Kiteactive glauben wir, dass Surfen nicht nur darin besteht, Wellen zu reiten; es geht darum, den Lebensstil zu umarmen, eine Verbindung zur Natur herzustellen und lebenslange Erinnerungen zu schaffen. Unsere gut strukturierten Reisepläne umfassen nicht nur Surfen, sondern auch Yoga, Strandspiele und kulturelle Ausflüge und schaffen so ein ganzheitliches Erlebnis, das sowohl Körper als auch Geist nährt. Die Freundschaften, die du während deines Aufenthalts schließt, werden deine Reise bereichern, da du Lachen, Herausforderungen und Triumphe mit Gleichgesinnten teilst.", // German
                du: "De beste bestemming voor digitale nomaden is ons surfcamp in Ericeira. Daar hebben we een grote co-werkruimte met een wifi-verbinding, vergaderruimtes en ruime werkruimtes met comfortabele stoelen. Alle bestemmingen hebben gemeenschappelijke ruimtes waar je kunt zitten en werken. Ahangama, Canggu, Santa Teresa en El Tunco hebben allemaal goede cafés en restaurants met goede internetverbindingen. In Canggu zijn er ook veel coworking-kantoren in de stad.", // Dutch
            }
        },
        {
            question: {
                en: "Exploring Guest Ages at Kiteactive Ventures Surf Camps?",
                gr: "Welche Altersgruppen kommen zu den Surfcamps von Kiteactive Ventures?", // German
                du: "Wat is de gemiddelde leeftijd van de gasten die naar de surfcamps komen?", // Dutch
            },
            answer: {
                en: "At Kiteactive Ventures, we pride ourselves on welcoming a diverse community of surf enthusiasts, each bringing their unique spirit and passion for the waves. Our surf camps attract guests of various ages, from adventurous youths eager to catch their first wave to seasoned surfers seeking new challenges. Understanding the age demographics of our guests helps us tailor our programs and experiences to meet their needs, ensuring a vibrant and inclusive atmosphere.",
                gr: "Bei Kiteactive Ventures sind wir stolz darauf, eine vielfältige Gemeinschaft von Surf-Enthusiasten willkommen zu heißen, die alle ihren einzigartigen Geist und ihre Leidenschaft für die Wellen mitbringen. Unsere Surfcamps ziehen Gäste jeden Alters an, von abenteuerlustigen Jugendlichen, die ihre erste Welle fangen wollen, bis hin zu erfahrenen Surfern, die neue Herausforderungen suchen. Indem wir die Altersdemografie unserer Gäste verstehen, können wir unsere Programme und Erfahrungen auf ihre Bedürfnisse zuschneiden und eine lebendige und inklusive Atmosphäre schaffen.", // German
                du: "Alle bestemmingen hebben ongeveer 30% solo reizigers en zijn allemaal geweldige bestemmingen voor mensen die alleen reizen. We hebben de hele week door veel sociale activiteiten, dus het is heel gemakkelijk om de andere gasten te leren kennen. Er zijn sociale gastheren werkzaam op het kamp die ervoor zorgen dat niemand zich buitengesloten of alleen voelt (tenzij ze dat natuurlijk willen).", // Dutch
            }
        },
        {
            question: {
                en: "Discover the Best Seasons for Surfing at Kiteactive Ventures",
                gr: "Was ist die beste Jahreszeit, um die Surfcamps von Kiteactive Ventures zu besuchen?", // German
                du: "In welk seizoen kun je het beste de surfcamps bezoeken?", // Dutch
            },
            answer: {
                en: "At Kiteactive Ventures, we believe that timing is everything when it comes to enjoying the ultimate surf experience. Our surf camps are designed to provide optimal conditions throughout the year, but certain seasons offer unique advantages. Typically, the best time to visit is during the spring and fall, when swells are consistent, and the weather is mild, creating perfect surfing conditions for both beginners and seasoned pros.",
                gr: "Bei Kiteactive Ventures glauben wir, dass das Timing alles ist, wenn es darum geht, das ultimative Surferlebnis zu genießen. Unsere Surfcamps sind so konzipiert, dass sie das ganze Jahr über optimale Bedingungen bieten, aber bestimmte Jahreszeiten bieten einzigartige Vorteile. Typischerweise ist die beste Zeit für einen Besuch im Frühling und Herbst, wenn die Wellen beständig und das Wetter mild sind, was perfekte Surfbedingungen für Anfänger und erfahrene Profis schafft.", // German
                du: "Je kunt lezen over de verschillende niveaus op onze website en je kiest dit tijdens het afrekenproces. Maak je geen zorgen als je het verkeerde niveau kiest, we kunnen dit altijd wijzigen als je in het kamp aankomt.", // Dutch
            }
        },
        {
            question: {
                en: "Which destinations are best to visit for solo travelers?",
                gr: "Welche Reiseziele sind am besten für Alleinreisende?", // German
                du: "Welke bestemmingen kun je het beste bezoeken als soloreiziger?", // Dutch
            },
            answer: {
                en: "For solo travelers seeking adventure and connection, Kiteactive Ventures offers a selection of exceptional destinations that cater to the spirit of exploration and independence. From the stunning coastlines of Hawaii to the vibrant beaches of Bali, each location provides a unique blend of breathtaking scenery, welcoming communities, and exhilarating activities.",
                gr: "Für Alleinreisende, die Abenteuer und Anschluss suchen, bietet Kiteactive Ventures eine Auswahl an außergewöhnlichen Zielen, die dem Geist der Erkundung und Unabhängigkeit gerecht werden. Von den atemberaubenden Küsten Hawaiis bis zu den lebhaften Stränden Balis bietet jeder Ort eine einzigartige Mischung aus atemberaubender Landschaft, einladenden Gemeinschaften und aufregenden Aktivitäten.", // German
                du: "Je kunt lezen over de verschillende niveaus op onze website en je kiest dit tijdens het afrekenproces. Maak je geen zorgen als je het verkeerde niveau kiest, we kunnen dit altijd wijzigen als je in het kamp aankomt.", // Dutch
            }
        },
        {
            question: {
                en: "Staying Connected: Wi-Fi Quality at Kiteactive Ventures Surf Camps",
                gr: "Wie ist die WLAN-Qualität in den Surfcamps von Kiteactive Ventures?", // German
                du: "Hoe is de wifi-verbinding in de surfcamps?", // Dutch
            },
            answer: {
                en: "At Kiteactive Ventures, we understand the importance of staying connected, whether you're sharing your latest surfing adventures on social media or keeping in touch with friends and family back home. Our surf camps are equipped with reliable Wi-Fi, ensuring that you can effortlessly browse the web, stream content, and communicate without hassle. We’ve invested in high-speed internet access to provide our guests with a seamless online experience, allowing you to balance your passion for surfing with the convenience of modern connectivity.",
                gr: "Bei Kiteactive Ventures verstehen wir die Bedeutung der Konnektivität, egal ob du deine neuesten Surfabenteuer in den sozialen Medien teilst oder mit Freunden und Familie in Kontakt bleibst. Unsere Surfcamps sind mit zuverlässigem WLAN ausgestattet, sodass du mühelos im Internet surfen, Inhalte streamen und ohne Probleme kommunizieren kannst. Wir haben in High-Speed-Internet investiert, um unseren Gästen ein nahtloses Online-Erlebnis zu bieten und es dir zu ermöglichen, deine Leidenschaft fürs Surfen mit den Annehmlichkeiten moderner Konnektivität zu verbinden.", // German
                du: "Tijdens de lessen krijg je een ervaring op het strand. De instructeurs gebruiken video-analyse en verschillende andere technieken om je te helpen verbeteren. Na elke les kun je ook vragen stellen en bespreken hoe het ging.", // Dutch
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
