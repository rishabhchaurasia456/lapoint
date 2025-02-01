import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import config from "../config/config";

const Admin_Edit_StoriesPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        storiesName: "",
        heading: "",
        subheading: "",
        para1: "",
        para2: "",
        data: [{ title: "", para: "" }],
        images: {} // Ensure images is always an object
    });
    

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_single_storiespage/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching story details:", error);
                alert("Failed to fetch story details.");
            }
        };
        fetchStory();
    }, [id]);

    const handleChange = (e, index = null) => {
        const { name, value } = e.target;
        if (index !== null) {
            const updatedData = [...formData.data];
            updatedData[index][name] = value;
            setFormData({ ...formData, data: updatedData });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // const handleFileChange = (e) => {
    //     setFormData({ ...formData, images: { ...formData.images, [e.target.name]: e.target.files[0] } });
    // };
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            images: { ...formData.images, [e.target.name]: e.target.files[0] }
        });
    };

    const addDataField = () => {
        setFormData({ ...formData, data: [...formData.data, { title: "", para: "" }] });
    };

    const removeDataField = (index) => {
        const updatedData = formData.data.filter((_, i) => i !== index);
        setFormData({ ...formData, data: updatedData });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const uploadData = new FormData();
    //     uploadData.append("storiesName", formData.storiesName);
    //     uploadData.append("heading", formData.heading);
    //     uploadData.append("subheading", formData.subheading);
    //     uploadData.append("para1", formData.para1);
    //     uploadData.append("para2", formData.para2);
    //     formData.data.forEach((item, index) => {
    //         uploadData.append(`data[${index}][title]`, item.title);
    //         uploadData.append(`data[${index}][para]`, item.para);
    //     });
    //     Object.keys(formData.images).forEach((key) => {
    //         if (formData.images[key]) {
    //             uploadData.append(key, formData.images[key]);
    //         }
    //     });

    //     try {
    //         const response = await axios.put(`${config.API_BASE_URL}/api/admin/update_StoriesPage/${id}`, uploadData, {
    //             headers: { "Content-Type": "multipart/form-data" },
    //         });
    //         if (response.status === 200) {
    //             alert("Stories Page updated successfully!");
    //             navigate("/admin/stories");
    //         }
    //     } catch (error) {
    //         console.error("Error updating story page:", error);
    //         alert("Failed to update story page. Please try again.");
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uploadData = new FormData();
    
        // Add all fields to form data
        uploadData.append("storiesName", formData.storiesName);
        uploadData.append("heading", formData.heading);
        uploadData.append("subheading", formData.subheading);
        uploadData.append("para1", formData.para1);
        uploadData.append("para2", formData.para2);
    
        formData.data.forEach((item, index) => {
            uploadData.append(`data[${index}][title]`, item.title);
            uploadData.append(`data[${index}][para]`, item.para);
        });
    
        // Add images dynamically
        Object.keys(formData.images).forEach((key) => {
            if (formData.images[key]) {
                uploadData.append(key, formData.images[key]);
            }
        });
    
        try {
            const response = await axios.post(
                `${config.API_BASE_URL}/api/admin/update_StoriesPage/${id}`,
                uploadData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            if (response.status === 200) {
                alert("Stories Page updated successfully!");
                navigate("/admin/stories");
            }
        } catch (error) {
            console.error("Error updating story page:", error);
            alert("Failed to update story page. Please try again.");
        }
    };
    
    
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Edit Stories Page</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Story Name</label>
                    <input type="text" className="form-control" name="storiesName" value={formData.storiesName} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Heading</label>
                    <input type="text" className="form-control" name="heading" value={formData.heading} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Sub Heading</label>
                    <input type="text" className="form-control" name="subheading" value={formData.subheading} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Card Img</label>
                    <input type="file" className="form-control" name="cardimg" onChange={handleFileChange} />
                    <img
                        src={`${config.API_BASE_URL}/${formData.cardimg}`}
                        alt="Preview"
                        className="img-thumbnail mt-2"
                        style={{ maxWidth: "200px" }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Paragraph 1</label>
                    <textarea className="form-control" name="para1" value={formData.para1} onChange={handleChange} required></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Image 1</label>
                    <input type="file" className="form-control" name="img1" onChange={handleFileChange} />
                    <img
                        src={`${config.API_BASE_URL}/${formData.img1}`}
                        alt="Preview"
                        className="img-thumbnail mt-2"
                        style={{ maxWidth: "200px" }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image 2</label>
                    <input type="file" className="form-control" name="img2" onChange={handleFileChange} />
                    <img
                        src={`${config.API_BASE_URL}/${formData.img2}`}
                        alt="Preview"
                        className="img-thumbnail mt-2"
                        style={{ maxWidth: "200px" }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Paragraph 1</label>
                    <textarea className="form-control" name="para2" value={formData.para2} onChange={handleChange} required></textarea>
                </div>
                {formData.data.map((item, index) => (
                    <div key={index}>
                        <div className="mb-3">
                            <label className="form-label">Title {index + 1}</label>
                            <input type="text" className="form-control" name="title" value={item.title} onChange={(e) => handleChange(e, index)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Paragraph {index + 1}</label>
                            <textarea className="form-control" name="para" value={item.para} onChange={(e) => handleChange(e, index)} required></textarea>
                        </div>
                        <button type="button" className="btn btn-danger" onClick={() => removeDataField(index)}>Remove</button>
                    </div>
                ))}
                <button type="button" className="btn btn-primary" onClick={addDataField}>Add More Data</button>
                <div className="mb-3">
                    <label className="form-label">Image 3</label>
                    <input type="file" className="form-control" name="img3" onChange={handleFileChange} />
                    <img
                        src={`${config.API_BASE_URL}/${formData.img3}`}
                        alt="Preview"
                        className="img-thumbnail mt-2"
                        style={{ maxWidth: "200px" }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image 4</label>
                    <input type="file" className="form-control" name="img4" onChange={handleFileChange} />
                    <img
                        src={`${config.API_BASE_URL}/${formData.img4}`}
                        alt="Preview"
                        className="img-thumbnail mt-2"
                        style={{ maxWidth: "200px" }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image 5</label>
                    <input type="file" className="form-control" name="img5" onChange={handleFileChange} />
                    <img
                        src={`${config.API_BASE_URL}/${formData.img5}`}
                        alt="Preview"
                        className="img-thumbnail mt-2"
                        style={{ maxWidth: "200px" }}
                    />
                </div>
                <button type="submit" className="btn btn-success">Update</button>
            </form>
        </div>
    );
};

export default Admin_Edit_StoriesPage;
