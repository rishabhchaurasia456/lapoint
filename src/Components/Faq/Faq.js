import React, { useState } from 'react';

const Faq = () => {
    // Sample FAQ data
    const faqData = [
        {
            id: 1,
            question: "Why should I choose to go on a surf camp with Lapoint?",
            answer: "Staying at a Lapoint surf camp is so much more than just a hostel experience. When you visit Lapoint, we want you to feel like you come to a home away from home. Besides surfing together with experienced surf coaches and learning to surf in a safe and fun way, you will create memories for life outside the water too. At Lapoint, we really are a big family with friendly social hosts that make sure you won't feel alone, even if you travel by yourself. You’ll create friendships for a lifetime with like-minded people and experience all kinds of adventures together. Depending on the location you chose, you can go on safaris, hike in rainforests and go horseback riding on beaches"
        },

        {
            id: 2,
            question: "What’s the average age of the guests coming to the surf camps?",
            answer: "The best destination for digital nomads is our surf camp in Ericeira. There we have a big co-work space with a Wi-Fi connection, meeting rooms and spacious working areas and comfy chairs. All destinations have common areas where you can sit and work. Ahangama, Canggu, Santa Teresa and El Tunco all have good cafes and restaurants with good internet connections. In Canggu, there are also a lot of coworking offices around town."
        },
        {
            id: 3,
            question: "Why should I choose to go on a surf camp with Lapoint?",
            answer: "Staying at a Lapoint surf camp is so much more than just a hostel experience. When you visit Lapoint, we want you to feel like you come to a home away from home. Besides surfing together with experienced surf coaches and learning to surf in a safe and fun way, you will create memories for life outside the water too. At Lapoint, we really are a big family with friendly social hosts that make sure you won't feel alone, even if you travel by yourself. You’ll create friendships for a lifetime with like-minded people and experience all kinds of adventures together. Depending on the location you chose, you can go on safaris, hike in rainforests and go horseback riding on beaches"
        },
        {
            id: 4,
            question: "How is the Wi-Fi connection for the surf camps?",
            answer: "You can read about the different levels on our website, and you choose it in the checkout process. Don't worry if you choose the wrong level, we can always change this when you arrive at the camp."
        },
        {
            id: 5,
            question: "Which destinations are best to visit for digital nomads?",
            answer: "All destinations have around 30% solo travelers and are all great destinations for people traveling alone. We have a lot of social activities throughout the week so it is very easy to get to know the other guests. There are social hosts working at the camp that makes sure no one feels left out or alone (unless they want to of course)."
        },
        {
            id: 6,
            question: "During which season is it best to visit the surf camps?",
            answer: "All destinations have around 30% solo travelers and are all great destinations for people traveling alone. We have a lot of social activities throughout the week so it is very easy to get to know the other guests. There are social hosts working at the camp that makes sure no one feels left out or alone (unless they want to of course)."
        },
        {
            id: 7,
            question: "Can I change my surf course level?",
            answer: "All destinations have around 30% solo travelers and are all great destinations for people traveling alone. We have a lot of social activities throughout the week so it is very easy to get to know the other guests. There are social hosts working at the camp that makes sure no one feels left out or alone (unless they want to of course)."
        },
        // Add more FAQs as needed
    ];



    // State to manage the visibility of answers
    const [visibleIndex, setVisibleIndex] = useState(null);

    // Toggle the visibility of the answer
    const handleToggleBox = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
        // console.log(index)
    };




    const handleClose = () => {
        setVisibleIndex(null);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <p className='faq_para'>FAQ</p>
                    <h2 className='faq_text'>Questions and answers</h2>
                </div>
            </div>

            <div className="faq_cont">
                <div className="row">
                    {faqData.map((faq, index) => (
                        <div key={index} className="col-lg-3 mb-5">
                            <div className='faq_question' onClick={() => handleToggleBox(index)}>
                                <div>
                                    <p onClick={() => handleToggleBox(index)}>
                                        <i className='fa fa-book mx-1'></i>
                                        {faq.question}
                                    </p>
                                </div>
                            </div>

                            <div className={`popupbox ${visibleIndex === index ? 'visible' : 'hidden'}`} >
                                <div className="row">
                                    <p className="close-btn" onClick={handleClose}>&times;</p>
                                </div>
                                <p>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* Add any content you need here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
