import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';

const MyCreative = () => {
    const [selectedOption, setSelectedOption] = useState(""); // Track selected option (image/text_link)
    const [affiliates, setAffiliates] = useState([]); // Store affiliates data
    const [selectedAffiliate, setSelectedAffiliate] = useState(""); // Track selected affiliate
    const [landingPageLink, setLandingPageLink] = useState(""); // Track Landing Page Link
    const [generatedLink, setGeneratedLink] = useState(""); // Store the generated link

    // Fetch affiliate users data from the backend API when the component mounts
    useEffect(() => {
        axios.post(`${config.API_BASE_URL}/api/affiliate/affiliate_user_list`) // Adjust to the correct API URL
            .then(response => {
                console.log('Fetched affiliates:', response.data); // Log the actual data returned from the API
                if (response.data) {
                    setAffiliates(response.data); // Set affiliates data
                }
            })
            .catch(error => {
                console.error('Error fetching affiliates:', error); // Log any error in case the fetch fails
            });
    }, []);

    const changebox = (event) => {
        const value = event.target.value;
        setSelectedOption(value); // Update the selected option in state
    };

    const handleAffiliateChange = (event) => {
        const selectedId = event.target.value;
        setSelectedAffiliate(selectedId); // Update selected affiliate ID in state
        console.log("Selected affiliate ID:", selectedId); // Log the selected affiliate ID
    };

    const handleLandingPageChange = (event) => {
        setLandingPageLink(event.target.value); // Update landing page link in state
    };

    // Function to generate new link using selected affiliate ID and Landing Page Link
    const generateNewLink = () => {
        if (selectedAffiliate && landingPageLink) {
            const newLink = `${landingPageLink}?id=${selectedAffiliate}`; // Generate link
            setGeneratedLink(newLink); // Set the generated link
        } else {
            alert("Please select an affiliate and provide a Landing Page Link!");
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="row mt-5">
                            <div className="col-4">Affiliate</div>
                            <div className="col-8">
                                <select
                                    className="form-control"
                                    value={selectedAffiliate}
                                    onChange={handleAffiliateChange}
                                >
                                    <option value="">Select Affiliate</option>
                                    {affiliates.length > 0 ? (
                                        affiliates.map((affiliate) => (
                                            <option key={affiliate._id} value={affiliate._id}>
                                                {affiliate.first_name} {affiliate.last_name}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>Loading...</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-4">Name</div>
                            <div className="col-8">
                                <input type="text" className="form-control" />
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

                        {/* Image container - only shown when 'image' is selected */}
                        {selectedOption === 'image' && (
                            <div className="row mt-5" id="image_container">
                                <div className="row mt-5">
                                    <div className="col-4">Image Link</div>
                                    <div className="col-8">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-4">Alt text</div>
                                    <div className="col-8">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Text link container - only shown when 'text_link' is selected */}
                        {selectedOption === 'text_link' && (
                            <div className="row mt-5">
                                <div className="col-4">Landing Page Link</div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={landingPageLink}
                                        onChange={handleLandingPageChange} // Capture Landing Page Link
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
                                    <p>{generatedLink}</p> {/* Display the generated link */}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default MyCreative;
