import React from 'react';

import faqimage from "../../Images/faw.png"
const Faq = () => {
    const faqs = [
        {
            question: "Why should I choose to go on a surf camp with Lapoint?",
            answer: "Staying at a Lapoint surf camp is so much more than just a hostel experience. When you visit Lapoint, we want you to feel like you come to a home away from home. Besides surfing together with experienced surf coaches and learning to surf in a safe and fun way, you will create memories for life outside the water too. At Lapoint, we really are a big family with friendly social hosts that make sure you won't feel alone, even if you travel by yourself."
        },
        {
            question: "Which destinations are best to visit for digital nomads?",
            answer: "The best destination for digital nomads is our surf camp in Ericeira. There we have a big co-work space with a Wi-Fi connection, meeting rooms and spacious working areas and comfy chairs. All destinations have common areas where you can sit and work. Ahangama, Canggu, Santa Teresa and El Tunco all have good cafes and restaurants with good internet connections. In Canggu, there are also a lot of coworking offices around town."
        },
        {
            question: "What’s the average age of the guests coming to the surf camps?",
            answer: "All destinations have around 30% solo travelers and are all great destinations for people traveling alone. We have a lot of social activities throughout the week so it is very easy to get to know the other guests. There are social hosts working at the camp that makes sure no one feels left out or alone (unless they want to of course)."
        },
      
    ];

    const faqs2 = [
        {
            question: "During which season is it best to visit the surf camps?",
            answer: "You can read about the different levels on our website, and you choose it in the checkout process. Don't worry if you choose the wrong level, we can always change this when you arrive at the camp."
        },
        {
            question: "Which destinations are best to visit for solo travelers?",
            answer: "You can read about the different levels on our website, and you choose it in the checkout process. Don't worry if you choose the wrong level, we can always change this when you arrive at the camp."
        },
        {
            question: "How is the Wi-Fi connection for the surf camps?",
            answer: "You’ll create friendships for a lifetime with like-minded people and experience all kinds of adventures together. Depending on the location you chose, you can go on safaris, hike in rainforests and go horseback riding on beaches."
        }
    ]

    return (
        <>
            <div className='container-fluid faq_container'>
                <div className="row">
                    <div className="col pb-4 text-center">
                        <p className='faq_para'>FAQ</p>
                        <h2 className='faq_text'>Questions and answers</h2>
                    </div>
                </div>

                <div className='row mb-3 p-3'>
                    <div className="col-lg-4">
                        {faqs.map((faq, index) => (
                            <details className='shadow-sm mt-3' key={index}>
                                <summary>{faq.question}</summary>
                                <div className="faq__content fs-5 mb-2">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>

                    <div className="col-lg-4">
                        {faqs2.map((faq, index) => (
                            <details className='shadow-sm mt-3' key={index}>
                                <summary>{faq.question}</summary>
                                <div className="faq__content fs-5 mb-2">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
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
