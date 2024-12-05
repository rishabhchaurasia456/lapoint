import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const Admin_Edit_DateRange = () => {
  const { id } = useParams(); // Trip ID from URL
  const navigate = useNavigate();

  const [tripName, setTripName] = useState('');
  const [days, setDays] = useState('');
  const [dateRanges, setDateRanges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch existing trip data
  useEffect(() => {
    const fetchTripData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_date_ranges/${id}`);
        const tripData = response.data?.getTripDateRange;
        if (tripData) {
          setTripName(tripData.tripName);
          setDays(tripData.days);
          setDateRanges(tripData.dateRanges || []);
        }
      } catch (error) {
        console.error('Error fetching trip data:', error);
        setMessage('Failed to load trip details.');
      } finally {
        setLoading(false);
      }
    };

    fetchTripData();
  }, [id]);

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

      // Make the API call to update trip data
      await axios.put(`${config.API_BASE_URL}/api/admin/edit_date_range/${id}`, {
        tripName,
        days,
        dateRanges,
      });

      setMessage('Trip updated successfully!');
      navigate('/admin/dates'); // Redirect after successful update
    } catch (error) {
      console.error('Error updating trip:', error);
      setMessage('An error occurred while updating the trip.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Edit Trip</h2>
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
                value={range.startDate ? range.startDate.split('T')[0] : ''}
                onChange={(e) => handleDateRangeChange(index, 'startDate', e.target.value)}
                required
              />
              <input
                type="date"
                className="form-control me-2"
                placeholder="End Date"
                value={range.endDate ? range.endDate.split('T')[0] : ''}
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
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeDateRange(index)}
              >
                Remove
              </button>
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
          {loading ? 'Saving...' : 'Save Changes'}
        </button>

        {/* Message */}
        {message && <div className="alert mt-3">{message}</div>}
      </form>
    </div>
  );
};

export default Admin_Edit_DateRange;