import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config/config';

const Admin_Add_StoriesPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        storiesName: '',
        heading: '',
        subheading: '',
        para1: '',
        para2: '',
        data: [{ title: '', para: '' }],
        images: {}
    });

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

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: { ...formData.images, [e.target.name]: e.target.files[0] } });
    };

    const addDataField = () => {
        setFormData({ ...formData, data: [...formData.data, { title: '', para: '' }] });
    };

    const removeDataField = (index) => {
        const updatedData = formData.data.filter((_, i) => i !== index);
        setFormData({ ...formData, data: updatedData });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('storiesName', formData.storiesName);
        uploadData.append('heading', formData.heading);
        uploadData.append('subheading', formData.subheading);
        uploadData.append('para1', formData.para1);
        uploadData.append('para2', formData.para2);
        formData.data.forEach((item, index) => {
            uploadData.append(`data[${index}][title]`, item.title);
            uploadData.append(`data[${index}][para]`, item.para);
        });
        Object.keys(formData.images).forEach(key => {
            uploadData.append(key, formData.images[key]);
        });
        
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_storiespage`, uploadData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            if (response.status === 201) {
                alert('Stories Page added successfully!');
                navigate('/admin/stories');
            }
        } catch (error) {
            console.error('Error adding storie page:', error);
            alert('Failed to add storie page. Please try again.');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add Stories Page</h2>
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
                    <label className="form-label">Card Image</label>
                    <input type="file" className="form-control" name="cardimg" onChange={handleFileChange} required />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Paragraph 1</label>
                    <textarea className="form-control" name="para1" value={formData.para1} onChange={handleChange} required></textarea>
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Image 1</label>
                    <input type="file" className="form-control" name="img1" onChange={handleFileChange} required />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Image 2</label>
                    <input type="file" className="form-control" name="img2" onChange={handleFileChange} required />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Paragraph 2</label>
                    <textarea className="form-control" name="para2" value={formData.para2} onChange={handleChange} required></textarea>
                </div>
                
                {formData.data.map((item, index) => (
                    <div className="mb-3" key={index}>
                        <label className="form-label">Data Title</label>
                        <input type="text" className="form-control" name="title" value={item.title} onChange={(e) => handleChange(e, index)} required />
                        <label className="form-label mt-2">Data Paragraph</label>
                        <textarea className="form-control" name="para" value={item.para} onChange={(e) => handleChange(e, index)} required></textarea>
                        <button type="button" className="btn btn-danger mt-2" onClick={() => removeDataField(index)}>Remove</button>
                    </div>
                ))}
                
                <button type="button" className="btn btn-secondary mb-3" onClick={addDataField}>Add More Data</button>
                
                <div className="mb-3">
                    <label className="form-label">Image 3</label>
                    <input type="file" className="form-control" name="img3" onChange={handleFileChange} required />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Image 4</label>
                    <input type="file" className="form-control" name="img4" onChange={handleFileChange} required />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Image 5</label>
                    <input type="file" className="form-control" name="img5" onChange={handleFileChange} required />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Admin_Add_StoriesPage;
