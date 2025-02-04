import React from 'react'
// import Reviewdata from './ReviewData'
import img1 from "../../Images/default-avatar-2020-44.jpg"
import img2 from "../../Images/reviewimg.jpg"
import img3 from "../../Images/reviewimg2.jpg"
import img4 from "../../Images/reviewimg3.jpg"
import img5 from "../../Images/reviewimg4.jpg"


const Carddata_head_section = [
    {
        title: {
            en: "What do Our",
            gr: "Was sagen unsere",
            du: "Wat zeggen onze"
        },
        title1: {
            en: "Travelers say?",
            gr: "Reisenden?",
            du: "reizigers zeggen?"
        }
    }
];

const Reviewdata = [
    {
        id: "1",
        img: img1,
        start: "5",
        name: "A.M. Gorter",
        date: "April 17",
        title: {
            en: "WE had the best time!",
            gr: "Wir hatten die beste Zeit!",
            du: "We hadden de beste tijd!"
        },
        para: {
            en: "In May 2024 we participated in Sailing & Kitesurfing on the Wadden Sea. Had booked alone and was certainly not the only one.",
            gr: "Ich kann Kiteactive nicht genug für die wunderbaren Erinnerungen danken, die ich gemacht habe! Die Lektionen sind gründlich und die Orte atemberaubend. Ein Muss für jeden!",
            du: "Het was weer Wad N Party afgelopen weekend! Goed georganiseerd, lekker eten, gezellige avonden en natuurlijk kiten!"
        }
    },
    {
        id: "2",
        img: img2,
        start: "5",
        name: "marc van der drift",
        date: "July 21",
        title: {
            en: "An unforgettable adventure!",
            gr: "Ein unvergessliches Abenteuer!",
            du: "Een onvergetelijk avontuur!"
        },
        para: {
            en: "Amazing weekend, awesome crew, wicked people!!!",
            gr: "Kiteactive hat meine Perspektive auf Outdoorsportarten verändert. Der Nervenkitzel des Kitesurfens ist unglaublich, und die Unterstützung des Teams machte es zu einem unvergesslichen Erlebnis.",
            du: "Afgelopen weekend ben ik met KiteActive naar de Wadden gegaan voor de Sail & Kite trip. Het was een heerlijk weekend weg."
        }
    },
    {
        id: "3",
        img: img3,
        start: "5",
        name: "Mikesurft",
        date: "March 6",
        title: {
            en: "Adventure at its best!",
            gr: "Abenteuer vom Feinsten!",
            du: "Avontuur op zijn best!"
        },
        para: {
            en: "If you're looking for an adventure, look no further! Kiteactive's trips are well-planned and full of excitement. I've never had more fun on the water!",
            gr: "Wenn Sie ein Abenteuer suchen, suchen Sie nicht weiter! Die Reisen von Kiteactive sind gut geplant und voller Spannung. Ich hatte noch nie mehr Spaß auf dem Wasser!",
            du: "We gingen op reis met KiteActive. Het was leuk. De boot vertrok vrijdag uit Franeker, maar we mochten donderdag al komen overnachten."
        }
    },
    {
        id: "4",
        img: img4,
        start: "5",
        name: "Rens Appels",
        date: "June 5",
        title: {
            en: "A learning experience!",
            gr: "Eine Lernerfahrung!",
            du: "Een leerervaring!"
        },
        para: {
            en: "It was Wad N Party again last weekend! Well organised, good food, fun evenings and of course kiting!",
            gr: "Die Trainer bei Kiteactive sind fantastisch! Sie geben individuelle Tipps, die mir wirklich geholfen haben, meine Fähigkeiten zu verbessern. Ich kann es kaum erwarten, zurückzukommen!",
            du: "Geweldig weekend, geweldig team, geweldige mensen!!!"
        }
    },
    {
        id: "5",
        img: img5,
        start: "4",
        name: "FirstMate Appie",
        date: "July 19",
        title: {
            en: "Thrilling and fun!",
            gr: "Spannend und lustig!",
            du: "Spannend en leuk!"
        },
        para: {
            en: "It was Wad N Party again last weekend! Well organised, good food, fun evenings and of course great kiting!",
            gr: "Kiteactive beizutreten war die beste Entscheidung, die ich dieses Jahr getroffen habe. Ich habe so viel gelernt und unglaubliche Freunde gefunden. Außerdem ist der Nervenkitzel des Kitesurfens unübertroffen!",
            du: "Een geweldige tijd gehad in Brazilië, goed georganiseerd, super aardige gidsen. Tot de volgende keer."
        }
    },
    {
        id: "6",
        img: img3,
        start: "5",
        name: "Cobie Harkema",
        date: "August 20",
        title: {
            en: "Unbelievable experience!",
            gr: "Unglaubliche Erfahrung!",
            du: "Ongelooflijke ervaring!"
        },
        para: {
            en: "Incredible restaurant, the food is absolutely amazing and great value! Both the waiter and the chef were really welcoming and entertaining. ",
            gr: "Kiteactive bietet das ultimative Kitesurf-Erlebnis! Die Ausrüstung ist erstklassig, und die atemberaubenden Orte machen jede Sitzung unvergesslich. Es ist wirklich die größte Sportart aller Zeiten!",
            du: "Geweldige reiservaringen met Kiteactive! Leer grote trucs in Tarifa, zeil en kite tijdens het Waddenweekend en tweemaal downwind."
        }
    },
    {
        id: "7",
        img: img4,
        start: "2",
        name: "Nick De Bruijn",
        date: "July 5",
        title: {
            en: "A perfect getaway!",
            gr: "Ein perfekter Kurzurlaub!",
            du: "Een perfecte vakantie!"
        },
        para: {
            en: "Our team has followed several training courses at Spraakwater for presentations during meetups and customer conversations.",
            gr: "Ich hatte die beste Zeit mit Kiteactive! Die Gemeinschaft ist einladend, und die Reisen sind gut organisiert. Ich kann es kaum erwarten, mein nächstes Abenteuer zu buchen!",
            du: "Onze eerste reis met KiteActive was direct een succes. Goed georganiseerd en een onvergetelijke ervaring."
        }
    },
    {
        id: "8",
        img: img2,
        start: "1",
        name: "Emma Rietveld",
        date: "August 3",
        title: {
            en: "Fantastic fun on the water!",
            gr: "Fantastischer Spaß auf dem Wasser!",
            du: "Fantastisch plezier op het water!"
        },
        para: {
            en: "Last weekend I went to the Wadden with Kite Active for the Sail & Kite trip. It was a wonderful weekend away. ",
            gr: "Kiteactive hat mein Kitesurfen-Erlebnis völlig verändert! Die Trainer sind unglaublich kompetent und unterstützend. Ich fühlte mich die ganze Zeit sicher und gestärkt. Sehr zu empfehlen!",
            du: "Net terug van een week in Tarifa met de KiteActive-bende - wat een geweldige week, we hadden vrijwel elke dag wind."
        }
    }
];



const CampReview = ({ selectedLanguage }) => {
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
                    {/* Review cards */}
                    {Reviewdata.map(({ img, name, date, title, para }) => (
                        <div className='col-sm-6 col-md-4 col-lg-3 mt-4' key={name}>
                            <div className='card h-100 p-4 border-0 review_card'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <img src={img} alt="" className='img-fluid rounded-circle' />
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