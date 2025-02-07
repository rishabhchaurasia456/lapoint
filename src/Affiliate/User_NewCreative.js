import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';
import { useNavigate } from 'react-router-dom';

const User_NewCreative = () => {
    const [selectedOption, setSelectedOption] = useState(""); 
    const [name, setName] = useState(""); 
    const [landingPageLink, setLandingPageLink] = useState("");
    const [imageLink, setImageLink] = useState(""); 
    const [generatedLink, setGeneratedLink] = useState(""); 

    const navigate = useNavigate();
    const [affiliateUserId, setAffiliateUserId] = useState("");
    const [affiliateName, setAffiliateName] = useState("");

    useEffect(() => {
        const storedAffiliateUserId = localStorage.getItem("AffiliateuserId");
        if (storedAffiliateUserId) {
            setAffiliateUserId(storedAffiliateUserId);
            fetchAffiliateDetails(storedAffiliateUserId);
        } else {
            alert("Affiliate User ID not found in localStorage.");
        }
    }, []);

    console.log("affiliateUserId", affiliateUserId)
    const affiliateId = affiliateUserId.replace(/"/g, '');
    const fetchAffiliateDetails = async (affiliateUserId) => {
        try {
            const cleanedUserId = affiliateUserId.replace(/"/g, '');
            const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/affiliate_get_user/${cleanedUserId}`);
            if (response.data) {
                setAffiliateName(response.data.first_name + " " + response.data.last_name);
            }
        } catch (error) {
            console.error("Error fetching affiliate details:", error);
        }
    };

    const changebox = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleLandingPageChange = (event) => {
        setLandingPageLink(event.target.value);
    };

    const handleImageLinkChange = (event) => {
        setImageLink(event.target.value);
    };

    const generateNewLink = async () => {
        if (!affiliateId || !affiliateName) {
            alert("Affiliate User ID or name is missing.");
            return;
        }
        
        if (!landingPageLink) {
            alert("Please provide a Landing Page Link!");
            return;
        }

        let newLink = "";
        if (selectedOption === "image" && imageLink) {
            newLink = `<a href="${landingPageLink}?id=${affiliateId}"><img src="${imageLink}"></img></a>`;
        } else if (selectedOption === "text_link") {
            newLink = `${landingPageLink}?id=${affiliateId}`;
        } else {
            alert("Please provide all required fields!");
            return;
        }

        setGeneratedLink(newLink);

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/create_link`, {
                affiliate_id: affiliateId,
                affiliate_name: affiliateName, // Include affiliate name
                name,
                type: selectedOption,
                Landing_page_link: landingPageLink,
                Image_link: imageLink || null,
                genrated_link: newLink
            });

            if (response.status === 201) {
                alert('Link saved successfully!');
                navigate("/affiliate/creative ");
            } else {
                alert('Failed to save the link.');
            }
        } catch (error) {
            console.error('Error saving link:', error);
            alert('An error occurred while saving the link.');
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="row mt-5">
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

                    <div className="row mt-5">
                        <div className="col-4">Type</div>
                        <div className="col-8">
                            <select
                                className="form-control"
                                onChange={changebox}
                                value={selectedOption}
                            >
                                <option value="">Select Type</option>
                                <option value="image">Image</option>
                                <option value="text_link">Text Link</option>
                            </select>
                        </div>
                    </div>

                    {selectedOption === 'image' && (
                        <div className="row mt-5">
                            <div className="col-4">Landing Page Link</div>
                            <div className="col-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={landingPageLink}
                                    onChange={handleLandingPageChange}
                                />
                            </div>
                            <div className="col-4 mt-3">Image Link</div>
                            <div className="col-8 mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={imageLink}
                                    onChange={handleImageLinkChange}
                                />
                            </div>
                        </div>
                    )}

                    {selectedOption === 'text_link' && (
                        <div className="row mt-5">
                            <div className="col-4">Landing Page Link</div>
                            <div className="col-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={landingPageLink}
                                    onChange={handleLandingPageChange}
                                />
                            </div>
                        </div>
                    )}

                    <div className="row mt-5">
                        <div className="col-8">
                            <button className="btn btn-primary" onClick={generateNewLink}>
                                Generate New Link
                            </button>
                        </div>
                    </div>

                    {generatedLink && (
                        <div className="row mt-5">
                            <div className="col-4">Generated Link</div>
                            <div className="col-8">
                                <p>{generatedLink}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default User_NewCreative;
