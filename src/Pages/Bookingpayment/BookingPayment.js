import React from 'react'
import img from '../../Images/bookingandpaymet.webp'


const BookingPayment = () => {
    return (
        <div>


            <div className="container d-flex flex-column align-items-center justify-content-center surf_container mt-3 pt-5">
                <div className="row">
                    <div className="col">
                        <h1 className=" surf_text text-center"> <span className='text_span'>Booking & Payment</span></h1>
                        <p className='surf_para mt-3 '>
                            At KiteActive you can book your holiday without worries and completely at ease. After completing the booking form, you will be asked if you can make a down payment of 40% of the total travel sum. You can pay this via various online payment options. We require the complete remaining travel sum in our account 30 days before departure. So always book your holiday in time to avoid disappointment, because you only pay for most of the trip 30 days before departure!
                        </p>
                    </div>
                </div>
            </div>



            <div className='container-fluid mt-5 pt-5'>
                <div className='row mt-5 m-auto' >
                    <div className='col-md-6'>
                        <div className="life_style_div">
                            <h1 className="lifestyle_heading fs-1">
                                Book first and pay later!
                            </h1>
                            <div className="">
                                <p className="lifestyle_para fs-6 mt-0">
                                    <p>
                                        At KiteActive you can book your holiday without worries and completely at ease. After completing the booking form, you will be asked if you can make a down payment of 40% of the total travel sum. You can pay this via various online payment options. We require the complete remaining travel sum in our account 30 days before departure. So always book your holiday in time to avoid disappointment, because you only pay for most of the trip 30 days before departure!

                                        <p>
                                            If you book a holiday that departs within 30 days, you must pay the entire travel sum immediately after receiving the final confirmation/invoice
                                        </p>
                                    </p>
                                </p>
                            </div>
                        </div>
                        <h1 className="lifestyle_heading fs-1">
                            Confirmation of your payment
                        </h1>
                        <p className="lifestyle_para fs-6 mt-0">
                            You will receive confirmation of your payment. If your payment is not received on time, you will be contacted by e-mail or telephone.
                        </p>

                    </div>

                    <div className='col-md-6'>
                        <div className='lifestyle_div text-center'>
                            <img src={img} className='lifestyle w-75' alt="lifestyle" />
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default BookingPayment
