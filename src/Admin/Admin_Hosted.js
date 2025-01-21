import React, { useState, useEffect } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import config from '../config/config';

const Admin_Hosted = () => {
    const [tripName, setTripName] = useState('');
    const [members, setMembers] = useState([]);
    const [trips, setTrips] = useState([]); // Store fetched trips data
    const [selectedMembers, setSelectedMembers] = useState(['']); // Array of selected member IDs
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    // Fetch trips and members on component load
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [tripsResponse, membersResponse] = await Promise.all([
                    axios.get(`${config.API_BASE_URL}/api/admin/get_hosted`),
                    axios.post(`${config.API_BASE_URL}/api/admin/get_myteam`),
                ]);
                setTrips(tripsResponse.data);
                setMembers(membersResponse.data);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };
        fetchData();
    }, []);

    // Add a new empty select box
    const handleAddMember = () => {
        setSelectedMembers([...selectedMembers, '']);
    };

    // Remove a select box
    const handleRemoveMember = (index) => {
        setSelectedMembers(selectedMembers.filter((_, i) => i !== index));
    };

    // Update selected member
    const handleMemberChange = (index, value) => {
        const updatedMembers = [...selectedMembers];
        updatedMembers[index] = value;
        setSelectedMembers(updatedMembers);
    };

    // Submit the form
    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_hosted`, {
                tripName,
                members: selectedMembers.filter((id) => id), // Remove empty selections
            });
            setMessage(response.data.message || 'Trip created successfully!');
            setTrips([...trips, response.data.trip]); // Append the new trip to the list
            setTripName('');
            setSelectedMembers(['']);
            handleCloseModal(); // Close the modal on success
        } catch (err) {
            console.error('Error creating trip:', err);
            setMessage('Failed to create trip');
        }
    };

    // Open modal
    const handleOpenModal = () => {
        setTripName('');
        setSelectedMembers(['']);
        setShowModal(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this trip team members?")) {
            try {
                const response = await axios.delete(`${config.API_BASE_URL}/api/admin/delete_hosted/${id}`);
                if (response.status === 200) {
                    alert(response.data.message);
                    setTrips((prevData) => prevData.filter((member) => member._id !== id));
                }
            } catch (error) {
                console.error("Error deleting team member:", error);
            }
        }
    };
    return (
        <div className="container mt-4">
            <h2>Admin Hosted Trips</h2>
            <Button className="mb-3" onClick={handleOpenModal}>
                Add New Trip
            </Button>
            {message && <div className="alert alert-info mt-3">{message}</div>}

            {/* Display trips */}
            <h3>Existing Trips Members</h3>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Trip Name</th>
                        <th>Members</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map((trip) => (
                        <tr key={trip._id}>
                            <td>{trip.tripName}</td>
                            <td>
                                <ul>
                                    {trip.members.map((member) => (
                                        <li key={member._id}>
                                            {member.name}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <Button className='btn btn-danger' onClick={() => handleDelete(trip._id)}>Delete</Button>
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
                            value={tripName}
                            onChange={(e) => setTripName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="form-label">Select Members</label>
                        {selectedMembers.map((memberId, index) => (
                            <div key={index} className="d-flex align-items-center mb-2">
                                <select
                                    className="form-select me-2"
                                    value={memberId}
                                    onChange={(e) => handleMemberChange(index, e.target.value)}
                                >
                                    <option value="">Select a member</option>
                                    {members.map((member) => (
                                        <option key={member._id} value={member._id}>
                                            {member.name}
                                        </option>
                                    ))}
                                </select>
                                <Button
                                    variant="danger"
                                    onClick={() => handleRemoveMember(index)}
                                    size="sm"
                                >
                                    Remove
                                </Button>
                            </div>
                        ))}
                        <Button variant="primary" onClick={handleAddMember} size="sm">
                            Add Member
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
                        disabled={!tripName || selectedMembers.every((id) => !id)}
                    >
                        Save Trip
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Admin_Hosted;
