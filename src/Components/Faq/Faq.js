import React from 'react';

import faqimage from "../../Images/faw.png"
const Faq = ({selectedLanguage}) => {
    
    const Carddata_head_section = [
        {
            title: {
                en: "FAQ",
                nl: "Veelgestelde vragen", // Dutch
                hi: "सामान्य प्रश्न", // Hindi
            },
            subtitle: {
                en: "Questions and answers",
                nl: "Vragen en antwoorden", // Dutch
                hi: "प्रश्न और उत्तर", // Hindi
            }
        }
    ];

    const faqs = [
        {
            question: {
                en: "Why should I choose to go on a surf camp with Lapoint?",
                nl: "Waarom zou ik kiezen voor een surfcamp met Lapoint?", // Dutch
                hi: "मुझे लैपॉइंट के साथ सर्फ कैंप में जाने का चयन क्यों करना चाहिए?" // Hindi
            },
            answer: {
                en: "Staying at a Lapoint surf camp is so much more than just a hostel experience. When you visit Lapoint, we want you to feel like you come to a home away from home. Besides surfing together with experienced surf coaches and learning to surf in a safe and fun way, you will create memories for life outside the water too. At Lapoint, we really are a big family with friendly social hosts that make sure you won't feel alone, even if you travel by yourself.",
                nl: "Verblijven in een Lapoint surfcamp is zoveel meer dan alleen een hostelervaring. Wanneer je Lapoint bezoekt, willen we dat je je thuis voelt, weg van huis. Naast surfen met ervaren surfcoaches en op een veilige en leuke manier leren surfen, creëer je ook herinneringen voor het leven buiten het water. Bij Lapoint zijn we echt een grote familie met vriendelijke sociale gastheren die ervoor zorgen dat je je niet alleen voelt, zelfs als je alleen reist.", // Dutch
                hi: "लैपॉइंट सर्फ कैंप में ठहरना केवल एक हॉस्टल अनुभव से कहीं अधिक है। जब आप लैपॉइंट आते हैं, तो हम चाहते हैं कि आप घर से दूर एक घर जैसा महसूस करें। अनुभवी सर्फ कोचों के साथ मिलकर सर्फिंग करने और सुरक्षित और मजेदार तरीके से सर्फिंग सीखने के अलावा, आप पानी के बाहर भी जीवन के लिए यादें बनाएंगे। लैपॉइंट में, हम वास्तव में एक बड़ा परिवार हैं, जिसमें दोस्ताना सामाजिक मेजबान होते हैं जो यह सुनिश्चित करते हैं कि आप अकेला महसूस न करें, भले ही आप अकेले यात्रा करें।" // Hindi
            }
        },
        {
            question: {
                en: "Which destinations are best to visit for digital nomads?",
                nl: "Welke bestemmingen zijn het beste om te bezoeken voor digitale nomaden?", // Dutch
                hi: "डिजिटल नोमैड्स के लिए कौन से गंतव्य सबसे अच्छे हैं?" // Hindi
            },
            answer: {
                en: "The best destination for digital nomads is our surf camp in Ericeira. There we have a big co-work space with a Wi-Fi connection, meeting rooms and spacious working areas and comfy chairs. All destinations have common areas where you can sit and work. Ahangama, Canggu, Santa Teresa and El Tunco all have good cafes and restaurants with good internet connections. In Canggu, there are also a lot of coworking offices around town.",
                nl: "De beste bestemming voor digitale nomaden is ons surfcamp in Ericeira. Daar hebben we een grote co-werkruimte met een wifi-verbinding, vergaderruimtes en ruime werkruimtes met comfortabele stoelen. Alle bestemmingen hebben gemeenschappelijke ruimtes waar je kunt zitten en werken. Ahangama, Canggu, Santa Teresa en El Tunco hebben allemaal goede cafés en restaurants met goede internetverbindingen. In Canggu zijn er ook veel coworking-kantoren in de stad.", // Dutch
                hi: "डिजिटल नोमैड्स के लिए सबसे अच्छा गंतव्य हमारा एरिसिरा में स्थित सर्फ कैंप है। वहां हमारे पास वाई-फाई कनेक्शन, मीटिंग रूम और विशाल कार्यक्षेत्रों और आरामदायक कुर्सियों के साथ एक बड़ा सह-कार्यस्थल है। सभी गंतव्यों में आम क्षेत्र होते हैं जहां आप बैठकर काम कर सकते हैं। अहंगामा, कंग्गु, सांता टेरेसा और एल तुनको में सभी अच्छे कैफे और रेस्तरां हैं जिनमें अच्छी इंटरनेट कनेक्शन हैं। कंग्गु में, शहर के आसपास भी कई कोवर्किंग कार्यालय हैं।" // Hindi
            }
        },
        {
            question: {
                en: "What’s the average age of the guests coming to the surf camps?",
                nl: "Wat is de gemiddelde leeftijd van de gasten die naar de surfcamps komen?", // Dutch
                hi: "सर्फ कैंप में आने वाले मेहमानों की औसत आयु क्या है?" // Hindi
            },
            answer: {
                en: "All destinations have around 30% solo travelers and are all great destinations for people traveling alone. We have a lot of social activities throughout the week so it is very easy to get to know the other guests. There are social hosts working at the camp that makes sure no one feels left out or alone (unless they want to of course).",
                nl: "Alle bestemmingen hebben ongeveer 30% solo reizigers en zijn allemaal geweldige bestemmingen voor mensen die alleen reizen. We hebben de hele week door veel sociale activiteiten, dus het is heel gemakkelijk om de andere gasten te leren kennen. Er zijn sociale gastheren werkzaam op het kamp die ervoor zorgen dat niemand zich buitengesloten of alleen voelt (tenzij ze dat natuurlijk willen).", // Dutch
                hi: "सभी गंतव्यों में लगभग 30% एकल यात्री होते हैं और ये सभी अकेले यात्रा करने वाले लोगों के लिए शानदार गंतव्य हैं। हमारे पास पूरे सप्ताह कई सामाजिक गतिविधियाँ होती हैं, इसलिए अन्य मेहमानों से मिलना बहुत आसान होता है। कैंप में सामाजिक मेजबान होते हैं जो यह सुनिश्चित करते हैं कि कोई भी अकेला या अलग-थलग महसूस न करे (जब तक कि वे स्वयं ऐसा न चाहें)।" // Hindi
            }
        },
        {
            question: {
                en: "During which season is it best to visit the surf camps?",
                nl: "In welk seizoen kun je het beste de surfcamps bezoeken?", // Dutch
                hi: "सर्फ कैंप में आने के लिए कौन सा मौसम सबसे अच्छा है?" // Hindi
            },
            answer: {
                en: "You can read about the different levels on our website, and you choose it in the checkout process. Don't worry if you choose the wrong level, we can always change this when you arrive at the camp.",
                nl: "Je kunt lezen over de verschillende niveaus op onze website en je kiest dit tijdens het afrekenproces. Maak je geen zorgen als je het verkeerde niveau kiest, we kunnen dit altijd wijzigen als je in het kamp aankomt.", // Dutch
                hi: "आप हमारी वेबसाइट पर विभिन्न स्तरों के बारे में पढ़ सकते हैं और आप इसे चेकआउट प्रक्रिया में चुन सकते हैं। अगर आपने गलत स्तर चुना है तो चिंता न करें, जब आप कैंप में पहुंचेंगे तो हम इसे हमेशा बदल सकते हैं।" // Hindi
            }
        },
        {
            question: {
                en: "Which destinations are best to visit for solo travelers?",
                nl: "Welke bestemmingen kun je het beste bezoeken als soloreiziger?", // Dutch
                hi: "अकेले यात्रा करने वालों के लिए कौन से गंतव्य सबसे अच्छे हैं?" // Hindi
            },
            answer: {
                en: "You can read about the different levels on our website, and you choose it in the checkout process. Don't worry if you choose the wrong level, we can always change this when you arrive at the camp.",
                nl: "Je kunt lezen over de verschillende niveaus op onze website en je kiest dit tijdens het afrekenproces. Maak je geen zorgen als je het verkeerde niveau kiest, we kunnen dit altijd wijzigen als je in het kamp aankomt.", // Dutch
                hi: "आप हमारी वेबसाइट पर विभिन्न स्तरों के बारे में पढ़ सकते हैं और आप इसे चेकआउट प्रक्रिया में चुन सकते हैं। अगर आपने गलत स्तर चुना है तो चिंता न करें, जब आप कैंप में पहुंचेंगे तो हम इसे हमेशा बदल सकते हैं।" // Hindi
            }
        },
        {
            question: {
                en: "How is the Wi-Fi connection for the surf camps?",
                nl: "Hoe is de wifi-verbinding in de surfcamps?", // Dutch
                hi: "सर्फ कैंप के लिए वाई-फाई कनेक्शन कैसा है?" // Hindi
            },
            answer: {
                en: "You’ll create friendships for a lifetime with like-minded people and experience all kinds of adventures together. Depending on the location you chose, you can go on safaris, hike in rainforests and go horseback riding on beaches.",
                nl: "Je zult vriendschappen voor het leven sluiten met gelijkgestemde mensen en samen allerlei avonturen beleven. Afhankelijk van de locatie die je kiest, kun je op safari gaan, wandelen in regenwouden en paardrijden op stranden.", // Dutch
                hi: "आप समान विचारधारा वाले लोगों के साथ आजीवन दोस्ती बनाएंगे और साथ में सभी प्रकार के रोमांच का अनुभव करेंगे। आपने जिस स्थान को चुना है उसके आधार पर, आप सफारी पर जा सकते हैं, वर्षावनों में पैदल यात्रा कर सकते हैं और समुद्र तटों पर घुड़सवारी कर सकते हैं।" // Hindi
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
