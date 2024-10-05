import React from 'react'

import lifestyleimg2 from '../../Images/img4.webp'
import lifestyleimg1 from '../../Images/img3.webp'

const lifestyleData = [
    {
      imgSrc: lifestyleimg1,
      text: {   
        en: 'Meet Our Team',
        hi: 'हमारी टीम से मिलें',
        nl: 'Ontmoet ons team',
      },
      heading: {
        en: 'The kiteactive way of life',
        hi: 'काइटएक्टिव जीवन का तरीका',
        nl: 'De KiteActive levensstijl',
      },
      para: {
        en: `Kiteactive for Veventures! Immerse yourself in a realm of excitement and discovery with Kiteactive. Whether you're looking for exhilarating surf camps, peaceful yoga retreats, or unforgettable travel experiences, we provide the ideal mix of adventure and tranquility. Our thoughtfully designed itineraries enable you to connect with nature, tackle new challenges, and forge lasting memories. Join us to uncover the extraordinary adventures that await, as you ride the waves and explore stunning landscapes. Your next unforgettable journey starts here!`,

        hi: `समुद्र तट पर और कंप्यूटर के पीछे एक पेशेवर काइट टीम। हम आपकी काइटसर्फिंग यात्रा का हर विवरण व्यवस्थित करते हैं। हम आपसे मिलने और एक साथ अच्छा समय बिताने के लिए उत्सुक हैं!
              चाहे आप एक शुरुआती हों जो मूल बातें सीखना चाहते हैं या एक अनुभवी काइटसर्फर जो नए रोमांच की खोज में है, हमारी टीम हर कदम पर आपका समर्थन करने के लिए यहां है।
              सर्वोत्तम स्थानों का चयन करने से लेकर अनुकूलतम पवन स्थितियों तक, और आवास और उपकरणों की व्यवस्था करने तक, हम सब कुछ संभालते हैं।`,
        nl: `Een professioneel kite team, op het strand en achter de computer. We organiseren je kitesurftrip tot in de puntjes. We kijken ernaar uit om je te ontmoeten en samen een geweldige tijd te hebben!
              Of je nu een beginner bent die de basis wil leren of een ervaren kitesurfer die op zoek is naar nieuwe avonturen, ons team staat klaar om je bij elke stap te ondersteunen.
              Van het selecteren van de beste locaties met optimale windomstandigheden tot het regelen van accommodatie en uitrusting, wij regelen alles.`,
      },
      imgPosition: 'left',
    },
    {
      imgSrc: lifestyleimg2,
      text: {
        en: 'Why KiteActive?',
        hi: 'काइटएक्टिव क्यों?',
        nl: 'Waarom KiteActive?',
      },
      heading: {
        en: 'The Greatest Sport of All Time',
        hi: 'दुनिया का सबसे अच्छा खेल',
        nl: 'De beste sport ter wereld',
      },
      para: {
        en: `Kite surfing stands as a testament to the exhilarating fusion of skill, adrenaline, and the beauty of nature, earning its title as the greatest sport of all time. At Kiteactive, we celebrate this extraordinary adventure by offering unparalleled experiences that allow you to harness the wind and ride the waves like never before. Whether you're a beginner eager to learn or an experienced rider looking to refine your skills, our expert instructors are dedicated to helping you reach your goals in a supportive and thrilling environment. Embrace the rush of freedom as you soar through the air, feel the spray of the ocean, and connect with a vibrant community of fellow enthusiasts. `,
        hi: `क्योंकि यह सबसे अच्छा विकल्प है! काइटएक्टिव के साथ आप समान विचारधारा वाले लोगों के समूह के साथ यात्रा करते हैं। हमारे सभी काइटसर्फिंग शिविरों और आयोजनों के दौरान हम प्रगति और मस्ती पर ध्यान केंद्रित करते हैं!
              महासागर से जुड़ना, उस क्षण में पूरी तरह डूब जाना और बाहरी जीवन का आनंद लेना ऐसी चीजें हैं जो हमें बहुत पसंद हैं। हम आपको लैपॉइंट तरीके से सर्फ करना सिखाते हैं,
              स्थानीय, अनुभवी प्रशिक्षकों के साथ जो जानते हैं कि किन लहरों पर जाना है। आप या तो स्तर 1, 2, 3 में या गाइडिंग के साथ सर्फिंग करेंगे। आपके लिए परम सर्फ छुट्टी की व्यवस्था कर ली गई है!`,
        nl: `Omdat het de beste keuze is! Met KiteActive reis je met een groep gelijkgestemde mensen. Tijdens al onze kitesurfcamps en evenementen richten we ons op progressie en plezier!
              Verbinding maken met de oceaan, opgaan in het moment en genieten van het buitenleven zijn andere dingen waar we dol op zijn. We leren je surfen op de Lapoint-manier,
              samen met lokale, ervaren instructeurs die precies weten welke golven je moet pakken. Je gaat surfen op niveau 1, 2, 3 of met begeleiding. Wij hebben alles geregeld voor de ultieme surfvakantie!`,
      },
      imgPosition: 'right',
    },
  ];
  
  


const LIfeStyle = ({selectedLanguage}) => {
    return (
        <div>
            <div className='container mt-5 pt-5'>
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