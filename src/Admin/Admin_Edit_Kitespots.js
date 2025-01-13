import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import axios from 'axios';
import config from '../config/config';

const Admin_Edit_Kitespots = () => {
    const { id } = useParams(); // Get the kitespot ID from the URL
    const navigate = useNavigate(); // For navigation after successful edit

    const [tripName, setTripName] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the existing kitespot details
    useEffect(() => {
        const fetchKitespot = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_single_Kitespot/${id}`);
                const { tripName, data } = response.data;
                setTripName(tripName);
                setData(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching kitespot:', err);
                setError('Failed to load kitespot details.');
                setLoading(false);
            }
        };

        fetchKitespot();
    }, [id]);

    // Handle form submission (updating data)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('tripName', tripName);

        // Add data as JSON string
        formData.append('data', JSON.stringify(data.map((item, index) => ({
            ...item,
            img: item.img instanceof File ? '' : item.img, // Retain existing img path if not a File
        }))));

        // Append image files
        data.forEach((item, index) => {
            if (item.img instanceof File) {
                formData.append('imageFiles', item.img);
            }
        });

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/update_Kitespot/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Kitespot updated successfully!');
            navigate('/admin/kitespot');
        } catch (err) {
            console.error('Error updating kitespot:', err);
            alert('Failed to update kitespot.');
        }
    };

    // Handle change in data fields (text, heading, para, etc.)
    const handleDataChange = (index, field, value) => {
        const updatedData = [...data];
        updatedData[index][field] = value;
        setData(updatedData);
    };

    // Handle image file selection
    const handleImageChange = (index, field, file) => {
        const updatedData = [...data];
        updatedData[index][field] = file; // Assign the file to the respective field
        setData(updatedData);
    };

    // Add new data entry
    const handleAddData = () => {
        setData([...data, { img: '', text: '', heading: '', para: '', img_position: '' }]);
    };

    // Remove a data entry
    const handleRemoveData = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='container'>
            <h2>Edit Kitespot</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Trip Name</label>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            value={tripName}
                            onChange={(e) => setTripName(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <h3>Data:</h3>
                    {data.map((item, index) => (
                        <div key={index}>
                            <div>
                                {/* Display the image preview or existing image */}
                                {item.img && item.img instanceof File ? (
                                    <img
                                        src={URL.createObjectURL(item.img)} // Use the local object URL for the image preview
                                        alt={`Image ${index + 1}`}
                                        style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                                    />
                                ) : (
                                    item.img && (
                                        <img
                                            src={`${config.API_BASE_URL}/${item.img.replace(/\\/g, '/')}`}
                                            alt={`Image ${index + 1}`}
                                            style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                                        />
                                    )
                                )}
                            </div>

                            {/* Image upload */}
                            <div className="mb-3">
                                <div>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(e) => handleImageChange(index, 'img', e.target.files[0])}
                                    />
                                </div>
                            </div>
                            {/* Other fields */}
                            <div className="mb-3">
                                <label className="form-label">Text</label>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Text"
                                        className='form-control'
                                        value={item.text}
                                        onChange={(e) => handleDataChange(index, 'text', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Text</label>
                                <div>

                                    <input
                                        type="text"
                                        placeholder="Heading"
                                        className='form-control'
                                        value={item.heading}
                                        onChange={(e) => handleDataChange(index, 'heading', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Text</label>
                                <div>

                                    <input
                                        type="text"
                                        placeholder="Paragraph"
                                        className='form-control'
                                        value={item.para}
                                        onChange={(e) => handleDataChange(index, 'para', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Text</label>
                                <div>

                                </div>
                                <input
                                    type="text"
                                    placeholder="Image Position"
                                    className='form-control'
                                    value={item.img_position}
                                    onChange={(e) => handleDataChange(index, 'img_position', e.target.value)}
                                />
                            </div>
                            <button type="button" className='btn btn-danger' onClick={() => handleRemoveData(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" className='btn btn-success' onClick={handleAddData}>
                        Add New Data
                    </button>
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default Admin_Edit_Kitespots;
