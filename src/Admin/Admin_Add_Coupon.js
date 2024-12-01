import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin_Add_Coupon = () => {
    const navigate = useNavigate()
    const [discountName, setDiscountName] = useState("");
    const [discountRate, setDiscountRate] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [message, setMessage] = useState("");

    // Function to generate the coupon code based on discount name
    const generateCouponCode = (name) => {
        const formattedName = name.replace(/\s+/g, '').toUpperCase();
        const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        return `${formattedName}-${randomCode}`;
    };

    // Update the coupon code whenever the discount name changes
    useEffect(() => {
        if (discountName) {
            setCouponCode(generateCouponCode(discountName));
        }
    }, [discountName]);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            discountName,
            discountRate,
            couponCode,
        };

        try {
            const response = await axios.post('http://localhost:5500/api/admin/create_coupon', data);

            if (response.status === 201) {
                setMessage(response.data.message);
                setDiscountName("");
                setDiscountRate("");
                setCouponCode("");
                navigate('/admin/coupon');
            } else {
                setMessage(response.data.message || 'Failed to save coupon');
            }
        } catch (err) {
            setMessage(err.response?.data?.message || 'Error saving coupon');
            console.error(err);
        }
    };

    return (
        <div className='container-fluid'>
            <div className="row">
                <h1>Add New Coupons</h1>
            </div>
            <div className="row p-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='form-label'>Discount Name</label>
                            <input
                                type='text'
                                className='form-control'
                                value={discountName}
                                onChange={(e) => setDiscountName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className='form-label'>Discount Rate</label>
                            <input
                                type='text'
                                className='form-control'
                                value={discountRate}
                                onChange={(e) => setDiscountRate(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className='form-label'>Coupon Code</label>
                            <input
                                type='text'
                                className='form-control'
                                value={couponCode}
                                readOnly
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">
                            Save Coupon
                        </button>
                    </form>
                    {message && <p className="mt-3">{message}</p>}
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Admin_Add_Coupon;
