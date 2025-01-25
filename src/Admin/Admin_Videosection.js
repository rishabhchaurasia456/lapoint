import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import config from '../config/config';

const Admin_Videosection = () => {
    const [videoSections, setVideoSections] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        tripName: '',
        videoid: '',
    });
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    // Fetch all vedio sections
    const fetchVideoSections = async () => {
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/getall_video`);
            setVideoSections(response.data.data); // Adjust this based on API response structure
        } catch (error) {
            console.error('Error fetching vedio sections:', error);
        }
    };

    useEffect(() => {
        fetchVideoSections();
    }, []);

    const handleOpenModal = (videoSection = null) => {
        if (videoSection) {
            setFormData({ tripName: videoSection.tripName, videoid: videoSection.videoid });
            setEditMode(true);
            setEditId(videoSection._id);
        } else {
            setFormData({ tripName: '', videoid: '' });
            setEditMode(false);
            setEditId(null);
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editMode) {
                // Update existing vedio section
                await axios.post(`${config.API_BASE_URL}/api/admin/update_video/${editId}`, formData);
            } else {
                // Create new vedio section
                await axios.post(`${config.API_BASE_URL}/api/admin/create_video`, formData);
            }
            fetchVideoSections();
            handleCloseModal();
        } catch (error) {
            console.error('Error submitting form:', error.response?.data || error.message);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this vedio section?')) {
            try {
                await axios.delete(`${config.API_BASE_URL}/api/admin/delete_video/${id}`);
                fetchVideoSections();
            } catch (error) {
                console.error('Error deleting vedio section:', error);
            }
        }
    };

    return (
        <div className="container">
            <div className="row mt-3">
                <div class="col-sm-6">
                    <h1>Admin Vedio Section</h1>
                </div>
                <div class="col-sm-6">
                    <Button className='float-end' onClick={() => handleOpenModal()}>Create New Vedio Section</Button>
                </div>
            </div>

            <div className="row p-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Trip Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(videoSections) && videoSections.length > 0 ? (
                            videoSections.map((section) => (
                                <tr key={section._id}>
                                    <td>{section.tripName}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => handleOpenModal(section)}>Edit</Button>&nbsp;
                                        <Button variant="danger" onClick={() => handleDelete(section._id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))

                        ) : (
                            <p>No data available.</p>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{editMode ? 'Edit Vedio Section' : 'Create Vedio Section'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Trip Name</label>
                            <input
                                type="text"
                                name="tripName"
                                value={formData.tripName}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter Trip Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label>Video Link</label>
                            <input
                                type="text"
                                name="videoid"
                                value={formData.videoid}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter Video ID"
                                required
                            />
                        </div>
                        <Button type="submit" variant="success">
                            {editMode ? 'Update' : 'Create'}
                        </Button>
                        <Button variant="secondary" onClick={handleCloseModal} className="ms-2">
                            Cancel
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Admin_Videosection;
