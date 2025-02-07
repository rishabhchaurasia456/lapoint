import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const EditCreative = () => {
    const { id } = useParams(); // Get ID from URL params
    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState("");
    const [name, setName] = useState("");
    const [affiliates, setAffiliates] = useState([]);
    const [selectedAffiliate, setSelectedAffiliate] = useState("");
    const [landingPageLink, setLandingPageLink] = useState("");
    const [imageLink, setImageLink] = useState("");
    
    useEffect(() => {
        // Fetch existing affiliate link details
        axios.post(`${config.API_BASE_URL}/api/affiliate/get_single_link/${id}`)
            .then(response => {
                const data = response.data;
                setSelectedAffiliate(data.affiliate_id);
                setName(data.name);
                setSelectedOption(data.type);
                setLandingPageLink(data.Landing_page_link);
                setImageLink(data.Image_link || "");
            })
            .catch(error => {
                console.error("Error fetching affiliate link details:", error);
            });

        // Fetch list of affiliates
        axios.post(`${config.API_BASE_URL}/api/affiliate/affiliate_user_list`)
            .then(response => {
                setAffiliates(response.data);
            })
            .catch(error => {
                console.error("Error fetching affiliates:", error);
            });
    }, [id]);

    const handleUpdate = async () => {
        if (!selectedAffiliate || !landingPageLink || !name) {
            alert("Please provide all required fields!");
            return;
        }

        let updatedLink = selectedOption === "image" && imageLink
            ? `<a href="${landingPageLink}?id=${selectedAffiliate}"><img src="${imageLink}"></img></a>`
            : `${landingPageLink}?id=${selectedAffiliate}`;

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/update_affiliate_link/${id}`, {
                affiliate_id: selectedAffiliate,
                // affiliate_name: affiliates.find(aff => aff._id === selectedAffiliate)?.first_name || 'Unknown',
                affiliate_name: affiliates.find((aff) => aff._id === selectedAffiliate)?.first_name + " " + affiliates.find((aff) => aff._id === selectedAffiliate)?.last_name || 'Unknown',
                name,
                type: selectedOption,
                Landing_page_link: landingPageLink,
                Image_link: imageLink || null,
                genrated_link: updatedLink
            });

            if (response.status === 200) {
                alert("Link updated successfully!");
                navigate("/admin/myCreative");
            } else {
                alert("Failed to update the link.");
            }
        } catch (error) {
            console.error("Error updating link:", error);
            alert("An error occurred while updating the link.");
        }
    };

    return (
        <div className="container">
            <h2>Edit Affiliate Link</h2>
            <div className="form-group">
                <label>Affiliate</label>
                <select className="form-control" value={selectedAffiliate} onChange={e => setSelectedAffiliate(e.target.value)}>
                    <option value="">Select Affiliate</option>
                    {affiliates.map(aff => (
                        <option key={aff._id} value={aff._id}>{aff.first_name} {aff.last_name}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Type</label>
                <select className="form-control" value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                    <option value="">Select Type</option>
                    <option value="image">Image</option>
                    <option value="text_link">Text Link</option>
                </select>
            </div>

            <div className="form-group">
                <label>Landing Page Link</label>
                <input type="text" className="form-control" value={landingPageLink} onChange={e => setLandingPageLink(e.target.value)} />
            </div>

            {selectedOption === "image" && (
                <div className="form-group">
                    <label>Image Link</label>
                    <input type="text" className="form-control" value={imageLink} onChange={e => setImageLink(e.target.value)} />
                </div>
            )}

            <button className="btn btn-primary mt-3" onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default EditCreative;
