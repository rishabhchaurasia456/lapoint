import React, { useState } from 'react';
import axios from 'axios';
import config from '../config/config';

const Admin_Add_Level = () => {
  const [tripName, setTripName] = useState('');
  const [days, setDays] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data
    const data = {
      trip_name: tripName,
      days: days.split(',').map(day => day.trim()), // Convert comma-separated values into an array
    };

    try {
      // Send POST request using Axios
      const response = await axios.post(`${config.API_BASE_URL}/api/admin/admin_form_level`, data);
      alert(response.data.message || 'Entry added successfully!');
      setTripName('');
      setDays('');
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Failed to add entry. Please try again.');
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className='text-center'>Add New Trip levels Dates</h1>
      </div>
      <div className="row p-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div>
              <label className='form-label'>Trip Name</label>
              <input
                type='text'
                className='form-control'
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='form-label'>Levels Duration in Days (comma-separated)</label>
              <input
                type='text'
                className='form-control'
                value={days}
                onChange={(e) => setDays(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Admin_Add_Level;