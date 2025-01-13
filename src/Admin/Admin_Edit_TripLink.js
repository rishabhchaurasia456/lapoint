import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../config/config';

const Admin_Edit_TripLink = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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
    const [existingImage, setExistingImage] = useState(''); // To hold the existing image URL

    useEffect(() => {
        const fetchTripLink = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_one_tripLink/${id}`);
                const data = response.data;
                setFormData({
                    tripName: data.tripName,
                    path: data.path,
                    anytime: Array.isArray(data.anytime) ? data.anytime.join(',') : '', // Ensure it's a string
                    choosestyle: Array.isArray(data.choosestyle) ? data.choosestyle.join(',') : '', // Ensure it's a string
                    lat: data.lat,
                    lng: data.lng,
                });
                setExistingImage(data.img); // Set the existing image URL
            } catch (error) {
                setMessage(error.response?.data?.error || 'Failed to fetch trip link.');
            }
        };

        fetchTripLink();
    }, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = new FormData();
        if (file) data.append('img', file); // The key 'img' matches the backend logic
        data.append('tripName', formData.tripName);
        data.append('path', formData.path);
        data.append('anytime', JSON.stringify(formData.anytime.split(',').map(item => item.trim())));
        data.append('choosestyle', JSON.stringify(formData.choosestyle.split(',').map(item => item.trim())));
        data.append('lat', formData.lat);
        data.append('lng', formData.lng);
    
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/update_tripLink/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data.message);
            navigate('/admin/triplink'); 
            setMessage('Trip link updated successfully!');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Something went wrong.');
        }
    };
    

    return (
        <div className='container'>
            <h2>Edit Trip Link</h2>
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
                    <label className='form-label'>Existing Image</label>
                    {existingImage && (
                        <div>
                            <img
                                src={`${config.API_BASE_URL}/${existingImage.replace(/\\/g, '/')}`}
                                alt="Existing Trip"
                                style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                            />
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className='form-label'>Update Image for the card slider</label>
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
                <button type="submit" className="btn btn-primary">Update</button>
                {message && <p className="mt-3">{message}</p>}
            </form>
        </div>
    );
};

export default Admin_Edit_TripLink;
