import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const User_EditCreative = () => {
    const { id } = useParams(); // Get the ID from the URL params
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [landingPageLink, setLandingPageLink] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');

    useEffect(() => {
        fetchAffiliateData();
    }, []);

    const fetchAffiliateData = async () => {
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/get_single_link/${id}`);
            if (response.data) {
                setName(response.data.name);
                setSelectedOption(response.data.type);
                setLandingPageLink(response.data.Landing_page_link);
                setImageLink(response.data.Image_link || '');
                setGeneratedLink(response.data.genrated_link);
            }
        } catch (error) {
            console.error('Error fetching affiliate data:', error);
            alert('Failed to fetch affiliate data.');
        }
    };

    const handleUpdate = async () => {
        if (!name || !landingPageLink) {
            alert('Name and Landing Page Link are required.');
            return;
        }

        let newLink = '';
        if (selectedOption === 'image' && imageLink) {
            newLink = `<a href="${landingPageLink}"><img src="${imageLink}" alt="Affiliate Image"></a>`;
        } else if (selectedOption === 'text_link') {
            newLink = `${landingPageLink}`;
        } else {
            alert('Please provide all required fields!');
            return;
        }

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/update_affiliate_link/${id}`, {
                name,
                type: selectedOption,
                Landing_page_link: landingPageLink,
                Image_link: imageLink || null,
                genrated_link: newLink
            });

            if (response.status === 200) {
                alert('Affiliate link updated successfully!');
                navigate('/affiliate/creative');
            } else {
                alert('Failed to update the affiliate link.');
            }
        } catch (error) {
            console.error('Error updating affiliate link:', error);
            alert('An error occurred while updating the link.');
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2 className="mt-5">Edit Affiliate Creative</h2>
                    <div className="row mt-3">
                        <div className="col-4">Name</div>
                        <div className="col-8">
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4">Type</div>
                        <div className="col-8">
                            <select
                                className="form-control"
                                onChange={(e) => setSelectedOption(e.target.value)}
                                value={selectedOption}
                            >
                                <option value="">Select Type</option>
                                <option value="image">Image</option>
                                <option value="text_link">Text Link</option>
                            </select>
                        </div>
                    </div>
                    {selectedOption === 'image' && (
                        <div className="row mt-3">
                            <div className="col-4">Landing Page Link</div>
                            <div className="col-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={landingPageLink}
                                    onChange={(e) => setLandingPageLink(e.target.value)}
                                />
                            </div>
                            <div className="col-4 mt-3">Image Link</div>
                            <div className="col-8 mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={imageLink}
                                    onChange={(e) => setImageLink(e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                    {selectedOption === 'text_link' && (
                        <div className="row mt-3">
                            <div className="col-4">Landing Page Link</div>
                            <div className="col-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={landingPageLink}
                                    onChange={(e) => setLandingPageLink(e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                    <div className="row mt-4">
                        <div className="col-8">
                            <button className="btn btn-primary" onClick={handleUpdate}>
                                Update Link
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default User_EditCreative;
