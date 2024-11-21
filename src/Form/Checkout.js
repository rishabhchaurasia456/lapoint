// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Checkout = () => {
//     const location = useLocation();

//     // Destructure the passed state
//     const {
//         selectedDuration,
//         counts,
//         countsbed,
//         // roomPrices,
//         // roomtype,
//         selectedRooms,
//         updatedTotalPrice,
//         totalCount,
//         levels,
//         startDate,
//         endDate,
//         actcounts,
//         activityDetails,
//         carRentalPrice,
//         lineItems
//     } = location.state;

//     console.log("carRentalPriceeeeeeeeeeeeeeeee", carRentalPrice)
//     console.log("roommmmmmmm", selectedRooms)
//     console.log("activityDetailssssssssssssssssss", activityDetails)


//     const navigate = useNavigate()

//     const handleUserinfo = () => {
//         navigate('/userinfo', {
//             state: {
//                 selectedDuration,
//                 counts,
//                 countsbed,
//                 // roomPrices,
//                 // roomtype,
//                 selectedRooms,
//                 updatedTotalPrice,
//                 totalCount,
//                 levels,
//                 startDate,
//                 endDate,
//                 actcounts,
//                 activityDetails,
//                 lineItems, 
//                 carRentalPrice,
//             }
//         })
//     }
//     return (
//         <>
//             <div className="container-fluid level_container">
//                 <div className="row">
//                     <div className="col text-center">
//                         <div className='person_week mt-5'>
//                             <span> {new Date(startDate).toLocaleDateString()}</span>
//                             -
//                             <span> {new Date(endDate).toLocaleDateString()}</span>
//                             <span> | Total Price: € {updatedTotalPrice}</span>

//                         </div>
//                     </div>
//                 </div>

//                 {/* <div className="container"> */}
//                     <div className="row">
//                         <div className="col-lg-2"></div>
//                         <div className="col-lg-8">
//                             <div className="datepick_border"></div>
//                             <div>
//                                  <div className='text-center checkout_data'>
//                                  <p>Selected Duration : {selectedDuration}</p>
//                                  <p>Total Person :  {totalCount}</p>
//                                  </div>

//                                     <div>
//                                         <h2 className='checkout_heading'>Room Details</h2>
//                                         {selectedRooms.map((room, index) => (
//                                         <div className='row' key={index}>
//                                             <div className="col-lg-9">
//                                                 <div className='checkout_data'>
//                                                     {room.room} : {room.count}
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-3">
//                                                 <div className='checkout_data'>
//                                                     {/* Price: */}
//                                                     {/* | Total Price: */}
//                                                     € {room.price}
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     ))}
//                                     </div>
//                                 {/* <div>
//                                     {roomtype.map((room, index) => (
//                                         countsbed[index] > 0 && (
//                                             <div className='row' key={index}>
//                                                 <div className="col-lg-9">
//                                                     <div className='checkout_data'>
//                                                         {room.room} : {countsbed[index]}
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-lg-3"> */}
//                                                     {/* | Room Price:  */}
//                                                     {/* <div className='checkout_data'>
//                                                         € {roomPrices[index]}
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         )
//                                     ))}
//                                 </div> */}

//                                 <div>
//                                     <h2 className='checkout_heading'>Selected Levels</h2>
//                                     <div className="checkout_data">
//                                     Total Kitset rent price : {carRentalPrice}
//                                     </div>
//                                     {levels.map((item, index) => (
//                                         counts[index] > 0 && (

//                                             <div className='row' key={index}>

//                                                 <div className="col-lg-9">
//                                                     <div className='checkout_data'>
//                                                         {item.level} : {counts[index]}
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-lg-3">
//                                                     {/* | Room Price:  */}
//                                                     <div className='checkout_data'>
//                                                         {/* Price: */}
//                                                         € {counts[index] * item.price}
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         )
//                                     ))}
//                                 </div>

//                                 <div>

