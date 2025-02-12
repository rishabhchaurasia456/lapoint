import React, { useEffect, useState } from 'react';
import config from '../../config/config';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [img, setImg] = useState(null);
    const [author, setAuthor] = useState("");
    const [data, setData] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
        name: '',
        email: '',
        comment: ''
    });

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_blog/${id}`);
                const { title, author, img, data, comments } = response.data;
                setTitle(title);
                setAuthor(author);
                setImg(img);
                setData(data || []);
                setComments(comments || []);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        fetchBlog();
    }, [id]);

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setNewComment(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (newComment.name && newComment.email && newComment.comment) {
            try {
                // Send comment to backend (this assumes an API exists for submitting comments)
                await axios.post(`${config.API_BASE_URL}/api/admin/addcomment/${id}`, newComment);
                // Optionally fetch new comments
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_blog/${id}`);
                setComments(response.data.comments);
                setNewComment({ name: '', email: '', comment: '' });  // Clear form
            } catch (error) {
                console.error("Error posting comment:", error);
            }
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <img
                            src={`${config.API_BASE_URL}/uploads/${img}`}
                            alt={title}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    {/* Blog Text */}
                    <div className="col-md-12 mb-5">
                        <div className='surf_text fs-1 my-2'>
                            <b>{title}</b>
                        </div>
                        <div className='fs-6 my-1'>
                            <b>By: </b>{author}  <span className='ms-5'>{new Date().toLocaleDateString()}</span>
                        </div>
                        {/* Display only the first paragraph (index 0) */}
                        {data.length > 0 && <div>{data[0].para}</div>}
                    </div>
                </div>
                {/* Comments Section */}
                <div className="comments-section mt-5">
                    <h3>Comments</h3>
                    <div>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div key={index} className="comment">
                                    <p><b>{comment.name}</b> ({comment.email})</p>
                                    <p>{comment.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p>No comments yet.</p>
                        )}
                    </div>

                    {/* Comment Form */}
                    <h4>Leave a comment</h4>
                    <form onSubmit={handleCommentSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="name"
                                value={newComment.name}
                                onChange={handleCommentChange}
                                placeholder="Your name"
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                value={newComment.email}
                                onChange={handleCommentChange}
                                placeholder="Your email"
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                name="comment"
                                value={newComment.comment}
                                onChange={handleCommentChange}
                                placeholder="Your comment"
                                required
                                className="form-control"
                                rows="4"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Comment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
