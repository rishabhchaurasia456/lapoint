import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config/config';

const AffiliateRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        country: 'India',
        company: '',
        website: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/affiliate_user_create`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                alert('Register successfully!');
                // Clear the form after submission
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    phone: '',
                    address: '',
                    city: '',
                    zip: '',
                    country: 'India',
                    company: '',
                    website: ''
                });
                navigate('/affiliate');

            } else {
                alert('Failed to save data');
            }
        } catch (error) {
            console.error('Error:', error);
            alert(error.response.data.message);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mt-4">
                        <h1 className="text-center"><b>New Affiliate Information</b></h1>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} id="myForm">
                                    <div className="mb-3">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name" id="first_name" value={formData.first_name} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" id="last_name" value={formData.last_name} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">E-Mail Address</label>
                                        <input type="email" className="form-control" placeholder="E-Mail Address" id="email" value={formData.email} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" placeholder="Password" id="password" value={formData.password} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Phone Number" id="phone" value={formData.phone} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Address Line</label>
                                        <input type="text" className="form-control" placeholder="Address line" id="address" value={formData.address} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">City</label>
                                        <input type="text" className="form-control" placeholder="City" id="city" value={formData.city} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Zip Code</label>
                                        <input type="text" className="form-control" placeholder="Zip Code" id="zip" value={formData.zip} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Country</label>
                                        <select className="form-control" id="country" value={formData.country} onChange={handleInputChange} required>
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>China</option>
                                            <option>UK</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Company Name</label>
                                        <input type="text" className="form-control" placeholder="Company Name" id="company" value={formData.company} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Website URL</label>
                                        <input type="text" className="form-control" placeholder="Website URL" id="website" value={formData.website} onChange={handleInputChange} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default AffiliateRegister;