//                                     <h2 className='checkout_heading'>Selected Activities</h2>
//                                     {activityDetails.map((activity, index) => (
//                                         <div className='row' key={index}>
//                                             <div className="col-lg-9">
//                                                 <div className='checkout_data'>
//                                                     {activity.name} : {activity.count}
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-3">
//                                                 <div className='checkout_data'>
//                                                     {/* Price: */}
//                                                     {/* | Total Price: */}
//                                                     € {activity.price}
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className='text-center mt-4'>
//                                     <h3 className='checkout_heading'>Updated Total Price: € {updatedTotalPrice}</h3>
//                                 </div>



//                                 {/* Additional checkout actions can be added here, like payment buttons */}


//                                 <div className='btn_container'>
//                                     <button className="level_btn mb-4" onClick={handleUserinfo}>
//                                         Confirm and Pay
//                                     </button>
//                                 </div>
                                

//                             </div>
//                         </div>
//                         <div className="col-lg-2"></div>
//                     </div>
//                 {/* </div> */}
//             </div>
//         </>
//     );
// };

// export default Checkout;




import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Check if state exists; provide defaults to avoid errors
    if (!location.state) {
        return <div>Error: Missing checkout data</div>;
    }

    // Destructure and provide fallback values to ensure safety
    const {
        selectedDuration = "N/A",
        counts = [],
        countsbed = [],
        selectedRooms = [],
        updatedTotalPrice = 0,
        totalCount = 0,
        levels = [],
        startDate = null,
        endDate = null,
        actcounts = [],
        activityDetails = [],
        carRentalPrice = 0,
        lineItems = [],
    } = location.state;


    const handleUserinfo = () => {
        navigate('/userinfo', {
            state: {
                selectedDuration,
                counts,
                countsbed,
                selectedRooms,
                updatedTotalPrice,
                totalCount,
                levels,
                startDate,
                endDate,
                actcounts,
                activityDetails,
                carRentalPrice,
                lineItems,
            }
        });
    };

    return (
        <div className="container-fluid level_container">
            <div className="row">
                <div className="col text-center">
                    <div className='person_week mt-5'>
                        <span>{startDate ? new Date(startDate).toLocaleDateString() : "Start Date"}</span>
                        -
                        <span>{endDate ? new Date(endDate).toLocaleDateString() : "End Date"}</span>
                        <span> | Total Price: € {updatedTotalPrice}</span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="datepick_border"></div>
                    <div>
                        {/* Selected Duration and Total Person */}
                        <div className='text-center checkout_data'>
                            <p>Selected Duration: {selectedDuration}</p>
                            <p>Total Persons: {totalCount}</p>
                        </div>

                        {/* Room Details */}
                        <div>
                            <h2 className='checkout_heading'>Room Details</h2>
                            {selectedRooms.map((room, index) => (
                                <div className='row' key={index}>
                                    <div className="col-lg-9">
                                        <div className='checkout_data'>
                                            {room.room}: {room.count}
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className='checkout_data'>
                                            € {room.price}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Selected Levels */}
                        <div>
                            <h2 className='checkout_heading'>Selected Levels</h2>
                            <div className="checkout_data">
                                Total Kitset Rental Price: € {carRentalPrice}
                            </div>
                            {levels.map((item, index) => (
                                counts[index] > 0 && (
                                    <div className='row' key={index}>
                                        <div className="col-lg-9">
                                            <div className='checkout_data'>
                                                {item.level}: {counts[index]}
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='checkout_data'>
                                                € {counts[index] * item.price}
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Selected Activities */}
                        <div>
                            <h2 className='checkout_heading'>Selected Activities</h2>
                            {activityDetails.map((activity, index) => (
                                <div className='row' key={index}>
                                    <div className="col-lg-9">
                                        <div className='checkout_data'>
                                            {activity.name}: {activity.count}
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className='checkout_data'>
                                            € {activity.price}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Updated Total Price */}
                        <div className='text-center mt-4'>
                            <h3 className='checkout_heading'>Updated Total Price: € {updatedTotalPrice}</h3>
                        </div>

                        {/* Confirm and Pay Button */}
                        <div className='btn_container'>
                            <button className="level_btn mb-4" onClick={handleUserinfo}>
                                Confirm and Pay
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    );
};

export default Checkout;
