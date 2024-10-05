import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();

    // Destructure the passed state
    const {
        selectedDuration,
        counts,
        countsbed,
        roomPrices,
        roomtype,
        updatedTotalPrice,
        totalCount,
        levels,
        startDate,
        endDate,
        actcounts,
        activityDetails
    } = location.state;


    const navigate = useNavigate()

    const handleUserinfo = () => {
        navigate('/userinfo', {
            state: {
                selectedDuration,
                counts,
                countsbed,
                roomPrices,
                roomtype,
                updatedTotalPrice,
                totalCount,
                levels,
                startDate,
                endDate,
                actcounts,
                activityDetails
            }
        })
    }
    return (
        <>

            <div className="container-fluid level_container">
                <div className="row">
                    <div className="col text-center">
                        <div className='person_week mt-5'>
                            <span> {new Date(startDate).toLocaleDateString()}</span>
                            -
                            <span> {new Date(endDate).toLocaleDateString()}</span>
                            <span> | Total Price: € {updatedTotalPrice}</span>

                        </div>
                    </div>
                </div>

                {/* <div className="container"> */}
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="datepick_border"></div>

                            <div>
                                 <div className='text-center checkout_data'>
                                 <p>Selected Duration : {selectedDuration}</p>
                                 <p>Total Count :  {totalCount}</p>
                                 </div>

                                <div>
                                    <h2 className='checkout_heading'>Room Details</h2>
                                    {roomtype.map((room, index) => (
                                        countsbed[index] > 0 && (
                                            <div className='row' key={index}>
                                                <div className="col-lg-9">
                                                    <div className='checkout_data'>
                                                        {room.room} - Count : {countsbed[index]}
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    {/* | Room Price:  */}
                                                    <div className='checkout_data'>
                                                        € {roomPrices[index]}
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    ))}
                                </div>

                                <div>
                                    <h2 className='checkout_heading'>Selected room</h2>
                                    {levels.map((item, index) => (
                                        counts[index] > 0 && (

                                            <div className='row' key={index}>

                                                <div className="col-lg-9">
                                                    <div className='checkout_data'>
                                                        {item.level} - Count : {counts[index]}
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    {/* | Room Price:  */}
                                                    <div className='checkout_data'>
                                                        {/* Price: */}
                                                        € {counts[index] * item.price}
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    ))}
                                </div>

                                <div>

                                    <h2 className='checkout_heading'>Selected Activities</h2>
                                    {activityDetails.map((activity, index) => (
                                        <div className='row' key={index}>
                                            <div className="col-lg-9">
                                                <div className='checkout_data'>
                                                    {activity.name} - Count : {activity.count}
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className='checkout_data'>
                                                    {/* Price: */}
                                                    {/* | Total Price: */}
                                                    € {activity.price}
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>

                                <div className='text-center mt-4'>
                                    <h3 className='checkout_heading'>Updated Total Price: € {updatedTotalPrice}</h3>
                                </div>



                                {/* Additional checkout actions can be added here, like payment buttons */}


                                <div className='btn_container'>
                                    <button className="level_btn mb-4" onClick={handleUserinfo}>
                                        Confirm and Pay
                                    </button>
                                </div>
                                

                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default Checkout;
