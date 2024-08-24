import React from 'react'

import lp1 from '../../Images/Rice_fields_in_Bali.jpg'
import lp2 from '../../Images/lapoint-free-rebookingcancellation-m.jpg'

const LIfeStyle2 = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-6 p-4'>
                        <div className='lifestyle' style={{ backgroundImage: `url(${lp1})` }}></div>
                    </div>
                    <div className='col-md-6 p-5'>
                        <div className="col ">
                            <p className='lifestyle_text'>
                                Travelling
                            </p><br />
                        </div>
                        <div className="col">
                            <h1 className="lifestyle_heading">
                                Fuel your wanderlust
                            </h1>
                        </div>
                        <div className="col">
                            <h1 className="lifestyle_para">
                                We love exploring the beautiful planet we call home, and wanderlust has led us to some of the best experiences in our life. We’ve seen incredible places and had some unforgettable adventures during our surf holidays, both in and out of the waters.<br/><br/>
                                Our surf camps are located by our favorite surf spots around the world. Going to one of our surf camps will make you feel like coming to a home away from home. Many solo travellers arrive at the camps alone and leave with friends for life. We truly believe travelling is the only thing you can buy that makes you richer.
                            </h1>
                        </div>

                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-6 p-5'>
                        <div className="col ">
                            <p className='lifestyle_text'>
                            </p><br />
                        </div>
                        <div className="col">
                            <h1 className="lifestyle_heading">
                                Free rebooking up to 14 days prior to arrival
                            </h1>
                        </div>
                        <div className="col">
                            <h1 className="lifestyle_para">
                                We offer free rebooking and cancellation opportunities within a time frame! When you book your stay with us more than three weeks in advance, you'll have 14 days of open purchase to rebook or cancel your trip. If you book within three weeks of your arrival, you'll have a 72-hour window for adjustments or cancelation. After this period, Lapoint will retain the deposit.<br/><br/>

                                If you need to cancel your trip, you can do so up to 35 days before your arrival. Should you have paid in full, you'll receive 75% of your payment back, with a 25% deposit retained by Lapoint. For cancellations made 35 days or closer to your arrival date, the entire payment will be retained.<br/><br/>

                                We offer a free rebooking or gift card option up to 14 days before your arrival. Additionally, you can add cancellation insurance to your booking for extra peace of mind.
                            </h1>
                        </div>

                    </div>
                    <div className='col-md-6 p-4'>
                        <div className='lifestyle' style={{ backgroundImage: `url(${lp2})` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LIfeStyle2