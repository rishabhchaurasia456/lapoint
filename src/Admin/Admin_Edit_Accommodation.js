import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import axios from 'axios';
import config from '../config/config';

const Admin_Edit_Accommodation = () => {
    const { id } = useParams(); // Get the accommodation ID from the URL
    const navigate = useNavigate(); // For navigation after successful edit

    const [tripName, setTripName] = useState('');
    const [mainTitle, setMainTitle] = useState('');
    const [mainDesc, setMainDesc] = useState('');
    const [locationTitle, setLocationTitle] = useState('');
    const [locationSubtitle, setLocationSubtitle] = useState('');
    const [locationDesc, setLocationDesc] = useState('');
    const [iframe, setIframe] = useState('');
    const [cardData, setCardData] = useState([]); // Updated to match the new schema
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the existing accommodation details
    useEffect(() => {
        const fetchAccommodation = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_single_accommodation/${id}`);
                const {
                    tripName,
                    mainTitle,
                    mainDesc,
                    locationTitle,
                    locationSubtitle,
                    locationDesc,
                    iframe,
                    cardData,
                } = response.data;

                setTripName(tripName);
                setMainTitle(mainTitle);
                setMainDesc(mainDesc);
                setLocationTitle(locationTitle);
                setLocationSubtitle(locationSubtitle);
                setLocationDesc(locationDesc);
                setIframe(iframe);
                setCardData(cardData);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching accommodation:', err);
                setError('Failed to load accommodation details.');
                setLoading(false);
            }
        };

        fetchAccommodation();
    }, [id]);

    // Handle form submission (updating data)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('tripName', tripName);
        formData.append('mainTitle', mainTitle);
        formData.append('mainDesc', mainDesc);
        formData.append('locationTitle', locationTitle);
        formData.append('locationSubtitle', locationSubtitle);
        formData.append('locationDesc', locationDesc);
        formData.append('iframe', iframe);

        // Add cardData as JSON string
        formData.append(
            'cardData',
            JSON.stringify(cardData.map((item, index) => ({
                ...item,
                img: item.img instanceof File ? '' : item.img, // Retain existing img path if not a File
            })))
        );

        // Append image files
        cardData.forEach((item, index) => {
            if (item.img instanceof File) {
                formData.append(`imageFiles`, item.img);
            }
        });

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/update_accommodation/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Accommodation updated successfully!');
            navigate('/admin/accommodation');
        } catch (err) {
            console.error('Error updating accommodation:', err);
            alert('Failed to update accommodation.');
        }
    };

    // Handle change in cardData fields
    const handleCardDataChange = (index, field, value) => {
        const updatedCardData = [...cardData];
        updatedCardData[index][field] = value;
        setCardData(updatedCardData);
    };

    // Handle image file selection
    const handleImageChange = (index, file) => {
        const updatedCardData = [...cardData];
        updatedCardData[index].img = file; // Assign the file to the img field
        setCardData(updatedCardData);
    };

    // Add new cardData entry
    const handleAddCard = () => {
        setCardData([...cardData, { img: '', title: '', desc: '' }]);
    };

    // Remove a cardData entry
    const handleRemoveCard = (index) => {
        const updatedCardData = cardData.filter((_, i) => i !== index);
        setCardData(updatedCardData);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <h2>Edit Accommodation</h2>
            <form onSubmit={handleSubmit}>
                {/* Main Details */}
                <div className="mb-3">
                    <label className="form-label">Trip Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={tripName}
                        onChange={(e) => setTripName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Main Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={mainTitle}
                        onChange={(e) => setMainTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Main Description</label>
                    <textarea
                        className="form-control"
                        value={mainDesc}
                        onChange={(e) => setMainDesc(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={locationTitle}
                        onChange={(e) => setLocationTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location Subtitle</label>
                    <input
                        type="text"
                        className="form-control"
                        value={locationSubtitle}
                        onChange={(e) => setLocationSubtitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location Description</label>
                    <textarea
                        className="form-control"
                        value={locationDesc}
                        onChange={(e) => setLocationDesc(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Iframe</label>
                    <input
                        type="text"
                        className="form-control"
                        value={iframe}
                        onChange={(e) => setIframe(e.target.value)}
                    />
                </div>

                {/* Card Data */}
                <h3>Card Data:</h3>
                {cardData.map((card, index) => (
                    <div key={index} className="mb-3">
                        {/* Image preview or upload */}
                        <div>
                            {card.img && !(card.img instanceof File) ? (
                                <img
                                    src={`${config.API_BASE_URL}/${card.img.replace(/\\/g, '/')}`}
                                    alt={`Card Image ${index + 1}`}
                                    style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                                />
                            ) : card.img && (
                                <img
                                    src={URL.createObjectURL(card.img)}
                                    alt={`Card Image ${index + 1}`}
                                    style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                                />
                            )}
                        </div>
                        <input
                            type="file"
                            className="form-control"
                            onChange={(e) => handleImageChange(index, e.target.files[0])}
                        />
                        <div className="mt-2">
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={card.title}
                                onChange={(e) => handleCardDataChange(index, 'title', e.target.value)}
                            />
                        </div>
                        <div className="mt-2">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                value={card.desc}
                                onChange={(e) => handleCardDataChange(index, 'desc', e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-danger mt-2"
                            onClick={() => handleRemoveCard(index)}
                        >
                            Remove Card
                        </button>
                    </div>
                ))}
                <button type="button" className="btn btn-success" onClick={handleAddCard}>
                    Add Card
                </button>

                <button type="submit" className="btn btn-primary mt-3">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Admin_Edit_Accommodation;
