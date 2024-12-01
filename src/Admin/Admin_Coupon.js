import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Admin_Coupon = () => {
    const [couponData, setCouponData] = useState([]);

    useEffect(() => {
        const fetchCouponData = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:5500/api/admin/getall_coupon"
                );
                const fetchedData = response.data.getallCoupon || [];
                setCouponData(fetchedData);
            } catch (error) {
                console.error("Error fetching trip levels:", error);
            }
        };

        fetchCouponData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this coupon?")) {
            try {
                const response = await axios.delete(
                    `http://localhost:5500/api/admin/delete_coupon/${id}`
                );
                if (response.status === 200) {
                    alert(response.data.message);
                    // Update the state to remove the deleted trip
                    setCouponData((prevData) => prevData.filter((coupon) => coupon._id !== id));
                }
            } catch (error) {
                console.error("Error deleting coupon:", error);
                alert("Failed to delete the coupon. Please try again.");
            }
        }
    };

    return (
        <div className='container-fluid'>
            <div className="row m-2">
                <div className="col-6">
                    <h1>All Trip Levels Days</h1>
                </div>
                <div className="col-6">
                    <Link to="/admin/add/coupon" className="btn btn-success float-end">
                        Add New Trip Date
                    </Link>
                </div>
            </div>
            <div className="row p-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Discount Name</th>
                            <th>Discount Rate</th>
                            <th>Cupon code</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {couponData.length > 0 ? (
                            couponData.map((coupon) => (
                                <tr key={coupon._id}>
                                    <td>{coupon.discountName}</td>
                                    <td>{coupon.discountRate}</td>
                                    <td>{coupon.discountCode}</td>
                                    <td>
                                        <Link className='btn btn-primary' to={`/admin/edit/coupon/${coupon._id}`}>Edit</Link>&nbsp;
                                        <Link className='btn btn-danger' onClick={() => handleDelete(coupon._id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin_Coupon