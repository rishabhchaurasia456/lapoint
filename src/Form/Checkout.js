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
        navigate('/userinfo', {
            state: {
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
        <div className="container-fluid level_container">
            <div className="row">
                <div className="col text-center">
                    <div className='person_week mt-5'>
                        <span>{startDate ? new Date(startDate).toLocaleDateString() : "Start Date"}</span>
                        -
                        <span>{endDate ? new Date(endDate).toLocaleDateString() : "End Date"}</span>
                        <span> | Total Price: € {discountedPrice}</span> {/* Use discounted price here */}
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
                            <h2 className='level_heading'>Room Details</h2>
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
                            <h2 className='level_heading'>Selected Levels</h2>
                            <div className="checkout_data">
                                Total Kitset Rental Price: € {carRentalPrice}
                            </div>
                            {levels.map((item, index) => (
                                counts[index] > 0 && (
                                    <div className='row' key={index}>
                                        <div className="col-lg-9">
                                            <div className='checkout_data'>
                                                {item.item_name}: {counts[index]}
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='checkout_data'>
                                                € {counts[index] * item.rate}
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Selected Activities */}
                        <div>
                            <h2 className='level_heading'>Selected Activities</h2>
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
                            <h3 className='level_heading fs-3'>Updated Total Price: € {discountedPrice}</h3> {/* Use discounted price */}
                        </div>

                        <div className='text-center mt-4'>
                            <div className="row">
                                <div className="col col_input">
                                    <input placeholder='Coupon code' type="text" name="text" class="input" value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}>

                                    </input>
                                </div>
                                <div className="col">
                                    <button className='coupon_btn' onClick={handleApplyCoupon}>Apply Coupon
                                    </button>
                                </div>
                            </div>
                            {error && <p className="text-danger mt-2">{error}</p>}
                        </div>

                        {/* Confirm and Pay Button */}
                        <div className='btn_container'>
                            <button className="level_btn mb-4" onClick={handleUserinfo}>
                                Confirm and Pay
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
