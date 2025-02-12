import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config/config';

const Admin_Add_Blog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [img, setImg] = useState(null); // Changed from string to file object
    const [author, setAuthor] = useState('');
    const [para, setPara] = useState('');
    const [comments, setComments] = useState([{ name: '', email: '', comment: '' }]);

    const handleAddPara = () => {
        setPara('');
        setComments([...comments, { name: '', email: '', comment: '' }]);
    };

    const handleRemovePara = (index) => {
        const newComments = comments.filter((_, i) => i !== index);
        setComments(newComments);
    };

    const handleCommentChange = (index, e) => {
        const updatedComments = [...comments];
        updatedComments[index][e.target.name] = e.target.value;
        setComments(updatedComments);
    };

    // Handle image file input change
    const handleImageChange = (e) => {
        setImg(e.target.files[0]); // Set the selected file
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(); // Create a FormData object
    //     formData.append('title', title);
    //     formData.append('author', author);
    //     formData.append('img', img); // Append the image file to FormData
    //     formData.append('data', JSON.stringify(comments.map(c => ({ para: c.comment }))));
    //     formData.append('comments', JSON.stringify(comments));

    //     try {
    //         const response = await axios.post('http://localhost:5500/api/admin/create_blog', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
    //             },
    //         });

    //         console.log('Blog posted successfully:', response.data);

    //         if (response.status === 201) {
    //             alert('Blog added successfully!');
    //             navigate('/admin/blog');
    //         }

    //         // Reset form after successful submission
    //         setTitle('');
    //         setImg(null);
    //         setAuthor('');
    //         setComments([{ name: '', email: '', comment: '' }]);
    //     } catch (error) {
    //         console.error('Error posting blog:', error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        if (img) formData.append("img", img); // Ensure img is not null
        formData.append("data", JSON.stringify(comments.map(c => ({ para: c.comment }))));
    
        // Debugging: Log formData entries
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
    
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_blog`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            console.log("Blog posted successfully:", response.data);
    
            if (response.status === 201) {
                alert("Blog added successfully!");
                navigate("/admin/blog");
            }
    
            // Reset form
            setTitle("");
            setImg(null);
            setAuthor("");
            setComments([{ name: "", email: "", comment: "" }]);
        } catch (error) {
            console.error("Error posting blog:", error);
        }
    };
    
    return (
        <div className="container mt-5">
            <h2>Create a Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                {/* Image upload section */}
                <div className="form-group">
                    <label htmlFor="img">Upload Image</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        className="form-control"
                        onChange={handleImageChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Paragraphs</label>
                    {comments.map((comment, index) => (
                        <div key={index} className="form-group">
                            <textarea
                                name="comment"
                                className="form-control"
                                value={comment.comment}
                                onChange={(e) => handleCommentChange(index, e)}
                                placeholder={`Paragraph ${index + 1}`}
                                required
                            />
                            {comments.length > 1 && (
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm mt-2"
                                    onClick={() => handleRemovePara(index)}
                                >
                                    Remove Paragraph
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        className="btn btn-primary mt-2"
                        onClick={handleAddPara}
                    >
                        Add Paragraph
                    </button>
                </div>

                <button type="submit" className="btn btn-success mt-3">
                    Submit Blog
                </button>
            </form>
        </div>
    );
};

export default Admin_Add_Blog;


