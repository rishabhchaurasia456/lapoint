import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import config from "../config/config";

const Admin_Edit_Blog = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [img, setImg] = useState(null);
    const [author, setAuthor] = useState("");
    const [data, setData] = useState([]);

    // Fetch Blog Details on Component Mount
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_blog/${id}`);
                const { title, author, img, data } = response.data;
                setTitle(title);
                setAuthor(author);
                setImg(img);
                setData(data || []);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        fetchBlog();
    }, [id]);

    // Handle Image Upload Change
    const handleImageChange = (e) => {
        setImg(e.target.files[0]);
    };

    // Handle Paragraph Update
    const handleDataChange = (index, e) => {
        const updatedData = [...data];
        updatedData[index].para = e.target.value;
        setData(updatedData);
    };

    // Add New Paragraph
    const handleAddPara = () => {
        setData([...data, { para: "" }]);
    };

    // Remove Paragraph
    const handleRemovePara = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        if (img && typeof img !== "string") formData.append("img", img); // Append only if new image
        formData.append("data", JSON.stringify(data));

        try {
            const response = await axios.post(
                `${config.API_BASE_URL}/api/admin/edit_blog/${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("Blog updated successfully:", response.data);

            if (response.status === 200) {
                alert("Blog updated successfully!");
                navigate("/admin/blog");
            }
        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Edit Blog</h2>
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

                {/* Image Upload Section */}
                <div className="form-group">
                    <label htmlFor="img">Upload New Image (Optional)</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        className="form-control"
                        onChange={handleImageChange}
                    />
                    {typeof img === "string" && img && (
                        <div>
                            <p>Current Image:</p>
                            <img
                                src={`http://localhost:5500/uploads/${img}`}
                                alt="Blog"
                                style={{ width: "200px" }}
                            />
                        </div>
                    )}
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
                    {data.map((item, index) => (
                        <div key={index} className="form-group">
                            <textarea
                                name="para"
                                className="form-control"
                                value={item.para}
                                onChange={(e) => handleDataChange(index, e)}
                                placeholder={`Paragraph ${index + 1}`}
                                required
                            />
                            {data.length > 1 && (
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
                    Update Blog
                </button>
            </form>
        </div>
    );
};

export default Admin_Edit_Blog;
