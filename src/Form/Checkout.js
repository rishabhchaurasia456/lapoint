import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import config from '../config/config';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [couponCode, setCouponCode] = useState("");
    const [discountedPrice, setDiscountedPrice] = useState(0); // Default 0, updated later
    const [discountAmount, setDiscountAmount] = useState(0); // Track discount amount
    const [error, setError] = useState("");
    const [coupons, setCoupons] = useState([]);

    // Destructure and provide fallback values to ensure safety
    const {
        tripName,
        selectedDuration = "",
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
    } = location.state || {}; // Safely destructure with defaults if state is null/undefined

    // Always call useEffect unconditionally
    useEffect(() => {
        setDiscountedPrice(updatedTotalPrice); // Set initial price
    }, [updatedTotalPrice]);

    useEffect(() => {
        const fetchCouponData = async () => {
            try {
                const response = await axios.post(
                    `${config.API_BASE_URL}/api/admin/getall_coupon`
                );
                const fetchedData = response.data.getallCoupon || [];
                setCoupons(fetchedData);
            } catch (error) {
                console.error("Error fetching trip levels:", error);
            }
        };

        fetchCouponData();
    }, []);

    const handleApplyCoupon = () => {
        const coupon = coupons.find(c => c.discountCode === couponCode);

        if (coupon) {
            const discountAmountValue = (updatedTotalPrice * coupon.discountRate) / 100;
            const newTotalPrice = updatedTotalPrice - discountAmountValue;
            setDiscountedPrice(newTotalPrice);
            setDiscountAmount(discountAmountValue); // Set the discount amount
            setError(""); // Clear error message if coupon is valid
        } else {
            setError("Invalid coupon code");
            setDiscountedPrice(updatedTotalPrice); // Reset price if invalid
        }
    };

    const handleUserinfo = () => {
        navigate(`/${tripName}/checkout/userinfo`, {
            state: {
                tripName,
                selectedDuration,
                counts,
                countsbed,
                selectedRooms,
                updatedTotalPrice: discountedPrice, // Use discounted price
                totalCount,
                levels,
                startDate,
                endDate,
                actcounts,
                activityDetails,
                carRentalPrice,
                lineItems,
                discountAmount
            }
        });
    };

    // **Ensure location.state exists before rendering the UI**
    if (!location.state) {
        return <div>Error: Missing checkout data</div>;
    }






    return (
        <div className="container-fluid level_container ">
            <div className="row">
                <div className="col text-center">
                    <div className='person_week mt-5'>
                        <span className='me-3'>{startDate ? new Date(startDate).toLocaleDateString() : "Start Date"}</span>
                        to
                        <span className='mx-3'>{endDate ? new Date(endDate).toLocaleDateString() : "End Date"}</span>
                        {/* <span className=' level_heading'> | Total Price: € {discountedPrice}</span>  */}
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
                            <p className='fw-bold fs-5'>Selected Duration : {selectedDuration}</p>
                            <p>Total Persons : {totalCount}</p>
                        </div>

                        {/* Room Details */}
                        <div>
                            <h2 className='level_heading'>Room Details</h2>
                            {selectedRooms.map((room, index) => (
                                <div className='row' key={index}>
                                    <div className="col-lg-9 col">
                                        <div className='checkout_data'>
                                            {room.room}: {room.count}
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col d-flex align-items-center justify-content-center">
                                        <div className='checkout_data'>
                                            € {room.price}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Selected Levels */}
                        <div>
                            <h2 className='level_heading'>Selected Levels</h2>
                            {carRentalPrice > 0 && (
                                <div className="checkout_data">
                                    <div className="row">
                                        <div className="col-lg-9 col">
                                            Total Kiteset Rental:
                                        </div>
                                        <div className="col-lg-3 col d-flex align-items-center justify-content-center">
                                            € {carRentalPrice}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {levels.map((item, index) => (
                                counts[index] > 0 && (
                                    <div className='row' key={index}>
                                        <div className="col-lg-9 col">
                                            <div className='checkout_data'>
                                                {item.item_name}: {counts[index]}

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col d-flex align-items-center justify-content-center">
                                            <div className='checkout_data'>
                                                € {counts[index] * item.rate}
                                            </div>
                                        </div>
                                        <div classname="row">
                                            <div className="col mt-1" key={index}>
                                                <details className="styled-dropdown">
                                                    <summary className="summary-header text-dark">What's the Deal</summary>
                                                    <div className="dropdown-content fs-5 mb-2">
                                                        {item.description.split("\n").map((line, lineIndex) => (
                                                            <p key={lineIndex} className="fs-6 text-dark">
                                                                <i className="fa fa-check-circle text-warning mx-2"></i>{line}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </details>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Selected Activities */}
                        {activityDetails.length > 0 ? (
                            <div>
                                <h2 className='level_heading'>Selected Add Ons</h2>
                                {activityDetails.map((activity, index) => (
                                    <div className='row' key={index}>
                                        <div className="col-lg-9 col">
                                            <div className='checkout_data'>
                                                {activity.name}: {activity.count}
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col d-flex align-items-center justify-content-center">
                                            <div className='checkout_data'>
                                                € {activity.price}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : ("")}

                        <div className='text-center mt-4'>
                            <div className="row">
                                <div className="col col_input">
                                    <input placeholder='Coupon code' type="text" name="text" class="input" value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}>
                                    </input>
                                </div>
                                <div className="col mx-0 px-0">
                                    <button className='coupon_btn' onClick={handleApplyCoupon}>Apply Coupon
                                    </button>
                                </div>
                            </div>
                            {error && <p className="text-danger mt-2">{error}</p>}
                        </div>

                        {/* Updated Total Price */}
                        <div className='text-center mt-5'>
                            <h3 className='level_heading fs-3'>Updated Total Price: € {discountedPrice}</h3> {/* Use discounted price */}
                        </div>

                        {/* Confirm and Pay Button */}
                        <div className='btn_container'>
                            <button className="level_btn fixed-bottom" onClick={handleUserinfo}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 mb-5 pb-5"></div>
            </div>
        </div>
    );
};

export default Checkout;
