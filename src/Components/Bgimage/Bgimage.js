import React from 'react'

import bgimg from '../../Images/bg_img.jpg';

const content = {
    en: {
        title: "Sustainability",
        subtitle: "2011, KiteActive wass born",
        para: "KiteActive has started organizing kite & sailing trips along the Wadden Islands. The combination of a week of intensive kitesurfing (lessons) and a week’s holiday in a place with the ingredients: wind, beach, water and a chill atmosphere turned out to be a good concept. Our passion for traveling and kitesurfing has ensured that we have visited many kitespots in the world and are still looking for the best destinations to (learn to) kitesurf. Thanks to the experiences and enthusiasm of our instructors, KiteActive has continued to grow.",
    },
    hi: {
        title: "सस्टेनेबिलिटी",
        subtitle: "2011, काइटएक्टिव पैदा हुआ",
        para: "काइटएक्टिव ने वाड्डन द्वीपसमूह के साथ काइट और सेलिंग ट्रिप्स का आयोजन शुरू कर दिया. एक सप्ताह के इंटेंसिव काइटसर्फिंग (पाठ) और एक सप्ताह की छुट्टी के संयोजन ने एक अच्छा कॉन्सेप्ट साबित किया. हमारे यात्रा और काइटसर्फिंग के लिए जुनून ने सुनिश्चित किया है कि हमने दुनिया में कई काइटस्पॉट्स का दौरा किया है और अभी भी (सीखने के लिए) काइटसर्फ करने के लिए सर्वश्रेष्ठ गंतव्यों की तलाश कर रहे हैं. हमारे प्रशिक्षकों के अनुभव और उत्साह के लिए धन्यवाद, काइटएक्टिव ने निरंतर वृद्धि की है.",
    },
    nl: {
        title: "Duurzaamheid",
        subtitle: "2011, KiteActive werd geboren",
        para: "KiteActive heeft begonnen met het organiseren van kite- en zeilreizen langs de Waddeneilanden. De combinatie van een week intensief kitesurfen (lessen) en een week vakantie op een plek met de ingrediënten: wind, strand, water en een relaxte sfeer bleek een goed concept te zijn. Onze passie voor reizen en kitesurfen heeft ervoor gezorgd dat we veel kitespots in de wereld hebben bezocht en nog steeds op zoek zijn naar de beste bestemmingen om (leren) kitesurfen. Dankzij de ervaringen en enthousiasme van onze instructeurs, is KiteActive blijven groeien.",
    },
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
