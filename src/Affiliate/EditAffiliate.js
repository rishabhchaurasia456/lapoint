import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../config/config';

const EditAffiliateUser = () => {
    const navigate = useNavigate();
    const [affiliate, setAffiliate] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        company: '',
        website: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [successMessage, setSuccessMessage] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    const { id } = useParams();  // Get the affiliate ID from the URL
    //   const history = useHistory(); // To navigate after successful update

    useEffect(() => {
        // Fetch the affiliate details by ID when component mounts
        const fetchAffiliateData = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/affiliate_get_user/${id}`);
                // console.log("response", response)
                setAffiliate(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch affiliate details');
                setLoading(false);
            }
        };

        fetchAffiliateData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAffiliate({
            ...affiliate,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/affiliate_edit/${id}`, affiliate);
            if (response.status === 200) {
                alert('Affiliate details updated successfully!');
                navigate('/my_affiliate');
            }
            else {
                alert('Failed to update data');
            }
            // setSuccessMessage('Affiliate details updated successfully!');
            // setErrorMessage('');
        } catch (error) {
            alert('An error occurred while updating affiliate details.');
            // setSuccessMessage('');
        }
    };

    // Only render the form after the data has been loaded
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {/* {errorMessage && <div className="error">{errorMessage}</div>} */}
            {/* {successMessage && <div className="success">{successMessage}</div>} */}
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mt-4">
                        <h1 className="text-center"><b>Edit Affiliate Information</b></h1>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            className="form-control"
                                            value={affiliate.first_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            className="form-control"
                                            value={affiliate.last_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control"
                                            value={affiliate.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={affiliate.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            value={affiliate.address}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            className="form-control"
                                            value={affiliate.city}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Zip Code</label>
                                        <input
                                            type="text"
                                            name="zip"
                                            className="form-control"
                                            value={affiliate.zip}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Country</label>
                                        <input
                                            type="text"
                                            name="country"
                                            className="form-control"
                                            value={affiliate.country}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            className="form-control"
                                            value={affiliate.company}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Website</label>
                                        <input
                                            type="text"
                                            name="website"
                                            className="form-control"
                                            value={affiliate.website}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" className='btn btn-success mt-3'>Update Affiliate</button>
                                    </div>
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

export default EditAffiliateUser;
