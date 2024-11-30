import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Admin_Edit_Activity = () => {
    const { id } = useParams(); // Get tripId from URL
    const [tripName, setTripName] = useState('');
    const [activityType, setActivityType] = useState('');
    const [activityDetails, setActivityDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchActivityDetails = async () => {
            try {
                const response = await axios.post(`http://localhost:5500/api/admin/get_activity/${id}`);
                console.log("response", response.data.trip);

                const trip = response.data.trip;
                
                // Set the trip name
                setTripName(trip.tripName);
                setActivityType(trip.activitytype);

                // Set the activity details array (populate initially with data)
                setActivityDetails(trip.activitydetail);
            } catch (error) {
                console.error("Error fetching activity details:", error);
            }
        };

        fetchActivityDetails();
    }, [id]); // Depend on id to fetch activity details whenever the id changes

    // Handle changes in activity details
    const handleActivityChange = (index, field, value) => {
        const updatedActivityDetails = [...activityDetails];
        updatedActivityDetails[index][field] = value;
        setActivityDetails(updatedActivityDetails);
    };

    // Add a new activity detail field (if required for editing multiple activity details)
    const addActivityDetailField = () => {
        setActivityDetails([...activityDetails, { activityName: '', price: '' }]);
    };

    // Remove an activity detail field
    const removeActivityDetailField = (index) => {
        setActivityDetails(activityDetails.filter((_, i) => i !== index));
    };

    // Handle form submission to update the activity
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare the payload, sending tripId and the updated activity details
        const payload = {
            tripName,
            activitytype: activityType,
            activitydetail: activityDetails.map((activity) => ({
                activityName: activity.activityName,
                price: activity.price,
            })),
        };

        try {
            // Send the request to update the activity details for the given tripId
            const response = await axios.post(`http://localhost:5500/api/admin/edit_activity/${id}`, payload);
            if (response.status === 200) {
                alert('Activity details updated successfully!');
                navigate('/admin/activity'); // Navigate back to the activity list
            }
        } catch (error) {
            console.error('Error updating activity details:', error);
            alert('Failed to update activity details. Please try again.');
        }
    };

    return (
        <div className="container">
            <h1>Edit Activity Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="tripName" className="form-label">
                        Trip Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="tripName"
                        value={tripName}
                        readOnly // Read-only since trip name shouldn't be changed in this edit form
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="activityType" className="form-label">
                        Activity Type
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="activityType"
                        value={activityType}
                        onChange={(e) => setActivityType(e.target.value)} // Editable for Activity Type
                        required
                    />
                </div>

                <h4>Activity Details</h4>
                {activityDetails.map((activity, index) => (
                    <div key={index} className="row mb-2">
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Activity Name"
                                value={activity.activityName}
                                onChange={(e) => handleActivityChange(index, 'activityName', e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Price"
                                value={activity.price}
                                onChange={(e) => handleActivityChange(index, 'price', e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-2">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => removeActivityDetailField(index)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <button type="button" className="btn btn-secondary mb-3" onClick={addActivityDetailField}>
                    Add Another Activity
                </button>

                <button type="submit" className="btn btn-primary">
                    Update Activity
                </button>
            </form>
        </div>
    );
};

export default Admin_Edit_Activity;
