import React, { useState } from 'react';
import axios from 'axios';
import config from '../config/config';

const Admin_Add_Activity = () => {
  const [tripName, setTripName] = useState('');
  const [activityType, setActivityType] = useState('');
  const [activityDetails, setActivityDetails] = useState([{ activityName: '', price: '' }]);

  // Handle changes to individual fields in the activity details
  const handleActivityChange = (index, field, value) => {
    const updatedActivityDetails = [...activityDetails];
    updatedActivityDetails[index][field] = value;
    setActivityDetails(updatedActivityDetails);
  };

  // Add a new activity detail input field
  const addActivityField = () => {
    setActivityDetails([...activityDetails, { activityName: '', price: '' }]);
  };

  // Remove an activity detail input field
  const removeActivityField = (index) => {
    setActivityDetails(activityDetails.filter((_, i) => i !== index));
  };

  // Submit the form to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      tripName,
      activitytype: activityType,
      activitydetail: activityDetails.map((activity) => ({
        activityName: activity.activityName,
        price: parseFloat(activity.price),
      })),
    };

    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_activity`, payload);
      if (response.status === 201) {
        alert('Activity entry created successfully!');
        setTripName('');
        setActivityType('');
        setActivityDetails([{ activityName: '', price: '' }]);
      }
    } catch (error) {
      console.error('Error creating activity entry:', error);
      alert('Failed to create activity entry. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Add Activity Entry</h1>
      <form onSubmit={handleSubmit}>
        {/* Trip Name Field */}
        <div className="mb-3">
          <label htmlFor="tripName" className="form-label">
            Trip Name
          </label>
          <input
            type="text"
            className="form-control"
            id="tripName"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            required
          />
        </div>

        {/* Activity Type Field */}
        <div className="mb-3">
          <label htmlFor="activityType" className="form-label">
            Activity Type
          </label>
          <select
            className="form-control"
            id="activityType"
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
            required
          >
            <option value="">--Select Activity Type--</option>
            <option value="Recommended Activities">Recommended Activities</option>
            <option value="Add-On Activities">Add-On Activities</option>
          </select>
        </div>

        {/* Activity Details Section */}
        <h4>Activity Details</h4>
        {activityDetails.map((activity, index) => (
          <div key={index} className="row mb-2">
            {/* Activity Name */}
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
            {/* Activity Price */}
            <div className="col-md-5">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={activity.price}
                onChange={(e) => handleActivityChange(index, 'price', e.target.value)}
                required
              />
            </div>
            {/* Remove Activity Button */}
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeActivityField(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {/* Add New Activity Field Button */}
        <button type="button" className="btn btn-secondary mb-3" onClick={addActivityField}>
          Add Another Activity
        </button>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin_Add_Activity;
