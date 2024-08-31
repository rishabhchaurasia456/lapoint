import React from 'react'
// import Reviewdata from './ReviewData'
import img1 from "../../Images/default-avatar-2020-44.jpg"

const Carddata_head_section = [
    {
        title: {
            en: "What do Our",
            nl: "Wat zeggen", // Dutch
            hi: "हमारे यात्री", // Hindi
        },
        title1: {
            en: "Travelers say?",
            nl: "onze reizigers?", // Dutch
            hi: "क्या कहते हैं?", // Hindi
        }
    }
];

// const Reviewdata = [
//     {
//         id: "1",
//         img: img1,
//         name: "Emma Rietveld",
//         date: "April 17",
//         start: "5",
//         title: "WE had the best time!",
//         para: "It was Wad N Party again last weekend! Well organised, good food, fun evenings and of course kiting!",
//     },
//     {
//         id: "2",
//         img: img1,
//         name: "FirstMate Appie",
//         date: "July 21",
//         start: "5",
//         title: "WE had the best time!",
//         para:" Last weekend I went to the Wadden with Kite Active for the Sail & Kite trip. It was a wonderful weekend away. ",
//     },
//     {
//         id: "3",
//         img: img1,
//         name: "Sietse",
//         date: "March 6",
//         start: "5",
//         title: "WE had the best time!",
//         para: "We went on a trip with KiteActive. It was fun. The boat left Franeker on Friday, but we were allowed to come and spend the night on Thursday. .",
//     },
//     {
//         id: "4",
//         img: img1,
//         name: "marc van der drift",
//         date: "June 5",
//         start: "5",
//         title: "WE had the best time!",
//         para: "Amazing weekend, awesome crew, wicked people!!!",
//     },
//     {
//         id: "5",
//         img: img1,
//         name: "Willem Schinkelshoek",
//         date: "July 19",
//         start: "5",
//         title: "WE had the best time!",
//         para: "Had a great time in brasiel good organised super nice guids.see you next time.",
//     },
//     {
//         id: "6",
//         img: img1,
//         name: "Cobie Harkema",
//         date: "August 20",
//         start: "5",
//         title: "WE had the best time!",
//         para: "Great travel experiences with Kiteactive!Learn big tricks in Tarifa, sail and kite during the Wadden weekend and downwind twice in ",
//     },
//     {
//         id: "7",
//         img: img1,
//         name: "ilse de vries",
//         date: "July 5",
//         start: "5",
//         title: "WE had the best time!",
//         para: "Our first trip with KiteActive was an immediate success. Well organized and an unforgettable experience. ",
//     },
//     {
//         id: "8",
//         img: img1,
//         name: "Ann DS",
//         date: "August 3",
//         start: "5",
//         title: "WE had the best time!",
//         para: "Just got back from a week in Tarifa with the KiteActive gang - what a brilliant week, we had wind pretty much every day, stayed.",
//     },
// ]
const Reviewdata = [
    {
        id: "1",
        img: img1,
        start: "5",
        name: "Emma Rietveld",
        date: "April 17",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Dutch
            hi: "हमने सबसे अच्छा समय बिताया!", // Hindi
        },
        para: {
            en: "It was Wad N Party again last weekend! Well organised, good food, fun evenings and of course kiting!",
            nl: "Het was weer Wad N Party afgelopen weekend! Goed georganiseerd, lekker eten, gezellige avonden en natuurlijk kiten!", // Dutch
            hi: "पिछले सप्ताहांत फिर से वाड एन पार्टी थी! अच्छी तरह से संगठित, अच्छा खाना, मजेदार शामें और निश्चित रूप से काइटिंग!", // Hindi
        }
    },
    {
        id: "2",
        img: img1,
        start: "5",
        name: "FirstMate Appie",
        date: "July 21",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Dutch
            hi: "हमने सबसे अच्छा समय बिताया!", // Hindi
        },
        para: {
            en: "Last weekend I went to the Wadden with Kite Active for the Sail & Kite trip. It was a wonderful weekend away.",
            nl: "Afgelopen weekend ben ik met Kite Active naar de Wadden gegaan voor de Sail & Kite trip. Het was een heerlijk weekend weg.", // Dutch
            hi: "पिछले सप्ताहांत, मैं सेल एंड काइट ट्रिप के लिए काइट एक्टिव के साथ वाडेन गया था। यह एक अद्भुत सप्ताहांत था।", // Hindi
        }
    },
    {
        id: "3",
        img: img1,
        start: "5",
        name: "Sietse",
        date: "March 6",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Dutch
            hi: "हमने सबसे अच्छा समय बिताया!", // Hindi
        },
        para: {
            en: "We went on a trip with KiteActive. It was fun. The boat left Franeker on Friday, but we were allowed to come and spend the night on Thursday.",
            nl: "We gingen op reis met KiteActive. Het was leuk. De boot vertrok vrijdag uit Franeker, maar we mochten donderdag al komen overnachten.", // Dutch
            hi: "हम काइटएक्टिव के साथ यात्रा पर गए। यह मजेदार था। नाव शुक्रवार को फ्रानेकर से रवाना हुई, लेकिन हमें गुरुवार को आने और रात बिताने की अनुमति थी।", // Hindi
        }
    },
    {
        id: "4",
        img: img1,
        start: "5",
        name: "marc van der drift",
        date: "June 5",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Dutch
            hi: "हमने सबसे अच्छा समय बिताया!", // Hindi
        },
        para: {
            en: "Amazing weekend, awesome crew, wicked people!!!",
            nl: "Geweldig weekend, geweldig team, geweldige mensen!!!", // Dutch
            hi: "अद्भुत सप्ताहांत, शानदार टीम, अद्भुत लोग!!!", // Hindi
        }
    },
    {
        id: "5",
        img: img1,
        start: "5",
        name: "Willem Schinkelshoek",
        date: "July 19",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Dutch
            hi: "हमने सबसे अच्छा समय बिताया!", // Hindi
        },
        para: {
            en: "Had a great time in Brazil, well organized, super nice guides. See you next time.",
            nl: "Een geweldige tijd gehad in Brazilië, goed georganiseerd, super aardige gidsen. Tot de volgende keer.", // Dutch
            hi: "ब्राजील में बहुत अच्छा समय बिताया, अच्छी तरह से संगठित, सुपर अच्छे गाइड। अगली बार मिलते हैं।", // Hindi
        }
    },
    {
        id: "6",
        img: img1,
        start: "5",
        name: "Cobie Harkema",
        date: "August 20",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Dutch
            hi: "हमने सबसे अच्छा समय बिताया!", // Hindi
        },
        para: {
            en: "Great travel experiences with Kiteactive! Learn big tricks in Tarifa, sail and kite during the Wadden weekend and downwind twice.",
            nl: "Geweldige reiservaringen met Kiteactive! Leer grote trucs in Tarifa, zeil en kite tijdens het Waddenweekend en tweemaal downwind.", // Dutch
            hi: "काइटएक्टिव के साथ शानदार यात्रा अनुभव! तारिफा में बड़े ट्रिक्स सीखें, वाडेन सप्ताहांत के दौरान पाल और काइट और दो बार डाउनविंड।", // Hindi
        }
    },
    {
        id: "7",
        img: img1,
        start: "5",
        name: "ilse de vries",
        date: "July 5",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Dutch
            hi: "हमने सबसे अच्छा समय बिताया!", // Hindi
        },
        para: {
            en: "Our first trip with KiteActive was an immediate success. Well organized and an unforgettable experience.",
            nl: "Onze eerste reis met KiteActive was direct een succes. Goed georganiseerd en een onvergetelijke ervaring.", // Dutch
            hi: "काइटएक्टिव के साथ हमारी पहली यात्रा तुरंत ही सफल रही। अच्छी तरह से संगठित और एक अविस्मरणीय अनुभव।", // Hindi
        }
    },
    {
        id: "8",
        img: img1,
        start: "5",
        name: "Ann DS",
        date: "August 3",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Dutch
            hi: "हमने सबसे अच्छा समय बिताया!", // Hindi
        },
        para: {
            en: "Just got back from a week in Tarifa with the KiteActive gang - what a brilliant week, we had wind pretty much every day, stayed.",
            nl: "Net terug van een week in Tarifa met de KiteActive-bende - wat een geweldige week, we hadden vrijwel elke dag wind.", // Dutch
            hi: "अभी-अभी काइटएक्टिव गैंग के साथ तारिफा में एक सप्ताह बिताकर लौटा हूं - क्या शानदार सप्ताह था, हमारे पास लगभग हर दिन हवा थी।", // Hindi
        }
    }
];


const CampReview = ({selectedLanguage}) => {
    return (
        <div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col text-center">
                        <h1 className="camp_review_text">
                        {Carddata_head_section[0].title[selectedLanguage]} <span className='text_span'>{Carddata_head_section[0].title1[selectedLanguage]}</span>
                        </h1>
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='card col mx-4 py-2 border-0 review_card'>
                        <div>
                            <span>5.0</span>
                            <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                            <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                            <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                            <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                            <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                        </div>
                    </div>
                </div>
                <div className='row p-3'>
                    {/* Review card */}
                    {Reviewdata.map(({ img, name, date, title, para, }) => (
                        <div className='col-md-3 mt-4'>
                            <div className='card h-100 p-4 border-0 review_card'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <img src={img} alt="" width="100%" className='rounded-circle' />
                                    </div>
                                    <div className='col-9'>
                                        <div className='col'><b>{name}</b></div>
                                        <div className='col'>{date}</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div>
                                        <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                                        <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                                        <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                                        <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                                        <i className='fa fa-star mt-3 ms-1 mb-2 text-warning'></i>
                                    </div>
                                    {/* <p><b>{title}</b></p> */}
                                    <p>{para[selectedLanguage]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CampReview