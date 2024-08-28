import React from 'react'
// import Reviewdata from './ReviewData'
import img1 from "../../Images/default-avatar-2020-44.jpg"


const Reviewdata = [
    {
        id: "1",
        img: img1,
        name: "Emma Rietveld",
        date: "April 17",
        start: "5",
        title: "WE had the best time!",
        para: "It was Wad N Party again last weekend! Well organised, good food, fun evenings and of course kiting!",
    },
    {
        id: "2",
        img: img1,
        name: "FirstMate Appie",
        date: "July 21",
        start: "5",
        title: "WE had the best time!",
        para:" Last weekend I went to the Wadden with Kite Active for the Sail & Kite trip. It was a wonderful weekend away. ",
    },
    {
        id: "3",
        img: img1,
        name: "Sietse",
        date: "March 6",
        start: "5",
        title: "WE had the best time!",
        para: "We went on a trip with KiteActive. It was fun. The boat left Franeker on Friday, but we were allowed to come and spend the night on Thursday. .",
    },
    {
        id: "4",
        img: img1,
        name: "marc van der drift",
        date: "June 5",
        start: "5",
        title: "WE had the best time!",
        para: "Amazing weekend, awesome crew, wicked people!!!",
    },
    {
        id: "5",
        img: img1,
        name: "Willem Schinkelshoek",
        date: "July 19",
        start: "5",
        title: "WE had the best time!",
        para: "Had a great time in brasiel good organised super nice guids.see you next time.",
    },
    {
        id: "6",
        img: img1,
        name: "Cobie Harkema",
        date: "August 20",
        start: "5",
        title: "WE had the best time!",
        para: "Great travel experiences with Kiteactive!Learn big tricks in Tarifa, sail and kite during the Wadden weekend and downwind twice in ",
    },
    {
        id: "7",
        img: img1,
        name: "ilse de vries",
        date: "July 5",
        start: "5",
        title: "WE had the best time!",
        para: "Our first trip with KiteActive was an immediate success. Well organized and an unforgettable experience. ",
    },
    {
        id: "8",
        img: img1,
        name: "Ann DS",
        date: "August 3",
        start: "5",
        title: "WE had the best time!",
        para: "Just got back from a week in Tarifa with the KiteActive gang - what a brilliant week, we had wind pretty much every day, stayed.",
    },
]

const CampReview = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col text-center">
                        <h1 className="camp_review_text">
                        What do Our <span className='text_span'>Travelers say?</span>
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
                                    <p>{para}</p>
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