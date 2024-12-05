import React, { useState } from 'react';
import axios from 'axios';
import config from '../config/config';

const Admin_Add_DateRange = () => {
  const [tripName, setTripName] = useState('');
  const [days, setDays] = useState('');
  const [dateRanges, setDateRanges] = useState([{ startDate: '', endDate: '', status: 0 }]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle input change for the main trip details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tripName') setTripName(value);
    if (name === 'days') setDays(value);
  };

  // Handle date range changes
  const handleDateRangeChange = (index, field, value) => {
    const updatedDateRanges = [...dateRanges];
    updatedDateRanges[index][field] = value;
    setDateRanges(updatedDateRanges);
  };

  // Add a new date range row
  const addDateRange = () => {
    setDateRanges([...dateRanges, { startDate: '', endDate: '', status: 0 }]);
  };

  // Remove a date range row
  const removeDateRange = (index) => {
    const updatedDateRanges = [...dateRanges];
    updatedDateRanges.splice(index, 1);
    setDateRanges(updatedDateRanges);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tripName || !days) {
      setMessage('Trip name and duration are required.');
      return;
    }

    if (dateRanges.some((range) => !range.startDate || !range.endDate)) {
      setMessage('All date ranges must have start and end dates.');
      return;
    }

    try {
      setLoading(true);
      setMessage('');

      // Make the API call
      const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_date_ranges`, {
        tripName,
        days,
        dateRanges,
      });

      setMessage(response.data.message || 'Trip created successfully!');
      setTripName('');
      setDays('');
      setDateRanges([{ startDate: '', endDate: '', status: 0 }]);
    } catch (error) {
      console.error('Error creating trip:', error);
      setMessage('An error occurred while creating the trip.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create New Trip</h2>
      <form onSubmit={handleSubmit}>
        {/* Trip Name Input */}
        <div className="mb-3">
          <label htmlFor="tripName" className="form-label">Trip Name</label>
          <input
            type="text"
            id="tripName"
            name="tripName"
            className="form-control"
            value={tripName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Days Input */}
        <div className="mb-3">
          <label htmlFor="days" className="form-label">Duration (e.g., 7 days)</label>
          <input
            type="text"
            id="days"
            name="days"
            className="form-control"
            value={days}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Date Ranges */}
        <div className="mb-3">
          <label className="form-label">Date Ranges</label>
          {dateRanges.map((range, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <input
                type="date"
                className="form-control me-2"
                placeholder="Start Date"
                value={range.startDate}
                onChange={(e) => handleDateRangeChange(index, 'startDate', e.target.value)}
                required
              />
              <input
                type="date"
                className="form-control me-2"
                placeholder="End Date"
                value={range.endDate}
                onChange={(e) => handleDateRangeChange(index, 'endDate', e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control me-2"
                placeholder="Status (e.g., Available or Booked)"
                value={range.status}
                onChange={(e) => handleDateRangeChange(index, 'status', e.target.value)}
                required
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeDateRange(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={addDateRange}
          >
            Add Date Range
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : 'Create Trip'}
        </button>

        {/* Message */}
        {message && <div className="alert mt-3">{message}</div>}
      </form>
    </div>
  );
};

export default Admin_Add_DateRange;