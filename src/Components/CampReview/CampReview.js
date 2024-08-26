import React from 'react'
// import Reviewdata from './ReviewData'
import img1 from "../../Images/default-avatar-2020-44.jpg"


const Reviewdata = [
    {
        id: "1",
        img: img1,
        name: "Johan.h",
        date: "July 6",
        start: "5",
        title: "WE had the best time!",
        para: "Lapoint Ericeria blew our minds. The Camp was so nice and it has everything you could wish for.",
    },
    {
        id: "2",
        img: img1,
        name: "Johan.h",
        date: "July 6",
        start: "5",
        title: "WE had the best time!",
        para: "Lapoint Ericeria blew our minds. The Camp was so nice and it has everything you could wish for.",
    },
    {
        id: "3",
        img: img1,
        name: "Johan.h",
        date: "July 6",
        start: "5",
        title: "WE had the best time!",
        para: "Lapoint Ericeria blew our minds. The Camp was so nice and it has everything you could wish for.",
    },
    {
        id: "4",
        img: img1,
        name: "Johan.h",
        date: "July 6",
        start: "5",
        title: "WE had the best time!",
        para: "Lapoint Ericeria blew our minds. The Camp was so nice and it has everything you could wish for.",
    },
    {
        id: "5",
        img: img1,
        name: "Johan.h",
        date: "July 6",
        start: "5",
        title: "WE had the best time!",
        para: "Lapoint Ericeria blew our minds. The Camp was so nice and it has everything you could wish for.",
    },
    {
        id: "6",
        img: img1,
        name: "Johan.h",
        date: "July 6",
        start: "5",
        title: "WE had the best time!",
        para: "Lapoint Ericeria blew our minds. The Camp was so nice and it has everything you could wish for.",
    },
    {
        id: "7",
        img: img1,
        name: "Johan.h",
        date: "July 6",
        start: "5",
        title: "WE had the best time!",
        para: "Lapoint Ericeria blew our minds. The Camp was so nice and it has everything you could wish for.",
    },
    {
        id: "8",
        img: img1,
        name: "Johan.h",
        date: "July 6",
        start: "5",
        title: "WE had the best time!",
        para: "Lapoint Ericeria blew our minds. The Camp was so nice and it has everything you could wish for.",
    },
]

const CampReview = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col text-center">
                        <h1 className="camp_review_text">
                            Camp <span className="text_span">reviews</span> from guests
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
                                    <p><b>{title}</b></p>
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