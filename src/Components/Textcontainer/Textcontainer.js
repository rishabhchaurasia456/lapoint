import React from 'react'

const content = {
    en: {
        title: "Kiteactive",
        subtitle: "What it’s all about",
        para: "In 2011 we expanded our destinations to include Tarifa, Brazil and in 2012 Zanzibar.This was followed by many other unique destinations. Each location has its own advantages from low-budget to ultimate experience. But what is always the same with every holiday is the unique location, good kite spot, relaxed atmosphere, active no-wind options and our experienced instructors.",
    },
    hi: {
        title: "काइटएक्टिव",
        subtitle: "यह सब क्या है",
        para: "2011 में हमने टारिफा, ब्राजील और 2012 में ज़ांज़ीबार में अपने गंतव्यों का विस्तार किया. इसके बाद कई अन्य अनोखे गंतव्यों का पालन किया. प्रत्येक स्थान के अपने फायदे हैं निम्न- बजट से लेकर अल्टीमेट एक्सपीरियंस तक. लेकिन जो हर छुट्टी के साथ हमेशा समान है वह है अनोखा स्थान, अच्छा काइट स्पॉट, आरामदायक वातावरण, सक्रिय नो-विंड विकल्प और हमारे अनुभवी प्रशिक्षक.",
    },
    nl: {
        title: "Kiteactive",
        subtitle: "Wat het allemaal om gaat",
        para: "In 2011 hebben we onze bestemmingen uitgebreid om Tarifa, Brazilië en in 2012 Zanzibar te includeren. Dit werd gevolgd door veel andere unieke bestemmingen. Elk locatie heeft zijn eigen voordelen van laagbudget tot ultieme ervaring. Maar wat altijd hetzelfde is met elke vakantie is de unieke locatie, goede kite spot, ontspannen sfeer, actieve no-wind opties en onze ervaren instructeurs.",
    },
}

