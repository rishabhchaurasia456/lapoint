import React, { useState, useEffect } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import config from '../config/config';

const Admin_ActivityTab = () => {
    const [tripName, setTripName] = useState('');
    const [activities, setActivities] = useState([]); // Fetched activities
    const [trips, setTrips] = useState([]); // Store fetched trips data
    const [selectedActivities, setSelectedActivities] = useState(['']); // Array of selected activity IDs
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    // Fetch trips and activities on component load
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [tripsResponse, activitiesResponse] = await Promise.all([
                    axios.post(`${config.API_BASE_URL}/api/admin/getall_activitytab`),
                    axios.post(`${config.API_BASE_URL}/api/admin/getall_activitypage`),
                ]);
                // setTrips(tripsResponse.data);
                // setActivities(activitiesResponse.getallActivitypage.data);
                if (tripsResponse?.data) {
                    setTrips(tripsResponse.data);
                }
    
                if (activitiesResponse?.data) {
                    setActivities(activitiesResponse.data.getallActivitypage); // Corrected structure
                }
                console.log("activitiesResponse.getallActivitypage.data", activitiesResponse?.data?.getallActivitypage)
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };
        fetchData();
    }, []);

    // Add a new empty select box
    const handleAddActivity = () => {
        setSelectedActivities([...selectedActivities, '']);
    };

    // Remove a select box
    const handleRemoveActivity = (index) => {
        setSelectedActivities(selectedActivities.filter((_, i) => i !== index));
    };

    // Update selected activity
    const handleActivityChange = (index, value) => {
        const updatedActivities = [...selectedActivities];
        updatedActivities[index] = value;
        setSelectedActivities(updatedActivities);
    };

    // Submit the form
    const handleSubmit = async () => {
        try {
            const payload = {
                tripName,
                activities: selectedActivities.filter((id) => id), // Ensure no empty selections
            };
            console.log('Payload being sent:', payload); // Debugging log
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_activitytab`, payload);
            setMessage(response.data.message || 'Trip created successfully!');
            setTrips([...trips, response.data.trip]); // Append the new trip to the list
            setTripName('');
            setSelectedActivities(['']);
            handleCloseModal(); // Close the modal on success
        } catch (err) {
            console.error('Error creating trip:', err);
            setMessage('Failed to create trip');
        }
    };
    

    // Open modal
    const handleOpenModal = () => {
        setTripName('');
        setSelectedActivities(['']);
        setShowModal(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this trip activity?')) {
            try {
                const response = await axios.delete(`${config.API_BASE_URL}/api/admin/delete_activitytab/${id}`);
                if (response.status === 200) {
                    alert(response.data.message);
                    setTrips((prevData) => prevData.filter((trip) => trip._id !== id));
                }
            } catch (error) {
                console.error('Error deleting trip activity:', error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <h2>Admin Add on Activites Trips</h2>
            <Button className="mb-3" onClick={handleOpenModal}>
                Add New Trip
            </Button>
            {message && <div className="alert alert-info mt-3">{message}</div>}

            {/* Display trips */}
            <h3>Existing Trips Activities</h3>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Trip Name</th>
                        <th>Activities</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map((trip) => (
                        <tr key={trip._id}>
                            <td>{trip.tripName}</td>
                            <td>
                                <ul>
                                    {trip.activities.map((activity) => (
                                        <li key={activity._id}>{activity.activityName}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <Button className="btn btn-danger" onClick={() => handleDelete(trip._id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a New Trip</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label className="form-label">Trip Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Trip Name'
                            value={tripName}
                            onChange={(e) => setTripName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="form-label">Select Activities</label>
                        {selectedActivities.map((activityId, index) => (
                            <div key={index} className="d-flex align-items-center mb-2">
                                <select
                                    className="form-select me-2"
                                    value={activityId}
                                    onChange={(e) => handleActivityChange(index, e.target.value)}
                                >
                                    <option value="">Select an activity</option>
                                    {activities.map((activity) => (
                                        <option key={activity._id} value={activity._id}>
                                            {activity.activityName}
                                        </option>
                                    ))}
                                </select>
                                <Button variant="danger" onClick={() => handleRemoveActivity(index)} size="sm">
                                    Remove
                                </Button>
                            </div>
                        ))}
                        <Button variant="primary" onClick={handleAddActivity} size="sm">
                            Add Activity
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button
                        variant="success"
                        onClick={handleSubmit}
                        disabled={!tripName || selectedActivities.every((id) => !id)}
                    >
                        Save Trip
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Admin_ActivityTab;
