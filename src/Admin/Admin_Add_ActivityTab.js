import React, { useState } from "react";
import axios from "axios";
import config from '../config/config';

const Admin_Add_ActivityTab = () => {
    const [tripName, setTripName] = useState("");
    const [activityCards, setActivityCards] = useState([
        { activityName: "", cardimg: "" },
    ]);

    // Handle input changes for tripName
    const handleTripNameChange = (e) => {
        setTripName(e.target.value);
    };

    // Handle input changes for activity cards
    const handleActivityCardChange = (index, field, value) => {
        const updatedCards = [...activityCards];
        updatedCards[index][field] = value;
        setActivityCards(updatedCards);
    };

    // Handle file input for images
    const handleImageUpload = (index, file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const updatedCards = [...activityCards];
            updatedCards[index].cardimg = reader.result; // Store the Base64 image
            setActivityCards(updatedCards);
        };
        if (file) reader.readAsDataURL(file);
    };

    // Add a new activity card
    const addActivityCard = () => {
        setActivityCards([...activityCards, { activityName: "", cardimg: "" }]);
    };

    // Remove an activity card
    const removeActivityCard = (index) => {
        const updatedCards = activityCards.filter((_, i) => i !== index);
        setActivityCards(updatedCards);
    };

    // Handle form submission
    const handleSubmit = async () => {
        const formData = new FormData();

        // Append trip name
        formData.append("tripName", tripName);

        // Append activity cards
        activityCards.forEach((card, index) => {
            formData.append(`activityCard[${index}][activityName]`, card.activityName);
            formData.append(`activityCard[${index}][cardimg]`, card.cardimg); // File input
        });

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_activitytab`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Activity Tab saved successfully!");
        } catch (error) {
            console.error("Error saving Activity Tab:", error);
            alert("Failed to save Activity Tab.");
        }
    };


    return (
        <div className="container mt-4">
            <h2>Create Activity Tab</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="tripName" className="form-label">
                        Trip Name
                    </label>
                    <input
                        type="text"
                        id="tripName"
                        className="form-control"
                        value={tripName}
                        onChange={handleTripNameChange}
                        placeholder="Enter Trip Name"
                        required
                    />
                </div>

                <h4>Activity Cards</h4>
                {activityCards.map((card, index) => (
                    <div key={index} className="card mb-3">
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor={`activityName-${index}`} className="form-label">
                                    Activity Name
                                </label>
                                <input
                                    type="text"
                                    id={`activityName-${index}`}
                                    className="form-control"
                                    value={card.activityName}
                                    onChange={(e) =>
                                        handleActivityCardChange(index, "activityName", e.target.value)
                                    }
                                    placeholder="Enter Activity Name"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor={`cardimg-${index}`} className="form-label">
                                    Upload Image
                                </label>
                                <input
                                    type="file"
                                    id={`cardimg-${index}`}
                                    className="form-control"
                                    onChange={(e) => handleImageUpload(index, e.target.files[0])}
                                    accept="image/*"
                                    required
                                />
                            </div>
                            {card.cardimg && (
                                <div className="mb-3">
                                    <img
                                        src={card.cardimg}
                                        alt={`Preview ${index}`}
                                        className="img-thumbnail"
                                        style={{ maxWidth: "200px" }}
                                    />
                                </div>
                            )}
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => removeActivityCard(index)}
                            >
                                Remove Card
                            </button>
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    className="btn btn-primary mb-3"
                    onClick={addActivityCard}
                >
                    Add New Card
                </button>

                <button type="submit" className="btn btn-success">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Admin_Add_ActivityTab;
