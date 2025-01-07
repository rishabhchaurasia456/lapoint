import React, { useState } from 'react';
import axios from 'axios';
import config from '../config/config';
import { useNavigate } from 'react-router-dom';

const Admin_Add_TripLink = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        tripName: '',
        path: '',
        anytime: '',
        choosestyle: '',
        lat: '',
        lng: '',
    });
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file selection
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure all fields are filled
        if (!file || !formData.tripName || !formData.path || !formData.anytime || !formData.choosestyle || !formData.lat || !formData.lng) {
            setMessage('All fields are required.');
            return;
        }

        // Prepare FormData object
        const data = new FormData();
        data.append('img', file);
        data.append('tripName', formData.tripName);
        data.append('path', formData.path);
        data.append('anytime', JSON.stringify(formData.anytime.split(','))); // Convert comma-separated values to an array
        data.append('choosestyle', JSON.stringify(formData.choosestyle.split(',')));
        data.append('lat', formData.lat);
        data.append('lng', formData.lng);

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_tripLink`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 201) {
                alert('Trip link created successfully!');
                navigate('/admin/triplink')
            }
            setMessage('Trip link created successfully!');
            console.log(response.data);
        } catch (error) {
            setMessage(error.response?.data?.error || 'Something went wrong.');
        }
    };

    return (
        <div className='container'>
            <h2>Create New Trip Link</h2>
            <form onSubmit={handleSubmit} className="row mt-4">
                <div className="mb-3">
                    <label className='form-label'>Trip Name</label>
                    <input
                        type='text'
                        name='tripName'
                        placeholder='Trip Name'
                        className='form-control'
                        value={formData.tripName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>Image for the card slider</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>Trip URL link</label>
                    <input
                        type='text'
                        name='path'
                        placeholder="Ex : /trip/tripname"
                        className='form-control'
                        value={formData.path}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>AnyTime</label>
                    <input
                        type='text'
                        name='anytime'
                        placeholder="AnyTime (e.g., Summer,Winter)"
                        className='form-control'
                        value={formData.anytime}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>Choose Style</label>
                    <input
                        type='text'
                        name='choosestyle'
                        placeholder="Choose Style (e.g., Style1,Style2)"
                        className='form-control'
                        value={formData.choosestyle}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>lat</label>
                    <input
                        type='text'
                        name='lat'
                        placeholder="lat"
                        className='form-control'
                        value={formData.lat}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>lng</label>
                    <input
                        type='text'
                        name='lng'
                        placeholder="lng"
                        className='form-control'
                        value={formData.lng}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                {message && <p className="mt-3">{message}</p>}
            </form>
        </div>
    );
};

export default Admin_Add_TripLink;