const textdata = [
    {
        id: "1",
        title: {
            en: "The Heartbeat of KiteActive",
            hi: "काइटएक्टिव की धड़कन",
            nl: "Het Hart van KiteActive"
        },
        para: {
            en: "KiteActive’s mission is to give you the best kite/holiday. We offer kitesurfing lessons and clinics in the most beautiful places in the world. Thanks to our professional team of instructors, many locations have already been discovered and KiteActive has made a selection of the best destinations for you. By making competitive deals with accommodations at an early stage, you can always stay cheaply through us at the most beautiful locations directly or close to the beach.",
            hi: "काइटएक्टिव का मिशन आपको सबसे अच्छा काइट/हॉलिडे देना है. हम दुनिया के सबसे सुंदर स्थानों में काइटसर्फिंग पाठ और क्लिनिक प्रदान करते हैं. हमारी पेशेवर टीम ऑफ इंस्ट्रक्टर्स के लिए, कई स्थानों की खोज की जा चुकी है और काइटएक्टिव ने आपके लिए सबसे अच्छे गंतव्यों का चयन किया है. प्रारंभिक चरण में आवास के साथ प्रतिस्पर्धी सौदे करने से, आप हमारे माध्यम से सबसे सुंदर स्थानों पर सस्ते में रह सकते हैं या समुद्र तट के पास.",
            nl: "De missie van KiteActive is om u de beste kite/vakantie te geven. We bieden kitesurflessen en klinieken aan in de mooiste plaatsen ter wereld. Dankzij ons professionele team van instructeurs hebben we veel locaties al ontdekt en heeft KiteActive een selectie gemaakt van de beste bestemmingen voor u. Door concurrerende deals te maken met accommodaties op een vroeg stadium, kunt u altijd goedkoop verblijven via ons op de mooiste locaties rechtstreeks of dicht bij het strand."
        }
    },
    {
        id: "2",
        title: {
            en: "The KiteActive Path to Wellness",
            hi: "काइटएक्टिव का वेलनेस पथ",
            nl: "De KiteActive Weg naar Welzijn"
        },
        para: {
            en: "From 2015 onwards we started to focus on every kitesurfer, from beginner to advanced, from the adventurous kiter who wants to travel alone to someone who wants to join a fun group. KiteActive – By kitesurfers, for kitesurfers. both on the surfboard and on the yoga mat and be more aware of your mind and body connection. Immersed in nature, the ocean and good vibes, we have the perfect setup for a feelgood week that definitely will give you a positive boost.",
            hi: "2015 से हमने हर काइटसर्फर पर ध्यान देना शुरू कर दिया, शुरुआत से लेकर एडवांस्ड तक, साहसिक काइटर जो अकेले यात्रा करना चाहता है से लेकर किसी के साथ मज़ेदार समूह में शामिल होना चाहता है. काइटएक्टिव - काइटसर्फर्स द्वारा, काइटसर्फर्स के लिए. सर्फबोर्ड और योग मैट पर दोनों और अपने मन और शरीर के संबंध के बारे में अधिक जागरूक हैं. प्रकृति में, महासागर और अच्छे वाइब्स में, हमारे पास एक फीलगुड वीक के लिए परफेक्ट सेटअप है जो निश्चित रूप से आपको एक सकारात्मक बूस्ट देगा.",
            nl: "Vanaf 2015 hebben we ons gefocust op elke kitesurfer, van beginner tot gevorderd, van de avontuurlijke kiter die alleen wil reizen tot iemand die een leuke groep wil joinen. KiteActive – Door kitesurfers, voor kitesurf",
        }
    },
    {
        id: "3",
        title: {
            en: "Living the KiteActive Lifestyle",
            hi: "काइटएक्टिव लाइफस्टाइल जीना",
            nl: "Leven volgens de KiteActieve levensstijl"
        },
        para: {
            en: "A professional and passionate team, on the beach and behind the computer. We organize your kitesurfing trip down to the last detail! We look forward to meet you and to have a great holiday together!. Learn to read the ocean better, get more comfortable in the line-up and get individual feedback on the areas you need to improve in your surfing.",
            hi: "एक पेशेवर और जुनूनी टीम, समुद्र तट और कंप्यूटर के पीछे. हम आपके काइटसर्फिंग ट्रिप का आयोजन करते हैं आखिरी विवरण तक! हम आपके साथ मिलने और एक महान हॉलिडे साथ में होने की उम्मीद करते हैं. समुद्र को बेहतर पढ़ना सीखें, लाइन-अप में अधिक आरामदायक हो जाएं और अपने सर्फिंग में सुधार के लिए व्यक्तिगत प्रतिक्रिया प्राप्त करें.",
            nl: "Een professioneel en gepassioneerd team, op het strand en achter de computer. Wij organiseren jouw kitesurftrip tot in de puntjes! Wij kijken ernaar uit om je te ontmoeten en samen een geweldige vakantie te beleven!. Leer de oceaan beter te lezen, word comfortabeler in de line-up en krijg individuele feedback over de gebieden waarop je je surfvaardigheden moet verbeteren."
            
        }
    },
    {
        id: "4",
        title: {
            en: "The KiteActive Experience",
            hi: "काइटएक्टिव अनुभव",
            nl: "De KiteActive-ervaring"
        },
        para: {
            en: "Let’s unite our powers and be partners! We have partner programs for everyone. Do you have a kiteschool? A travel agency? Or are you just a kiter who thinks he can sell kitesurf trips? Together we can move mountains, create a synergy and build a stronger brand.",
            hi: "आइए अपनी शक्तियों को एकजुट करें और भागीदार बनें! हमारे पास सभी के लिए भागीदार कार्यक्रम हैं। क्या आपके पास काइटस्कूल है? ट्रैवल एजेंसी है? या आप सिर्फ़ एक पतंगबाज़ हैं जो सोचता है कि वह काइटसर्फ ट्रिप बेच सकता है? हम साथ मिलकर पहाड़ों को हिला सकते हैं, तालमेल बना सकते हैं और एक मज़बूत ब्रांड बना सकते हैं।",
            nl: "Laten we onze krachten bundelen en partners worden! We hebben partnerprogramma's voor iedereen. Heb je een kiteschool? Een reisbureau? Of ben je gewoon een kiter die denkt dat hij kitesurftrips kan verkopen? Samen kunnen we bergen verzetten, een synergie creëren en een sterker merk opbouwen.",
        }
    }
]


const Textcontainer = ({selectedLanguage}) => {
    return (
        <div>

            <div className="container d-flex flex-column align-items-center justify-content-center text_container">
                <div className="row">
                    <div className="col text-center">
                        <small className='text_small '>{content[selectedLanguage].title}</small>
                        <h1 className=" surf_text"><span className='text_span'>{content[selectedLanguage].subtitle}</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className='text_para'>
                        {content[selectedLanguage].para}
                        </p>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row">
                {textdata.map(({ title, para }) => (
                    <div className="col-lg-6 p-2">
                        <div className='p-2'>
                            <h2 className=" text_head">
                                <div className='text_span'>

                                {title[selectedLanguage]}
                                </div>
                            </h2>
                            <p className='text_para'>{para[selectedLanguage]}</p>
                        </div>
                    </div>
                ))}
                </div>
                <br />
            </div>
        </div>
    )
}

export default Textcontainer
