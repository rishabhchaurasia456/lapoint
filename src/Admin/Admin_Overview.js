import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import config from '../config/config';
import { Link } from 'react-router-dom';

const Admin_Overview = () => {
  const [overviewTabs, setOverviewTabs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [imgGall, setImgGall] = useState([]);
  const formData = new FormData(); // Initialize FormData once.

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formData.set(name, value);
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    formData.set(name, file);
  };

  const addImageField = () => {
    setImgGall([...imgGall, null]);
  };

  const removeImage = (index) => {
    setImgGall(imgGall.filter((_, i) => i !== index));
  };

  const handleImageChange = (index, file) => {
    const updatedImgGall = [...imgGall];
    updatedImgGall[index] = file;
    setImgGall(updatedImgGall);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(); // Recreate FormData to avoid duplicates
  
    // Append text fields
    formData.append("tripName", e.target.tripName.value);
    formData.append("trip_heading", e.target.trip_heading.value);
    formData.append("trip_para", e.target.trip_para.value);
  
    // Append individual images from the file inputs
    formData.append("img1", e.target.img1.files[0]);
    formData.append("img_head1", e.target.img_head1.value);
    formData.append("img_para1", e.target.img_para1.value);
  
    formData.append("img2", e.target.img2.files[0]);
    formData.append("img_head2", e.target.img_head2.value);
    formData.append("img_para2", e.target.img_para2.value);
  
    formData.append("img3", e.target.img3.files[0]);
    formData.append("img_head3", e.target.img_head3.value);
    formData.append("img_para3", e.target.img_para3.value);
  
    formData.append("img4", e.target.img4.files[0]);
    formData.append("img_head4", e.target.img_head4.value);
    formData.append("img_para4", e.target.img_para4.value);
  
    // Append gallery images
    imgGall.forEach((image, index) => {
      formData.append(`img_gall_${index}`, image);
    });
  
    // Debug FormData content
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    try {
      const url = `${config.API_BASE_URL}/api/admin/create_overview`;
  
      await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      fetchOverviewTabs();
      resetForm();
      handleCloseModal();
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
    }
  };
  
  

  const fetchOverviewTabs = async () => {
    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_overview`);
      setOverviewTabs(response.data);
    } catch (error) {
      console.error('Error fetching overview tabs:', error);
    }
  };

  const resetForm = () => {
    formData.delete('tripName');
    formData.delete('trip_heading');
    formData.delete('trip_para');
    formData.delete('img1');
    formData.delete('img2');
    formData.delete('img3');
    formData.delete('img4');
    formData.delete('imgGall');
    setImgGall([]);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  useEffect(() => {
    fetchOverviewTabs();
  }, []);

  return (
    <div className="container">
      <h1>Admin Overview</h1>
      <Button onClick={handleOpenModal}>Create New Overview</Button>

      <h2>Overview Tabs</h2>
      <ul>
        {overviewTabs.map((tab) => (
          <li key={tab._id}>
            <h3>{tab.tripName}</h3>
            <Link className="btn btn-primary me-2" to={`/admin/edit/overview/${tab._id}`}>Edit</Link>&nbsp;
            <Button
              variant="danger"
              onClick={() => axios.delete(`${config.API_BASE_URL}/api/admin/delete_overview/${tab._id}`).then(fetchOverviewTabs)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Overview Tab</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <input type="text" name="tripName" placeholder="Trip Name" onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <input type="text" name="trip_heading" placeholder="Trip Heading" onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <textarea name="trip_para" placeholder="Trip Description" onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <input type="file" name="img1" onChange={handleFileChange} required />
              <input type="text" name="img_head1" placeholder="Image Heading 1" onChange={handleInputChange} required />
              <input type="text" name="img_para1" placeholder="Image Description 1" onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <input type="file" name="img2" onChange={handleFileChange} required />
              <input type="text" name="img_head2" placeholder="Image Heading 2" onChange={handleInputChange} required />
              <input type="text" name="img_para2" placeholder="Image Description 2" onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <input type="file" name="img3" onChange={handleFileChange} required />
              <input type="text" name="img_head3" placeholder="Image Heading 3" onChange={handleInputChange} required />
              <input type="text" name="img_para3" placeholder="Image Description 3" onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <input type="file" name="img4" onChange={handleFileChange} required />
              <input type="text" name="img_head4" placeholder="Image Heading 4" onChange={handleInputChange} required />
              <input type="text" name="img_para4" placeholder="Image Description 4" onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <h5>Gallery Images</h5>
              {imgGall.map((image, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => handleImageChange(index, e.target.files[0])}
                    accept="image/*"
                  />
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeImage(index)}
                    style={{ marginLeft: '10px' }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" className="btn btn-secondary btn-sm" onClick={addImageField}>
                Add More Images
              </button>
            </div>

            <Button type="submit">Create</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Admin_Overview;

