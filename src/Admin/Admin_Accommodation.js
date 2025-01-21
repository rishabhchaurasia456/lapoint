import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import config from '../config/config';
import { Link } from 'react-router-dom';

const Admin_Accommodation = () => {
    const [tabs, setTabs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        tripName: '',
        mainTitle: '',
        mainDesc: '',
        locationTitle: '',
        locationSubtitle: '',
        locationDesc: '',
        iframe: '',
        data: [{ img: null, heading: '', para: '' }],
    });

    // Fetch all tabs
    const fetchTabs = async () => {
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_accommodation`);
            setTabs(response.data);
        } catch (error) {
            console.error('Error fetching tabs:', error);
        }
    };

    useEffect(() => {
        fetchTabs();
    }, []);

    const handleOpenModal = () => {
        setFormData({
            tripName: '',
            mainTitle: '',
            mainDesc: '',
            locationTitle: '',
            locationSubtitle: '',
            locationDesc: '',
            iframe: '',
            data: [{ img: null, heading: '', para: '' }],
        });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e, index, field) => {
        const { name, value, files } = e.target;

        if (name) {
            // Update top-level fields
            setFormData({ ...formData, [name]: value });
        } else if (index !== undefined && field !== undefined) {
            // Update fields inside the `data` array
            const updatedData = [...formData.data];
            if (field === 'img' && files && files[0]) {
                updatedData[index][field] = files[0];
            } else {
                updatedData[index][field] = value;
            }
            setFormData({ ...formData, data: updatedData });
        }
    };

    const handleAddDataField = () => {
        setFormData({
            ...formData,
            data: [...formData.data, { img: null, heading: '', para: '' }],
        });
    };

    const handleRemoveDataField = (index) => {
        const updatedData = formData.data.filter((_, i) => i !== index);
        setFormData({ ...formData, data: updatedData });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'data') {
                value.forEach((item, index) => {
                    if (item.img) formDataToSend.append(`data[${index}][img]`, item.img);
                    formDataToSend.append(`data[${index}][heading]`, item.heading);
                    formDataToSend.append(`data[${index}][para]`, item.para);
                    // formDataToSend.append(`data[${index}][img_position]`, item.img_position);
                });
            } else {
                formDataToSend.append(key, value);
            }
        });

        try {
            const response = await axios.post(
                `${config.API_BASE_URL}/api/admin/create_accommodation`,
                formDataToSend,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            console.log(response.data);
            fetchTabs();
            handleCloseModal();
        } catch (error) {
            console.error('Error submitting form:', error.response?.data || error.message);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this trip accommodation?")) {
            try {
                const response = await axios.delete(`${config.API_BASE_URL}/api/admin/delete_accommodation/${id}`);
                fetchTabs();
                if (response.status === 200) {
                    alert(response.data.message);
                    // Update the state to remove the deleted trip
                    setTabs((prevData) => prevData.filter((trip) => trip._id !== id));
                }
            } catch (error) {
                console.error('Error deleting tab:', error);
            }
        }
    };

    return (
        <div className="container">
            <div className="row mt-3">
                <div class="col-sm-6">
                    <h1>Admin Accommodation</h1>
                </div>
                <div class="col-sm-6">
                    <Button className='float-end' onClick={handleOpenModal}>Create New Accommodation Tab</Button>
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
                        {Array.isArray(tabs) && tabs.length > 0 ? (
                            tabs.map((tab) => (
                                <tr key={tab._id}>
                                    <td>{tab.tripName}</td>
                                    <td>
                                        <Link className="btn btn-primary me-2" to={`/admin/edit/accommodation/${tab._id}`}>Edit</Link>&nbsp;
                                        <Button variant="danger" onClick={() => handleDelete(tab._id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <p>Loading or no data available.</p>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Accommodation Tab</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="tripName"
                            value={formData.tripName}
                            onChange={handleInputChange}
                            placeholder="Trip Name"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="mainTitle"
                            value={formData.mainTitle}
                            onChange={handleInputChange}
                            placeholder="Main Title"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="mainDesc"
                            value={formData.mainDesc}
                            onChange={handleInputChange}
                            placeholder="Main Description"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="locationTitle"
                            value={formData.locationTitle}
                            onChange={handleInputChange}
                            placeholder="Location Title"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="locationSubtitle"
                            value={formData.locationSubtitle}
                            onChange={handleInputChange}
                            placeholder="Location Subtitle"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="locationDesc"
                            value={formData.locationDesc}
                            onChange={handleInputChange}
                            placeholder="Location Description"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="iframe"
                            value={formData.iframe}
                            onChange={handleInputChange}
                            placeholder="iframe"
                            className="form-control mb-3"
                            required
                        />
                        <h5>Data Fields</h5>
                        {formData.data.map((item, index) => (
                            <div key={index} className="mb-3">
                                <input
                                    type="file"
                                    onChange={(e) => handleInputChange(e, index, 'img')}
                                    className="form-control mb-2"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Heading"
                                    value={item.heading}
                                    onChange={(e) => handleInputChange(e, index, 'heading')}
                                    className="form-control mb-2"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Paragraph"
                                    value={item.para}
                                    onChange={(e) => handleInputChange(e, index, 'para')}
                                    className="form-control mb-2"
                                    required
                                />
                                {/* <input
                                    type="text"
                                    placeholder="Image Position"
                                    value={item.img_position}
                                    onChange={(e) => handleInputChange(e, index, 'img_position')}
                                    className="form-control mb-2"
                                    required
                                /> */}
                                <Button variant="danger" size="sm" onClick={() => handleRemoveDataField(index)}>
                                    Remove
                                </Button>
                            </div>
                        ))}
                        <Button variant="secondary" onClick={handleAddDataField}>
                            Add More Data
                        </Button>
                        <Button type="submit" className="mt-3">
                            Create
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Admin_Accommodation;
