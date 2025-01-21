import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import config from '../config/config';
import { Link } from 'react-router-dom';

const Admin_Kitespot = () => {
    const [tabs, setTabs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        tripName: '',
        data: [{ img: null, text: '', heading: '', para: '', img_position: '' }],
    });

    console.log("formData", formData);

    // Fetch all tabs
    const fetchTabs = async () => {
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_Kitespot`);
            setTabs(response.data); // Ensure the correct path for the response
            console.log("response.data.data", response.data)
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
            data: [{ img: null, text: '', heading: '', para: '', img_position: '' }],
        });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Handle form inputs
    const handleInputChange = (e, index, field) => {
        const { name, value, files } = e.target;

        // Handle `tripName` separately
        if (name === 'tripName') {
            setFormData({ ...formData, tripName: value });
            return;
        }

        // Handle changes inside `data` array
        if (index !== undefined && field !== undefined) {
            const updatedData = [...formData.data];

            if (field === 'img') {
                // Handle file input separately
                if (files && files[0]) {
                    updatedData[index][field] = files[0];
                } else {
                    updatedData[index][field] = null;  // Handle case where no file is selected
                }
            } else {
                updatedData[index][field] = value;
            }

            setFormData({ ...formData, data: updatedData });
        }
    };

    const handleAddDataField = () => {
        setFormData({
            ...formData,
            data: [...formData.data, { img: null, text: '', heading: '', para: '', img_position: '' }],
        });
    };

    const handleRemoveDataField = (index) => {
        const updatedData = formData.data.filter((_, i) => i !== index);
        setFormData({ ...formData, data: updatedData });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("tripName", formData.tripName);

        // Loop over each `data` field and append the image and other data separately
        formData.data.forEach((item, index) => {
            if (item.img) {
                // Append image file separately
                formDataToSend.append(`images[${index}]`, item.img);
            }
            // Append other fields (text, heading, para, img_position)
            formDataToSend.append(`data[${index}][text]`, item.text);
            formDataToSend.append(`data[${index}][heading]`, item.heading);
            formDataToSend.append(`data[${index}][para]`, item.para);
            formDataToSend.append(`data[${index}][img_position]`, item.img_position);
        });

        try {
            const response = await axios.post(
                `${config.API_BASE_URL}/api/admin/create_Kitespot`,
                formDataToSend,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            console.log(response.data);
            fetchTabs(); // Refresh the tabs
            handleCloseModal(); // Close the modal
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error.message);
        }
    };


    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this trip Kitespot?")) {
            try {
                const response = await axios.delete(`${config.API_BASE_URL}/api/admin/delete_Kitespot/${id}`);
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
                    <h1>Admin Kitespot</h1>
                </div>
                <div class="col-sm-6">
                    <Button className='float-end' onClick={handleOpenModal}>Create New Kitespot Tab</Button>
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
                                        <Link className="btn btn-primary me-2" to={`/admin/edit/kitespot/${tab._id}`}>Edit</Link>&nbsp;
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
                    <Modal.Title>Create Kitespot Tab</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="tripName"
                                value={formData.tripName}
                                onChange={handleInputChange}  // Directly using handleInputChange for tripName
                                placeholder="Trip Name"
                                className="form-control"
                                required
                            />
                        </div>
                        <div>
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
                                        placeholder="Text"
                                        value={item.text}
                                        onChange={(e) => handleInputChange(e, index, 'text')}
                                        className="form-control mb-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Heading"
                                        value={item.heading}
                                        onChange={(e) => handleInputChange(e, index, 'heading')}
                                        className="form-control mb-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Paragraph"
                                        value={item.para}
                                        onChange={(e) => handleInputChange(e, index, 'para')}
                                        className="form-control mb-2"
                                        required
                                    />
                                    <select
                                        className="form-control mb-2"
                                        value={item.img_position}
                                        onChange={(e) => handleInputChange(e, index, 'img_position')}
                                        required
                                    >
                                        <option value="">--Select Image Position--</option>
                                        <option value="left">Left</option>
                                        <option value="right">Right</option>
                                    </select>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleRemoveDataField(index)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            ))}
                            <Button variant="secondary" size="sm" onClick={handleAddDataField}>
                                Add More Data
                            </Button>
                        </div>
                        <Button type="submit" className="mt-3">
                            Create
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Admin_Kitespot;
