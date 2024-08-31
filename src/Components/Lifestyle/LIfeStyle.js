import React from 'react'

import lifestyleimg2 from '../../Images/kitecenter-zanzibar-edited-2046x2048-1-1200x900-1.webp'
import lifestyleimg1 from '../../Images/img3.png'

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
        en: `A professional kite team, on the beach and behind the computer. We organize your kitesurfing trip down to the last detail. We look forward to meeting you and having a great time together!
              Whether you're a beginner looking to learn the basics or an experienced kitesurfer seeking the thrill of new adventures, our team is here to support you every step of the way.
              From selecting the best locations with optimal wind conditions to arranging accommodations and equipment, we handle it all.`,
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
        en: 'The best sport in the world',
        hi: 'दुनिया का सबसे अच्छा खेल',
        nl: 'De beste sport ter wereld',
      },
      para: {
        en: `Because it's the best choice! With KiteActive you travel with a group of like-minded people. During all our kitesurfing camps & events we focus on progression and fun!
              Connecting with the ocean, being immersed in the moment and embracing outdoor living are other things we just love about it. We teach you how to surf the Lapoint way,
              together with local, experienced instructors who know just which breaks to head out to. You will be surfing in either levels 1, 2, 3 or with guiding. We got you covered for the ultimate surf holiday!`,
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
  
  

// const LIfeStyle = () => {
//     return (
//         <div>
//             <div className='container mt-5  pt-5 '>
//                 <div className='row mt-3'>
//                     <div className='col-md-6'>
//                         <div className='lifestyle_div'>
//                         <img src={lifestyleimg1} className='lifestyle' alt="lifestyle" />
//                         </div>
//                     </div>
//                     <div className='col-md-6'>
//                         <div className="life_style_div">
//                             <div className=" ">
//                                 <p className='lifestyle_text'>
//                                     Meet Our Team
//                                 </p>
//                             </div>

//                             <div className="">
//                                 <h1 className="lifestyle_heading">
//                                     The kiteactive way of life
//                                 </h1>
//                             </div>

//                             <div className="">
//                                 <h1 className="lifestyle_para">
//                                     <p>

//                                         A professional kite team, on the beach and behind the computer. We organize your kitesurfing trip down to the last detail. We look forward to meeting you and having a great time together!
//                                     </p>

//                                     Whether you're a beginner looking to learn the basics or an experienced kitesurfer seeking the thrill of new adventures, our team is here to support you every step of the way. From selecting the best locations with optimal wind conditions to arranging accommodations and equipment, we handle it all.
//                                 </h1>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <div className='row mt-5'>
//                     <div className='col-md-6'>
//                         <div className="life_style_div">
//                             <div className=" ">
//                                 <p className='lifestyle_text'>
//                                 Why KiteActive?
//                                 </p><br />
//                             </div>
//                             <div className="">
//                                 <h1 className="lifestyle_heading">
//                                     The best sport in the world
//                                 </h1>
//                             </div>
//                             <div className="">
//                                 <h1 className="lifestyle_para">
//                                 Because it's the best choice! With KiteActive you travel with a group of like-minded people. During all our kitesurfing camps & events we focus on progression and fun!<br /><br />
//                                     Connecting with the ocean, being immersed in the moment and embracing outdoor living are other things we just love about it. We teach you how to surf the Lapoint way, together with local, experienced instructors who know just which breaks to head out to. You will be surfing in either levels 1, 2, 3 or with guiding. We got you covered for the ultimate surf holiday!
//                                 </h1>
//                             </div>
//                         </div>

//                     </div>
//                     <div className='col-md-6'>
//                         {/* <div className='lifestyle' style={{ backgroundImage: `url(${lp1})` }}></div> */}
//                         <img src={lifestyleimg2} className='lifestyle' alt="lifestyle" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

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