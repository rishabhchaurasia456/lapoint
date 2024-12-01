import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Admin_Edit_Coupon = () => {
    const { id } = useParams(); // Get coupon ID from URL
    const navigate = useNavigate(); // Use useNavigate for navigation

    // States to hold form data
    const [discountName, setDiscountName] = useState('');
    const [discountRate, setDiscountRate] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch coupon details on component mount
    useEffect(() => {
        const fetchCouponDetails = async () => {
            try {
                const response = await axios.post(`http://localhost:5500/api/admin/get_coupon/${id}`);
                const coupon = response.data.coupon;
                setDiscountName(coupon.discountName);
                setDiscountRate(coupon.discountRate);
                setDiscountCode(coupon.discountCode);
                setLoading(false);
            } catch (err) {
                setError('Error fetching coupon details');
                setLoading(false);
            }
        };

        fetchCouponDetails();
    }, [id]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedCoupon = {
            discountName,
            discountRate,
            discountCode,
        };

        try {
            const response = await axios.put(`http://localhost:5500/api/admin/edit_coupon/${id}`, updatedCoupon);
            if (response.status === 200) {
                alert('Coupon updated successfully!');
                navigate('/admin/coupon'); // Redirect to the coupon list page or desired path
            }
        } catch (error) {
            console.error('Error updating coupon:', error);
            setError('Failed to update coupon. Please try again.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Edit Coupon</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="discountName" className="form-label">Discount Name</label>
                    <input
                        type="text"
                        id="discountName"
                        className="form-control"
                        value={discountName}
                        onChange={(e) => setDiscountName(e.target.value)}
                        disabled
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="discountRate" className="form-label">Discount Rate (%)</label>
                    <input
                        type="number"
                        id="discountRate"
                        className="form-control"
                        value={discountRate}
                        onChange={(e) => setDiscountRate(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="discountCode" className="form-label">Discount Code</label>
                    <input
                        type="text"
                        id="discountCode"
                        className="form-control"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Update Coupon</button>
            </form>
        </div>
    );
};

export default Admin_Edit_Coupon;
