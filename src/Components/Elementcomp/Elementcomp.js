import React from 'react'
import img from "../../Images/just.svg"

const content  = [
    {
        title: {
            en: "Let's cool down the planet Together",
            nl: "Laten we samen de planeet afkoelen", // Dutch
            hi: "आइये मिलकर ग्रह को ठंडा करें", // Hindi
        },
        subtitle: {
            en: "At KiteActive we believe in the future of our planet and the oceans. Wouldn't it be great if our children could enjoy the same wonderful planet as we do? Just dig in!",
            nl: "Bij KiteActive geloven we in de toekomst van onze planeet en de oceanen. Zou het niet geweldig zijn als onze kinderen van dezelfde prachtige planeet konden genieten als wij? Ga er maar in duiken!", // Dutch
            hi: "काइटएक्टिव में हम अपने ग्रह और महासागरों के भविष्य में विश्वास करते हैं। क्या यह बहुत बढ़िया नहीं होगा अगर हमारे बच्चे भी उसी अद्भुत ग्रह का आनंद ले सकें जैसा हम लेते हैं? बस इसमें डूब जाइए!", // Hindi
        }
    }
]

const Elementcomp = ({selectedLanguage}) => {
    return (
        <div>


            <div className="container-fluid mt-5 pt-5">
                <div className="row element_row">
                    <div className="col-12 col-md-3">
                        {/* <!-- Content for the first column --> */}
                        <div>
                            <img src={img} alt="" className='w-75 mt-5 mx-3 pt-4' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <h1 className="element_text">{content[0].title[selectedLanguage]}</h1>
                            <p className="element_para">
                                {content[0].subtitle[selectedLanguage]}
                            </p>
                        </div>
                    </div>
                        {/* <!-- Content for the third column --> */}
                    <div className="col-12 col-md-3">
                    <button className='element_btn text-center'>
                        digg inn!
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Elementcomp
