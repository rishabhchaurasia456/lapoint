import React from 'react'
// import Reviewdata from './ReviewData'
import img1 from "../../Images/default-avatar-2020-44.jpg"

const Carddata_head_section = [
    {
        title: {
            en: "What do Our",        // English
            nl: "Wat zeggen onze",    // Dutch (Netherlands)
            du: "Wat zeggen onze"     // Dutch
        },
        title1: {
            en: "Travelers say?",      // English
            nl: "reizigers zeggen?",    // Dutch (Netherlands)
            du: "reizigers zeggen?"     // Dutch
        }
    }
];


const Reviewdata = [
    {
        id: "1",
        img: img1,
        start: "5",
        name: "Michael Thompson",
        date: "April 17",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Netherlands
            du: "We hadden de beste tijd!", // Dutch
        },
        para: {
            en: "I can’t thank Kiteactive enough for the amazing memories I've made! The lessons are thorough, and the locations are breathtaking. A must-try for anyone!",
            nl: "Het was weer Wad N Party afgelopen weekend! Goed georganiseerd, lekker eten, gezellige avonden en natuurlijk kiten!", // Netherlands
            du: "Het was weer Wad N Party afgelopen weekend! Goed georganiseerd, lekker eten, gezellige avonden en natuurlijk kiten!", // Dutch
        }
    },
    {
        id: "2",
        img: img1,
        start: "5",
        name: "Jessica Parker",
        date: "July 21",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Netherlands
            du: "We hadden de beste tijd!", // Dutch
        },
        para: {
            en: "Kiteactive changed my perspective on outdoor sports. The thrill of kitesurfing is incredible, and the support from the team made it an unforgettable experience.",
            nl: "Afgelopen weekend ben ik met Kite Active naar de Wadden gegaan voor de Sail & Kite trip. Het was een heerlijk weekend weg.", // Netherlands
            du: "Afgelopen weekend ben ik met Kite Active naar de Wadden gegaan voor de Sail & Kite trip. Het was een heerlijk weekend weg.", // Dutch
        }
    },
    {
        id: "3",
        img: img1,
        start: "5",
        name: "Daniel Ramirez",
        date: "March 6",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Netherlands
            du: "We hadden de beste tijd!", // Dutch
        },
        para: {
            en: "If you're looking for an adventure, look no further! Kiteactive's trips are well-planned and full of excitement. I've never had more fun on the water!",
            nl: "We gingen op reis met KiteActive. Het was leuk. De boot vertrok vrijdag uit Franeker, maar we mochten donderdag al komen overnachten.", // Netherlands
            du: "We gingen op reis met KiteActive. Het was leuk. De boot vertrok vrijdag uit Franeker, maar we mochten donderdag al komen overnachten.", // Dutch
        }
    },
    {
        id: "4",
        img: img1,
        start: "5",
        name: "Sophia Chen",
        date: "June 5",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Netherlands
            du: "We hadden de beste tijd!", // Dutch
        },
        para: {
            en: "The instructors at Kiteactive are amazing! They provide personalized tips that really helped me improve my skills. I can't wait to go back for more lessons!",
            nl: "Geweldig weekend, geweldig team, geweldige mensen!!!", // Netherlands
            du: "Geweldig weekend, geweldig team, geweldige mensen!!!", // Dutch
        }
    },
    {
        id: "5",
        img: img1,
        start: "5",
        name: "James Patel",
        date: "July 19",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Netherlands
            du: "We hadden de beste tijd!", // Dutch
        },
        para: {
            en: "Joining Kiteactive was the best decision I made this year. I learned so much and made incredible friends. Plus, the thrill of kitesurfing is unmatched!",
            nl: "Een geweldige tijd gehad in Brazilië, goed georganiseerd, super aardige gidsen. Tot de volgende keer.", // Netherlands
            du: "Een geweldige tijd gehad in Brazilië, goed georganiseerd, super aardige gidsen. Tot de volgende keer.", // Dutch
        }
    },
    {
        id: "6",
        img: img1,
        start: "5",
        name: "Emma Wilson",
        date: "August 20",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Netherlands
            du: "We hadden de beste tijd!", // Dutch
        },
        para: {
            en: "Kiteactive offers the ultimate kitesurfing experience! The equipment is top-notch, and the stunning locations make every session unforgettable. It truly is the greatest sport of all time!",
            nl: "Geweldige reiservaringen met Kiteactive! Leer grote trucs in Tarifa, zeil en kite tijdens het Waddenweekend en tweemaal downwind.", // Netherlands
            du: "Geweldige reiservaringen met Kiteactive! Leer grote trucs in Tarifa, zeil en kite tijdens het Waddenweekend en tweemaal downwind.", // Dutch
        }
    },
    {
        id: "7",
        img: img1,
        start: "5",
        name: "David Lee",
        date: "July 5",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Netherlands
            du: "We hadden de beste tijd!", // Dutch
        },
        para: {
            en: "I had the best time with Kiteactive! The community is welcoming, and the trips are well-organized. I can't wait to book my next adventure!",
            nl: "Onze eerste reis met KiteActive was direct een succes. Goed georganiseerd en een onvergetelijke ervaring.", // Netherlands
            du: "Onze eerste reis met KiteActive was direct een succes. Goed georganiseerd en een onvergetelijke ervaring.", // Dutch
        }
    },
    {
        id: "8",
        img: img1,
        start: "5",
        name: "Olivia Johnson",
        date: "August 3",
        title: {
            en: "WE had the best time!",
            nl: "We hadden de beste tijd!", // Netherlands
            du: "We hadden de beste tijd!", // Dutch
        },
        para: {
            en: "Kiteactive has completely transformed my experience with kitesurfing! The instructors are incredibly knowledgeable and supportive. I felt safe and empowered every step of the way. Highly recommend!",
            nl: "Net terug van een week in Tarifa met de KiteActive-bende - wat een geweldige week, we hadden vrijwel elke dag wind.", // Netherlands
            du: "Net terug van een week in Tarifa met de KiteActive-bende - wat een geweldige week, we hadden vrijwel elke dag wind.", // Dutch
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