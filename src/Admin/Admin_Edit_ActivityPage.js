import React, { useState, useEffect } from "react"; 
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import config from "../config/config";

const Admin_Edit_ActivityPage = () => {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        activityName: "",
        cardimg: "",
        pagedata: [],
    });

    const [preview, setPreview] = useState({
        cardimg: "",
        pagedata: [],
    });

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const response = await axios.post(
                    `${config.API_BASE_URL}/api/admin/get_single_activitypage/${id}`
                );
                const activityData = response.data.ActivityPages;

                // Initialize preview images
                setPreview({
                    cardimg: `${config.API_BASE_URL}/${activityData.cardimg}`,
                    pagedata: activityData.pagedata.map((page) =>
                        page.img ? `${config.API_BASE_URL}/${page.img}` : ""
                    ),
                });

                setFormData(activityData);
            } catch (error) {
                console.error("Error fetching activity page:", error);
                alert("Failed to fetch activity data.");
            }
        };
        fetchActivity();
    }, [id]);

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handlePagedataChange = (index, field, value) => {
        const updatedPagedata = [...formData.pagedata];
        updatedPagedata[index][field] = value;
        setFormData((prevData) => ({
            ...prevData,
            pagedata: updatedPagedata,
        }));
    };

    const handleFileUpload = (field, file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview((prev) => ({
                ...prev,
                [field]: reader.result, // Update preview
            }));
            setFormData((prevData) => ({
                ...prevData,
                [field]: file, // Store file object for upload
            }));
        };
        if (file) reader.readAsDataURL(file);
    };

    const handlePagedataFileUpload = (index, file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const updatedPreview = [...preview.pagedata];
            updatedPreview[index] = reader.result;
            setPreview((prev) => ({
                ...prev,
                pagedata: updatedPreview,
            }));

            const updatedPagedata = [...formData.pagedata];
            updatedPagedata[index].img = file; // Store file object
            setFormData((prevData) => ({
                ...prevData,
                pagedata: updatedPagedata,
            }));
        };
        if (file) reader.readAsDataURL(file);
    };

    const addPagedataSection = () => {
        setFormData((prevData) => ({
            ...prevData,
            pagedata: [
                ...prevData.pagedata,
                { img: "", img_position: "left", title: "", para: "" },
            ],
        }));
        setPreview((prev) => ({
            ...prev,
            pagedata: [...prev.pagedata, ""], // Add empty preview
        }));
    };

    const removePagedataSection = (index) => {
        setFormData((prevData) => ({
            ...prevData,
            pagedata: prevData.pagedata.filter((_, i) => i !== index),
        }));
        setPreview((prev) => ({
            ...prev,
            pagedata: prev.pagedata.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("activityName", formData.activityName);
            if (formData.cardimg instanceof File) data.append("cardimg", formData.cardimg);

            formData.pagedata.forEach((page, index) => {
                if (page.img instanceof File) {
                    data.append(`pagedata[${index}][img]`, page.img);
                }
                data.append(`pagedata[${index}][img_position]`, page.img_position);
                data.append(`pagedata[${index}][title]`, page.title);
                data.append(`pagedata[${index}][para]`, page.para);
            });

            await axios.post(
                `${config.API_BASE_URL}/api/admin/update_activitypage/${id}`,
                data
            );
            alert("Activity Page updated successfully!");
        } catch (error) {
            console.error("Error updating Activity Page:", error);
            alert("Failed to update Activity Page.");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Edit Activity Page</h2>
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
                    />
                    {preview?.cardimg && (
                        <img
                            src={preview.cardimg}
                            alt="Card Preview"
                            className="img-thumbnail mt-2"
                            style={{ maxWidth: "200px" }}
                        />
                    )}
                </div>

                <h4>Page Sections</h4>
                {formData.pagedata.map((page, index) => (
                    <div key={index} className="border p-3 mb-3">
                        <label className="form-label">Section {index + 1}</label>

                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => handlePagedataFileUpload(index, e.target.files[0])}
                                accept="image/*"
                            />
                            {preview.pagedata[index] && (
                                <img
                                    src={preview.pagedata[index]}
                                    alt="Preview"
                                    className="img-thumbnail mt-2"
                                    style={{ maxWidth: "200px" }}
                                />
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image Position</label>
                            <select
                                className="form-control"
                                value={page.img_position}
                                onChange={(e) => handlePagedataChange(index, "img_position", e.target.value)}
                            >
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
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Paragraph</label>
                            <textarea
                                className="form-control"
                                value={page.para}
                                onChange={(e) => handlePagedataChange(index, "para", e.target.value)}
                                required
                            />
                        </div>

                        <button type="button" className="btn btn-danger" onClick={() => removePagedataSection(index)}>
                            Remove Section
                        </button>
                    </div>
                ))}
                <button type="button" className="btn btn-primary mb-3" onClick={addPagedataSection}>
                    Add Section
                </button>

                <button type="submit" className="btn btn-success">Update</button>
            </form>
        </div>
    );
};

export default Admin_Edit_ActivityPage;
