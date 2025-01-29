import React, { useState } from "react";
import axios from "axios";
import config from "../config/config";

const Admin_Add_ActivityPage = () => {
  const [formData, setFormData] = useState({
    activityName: "",
    cardimg: null,
    pagedata: [
      {
        img: null,
        img_position: "",
        title: "",
        para: "",
      },
    ],
  });

  // Handle input changes for activity name
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Handle file uploads
  const handleFileUpload = (field, file, index = null) => {
    if (field === "cardimg") {
      setFormData((prevData) => ({ ...prevData, cardimg: file }));
    } else {
      const updatedPagedata = [...formData.pagedata];
      updatedPagedata[index][field] = file;
      setFormData((prevData) => ({
        ...prevData,
        pagedata: updatedPagedata,
      }));
    }
  };

  // Handle pagedata changes
  const handlePagedataChange = (index, field, value) => {
    const updatedPagedata = [...formData.pagedata];
    updatedPagedata[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      pagedata: updatedPagedata,
    }));
  };

  // Add a new pagedata section
  const addPageSection = () => {
    setFormData((prevData) => ({
      ...prevData,
      pagedata: [
        ...prevData.pagedata,
        { img: null, img_position: "", title: "", para: "" },
      ],
    }));
  };

  // Remove a pagedata section
  const removePageSection = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      pagedata: prevData.pagedata.filter((_, i) => i !== index),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("activityName", formData.activityName);
      formDataToSend.append("cardimg", formData.cardimg);

      formData.pagedata.forEach((page, index) => {
        formDataToSend.append(`pagedata[${index}][img]`, page.img);
        formDataToSend.append(`pagedata[${index}][img_position]`, page.img_position);
        formDataToSend.append(`pagedata[${index}][title]`, page.title);
        formDataToSend.append(`pagedata[${index}][para]`, page.para);
      });

      await axios.post(`${config.API_BASE_URL}/api/admin/create_activitypage`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Activity Page saved successfully!");
    } catch (error) {
      console.error("Error saving Activity Page:", error);
      alert("Failed to save Activity Page.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create Activity Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="activityName" className="form-label">
            Activity Name
          </label>
          <input
            type="text"
            id="activityName"
            className="form-control"
            value={formData.activityName}
            onChange={(e) => handleInputChange("activityName", e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cardimg" className="form-label">
            Card Image
          </label>
          <input
            type="file"
            id="cardimg"
            className="form-control"
            onChange={(e) => handleFileUpload("cardimg", e.target.files[0])}
            accept="image/*"
            required
          />
        </div>

        <h4>Page Sections</h4>
        {formData.pagedata.map((page, index) => (
          <div key={index} className="border p-3 mb-3">
            <div className="mb-3">
              <label className="form-label">Main Image</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => handleFileUpload("img", e.target.files[0], index)}
                accept="image/*"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image Position</label>

              <select
                className="form-control mb-2"
                value={page.img_position}
                onChange={(e) => handlePagedataChange(index, "img_position", e.target.value)}
                required
              >
                <option value="">--Select Image Position--</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={page.title}
                onChange={(e) => handlePagedataChange(index, "title", e.target.value)}
                placeholder="Enter Title"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Paragraph</label>
              <textarea
                className="form-control"
                value={page.para}
                onChange={(e) => handlePagedataChange(index, "para", e.target.value)}
                placeholder="Enter Paragraph"
                required
              />
            </div>

            <button type="button" className="btn btn-danger" onClick={() => removePageSection(index)}>
              Remove Section
            </button>
          </div>
        ))}

        <button type="button" className="btn btn-primary mb-3" onClick={addPageSection}>
          Add New Section
        </button>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin_Add_ActivityPage;
