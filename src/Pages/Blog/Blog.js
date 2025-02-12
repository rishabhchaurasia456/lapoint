import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from '../../config/config';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchallblog = async () => {
            try {
                const response = await axios.post(
                    `${config.API_BASE_URL}/api/admin/getall_blog`
                );
                const fetchedData = response.data;
                setBlog(fetchedData);
                console.log("allStoriesPage", fetchedData);
                console.log("fetchedDataaaaaaaaaaaaaaa", fetchedData); // Log for debugging
            } catch (error) {
                console.error("Error fetching trip activities:", error);
            }
        };

        fetchallblog();
    }, []);

    return (
        <div>
            <div className="container">
                <div>
                    <h1 className='surf_text m-5 text-center'>Blogs</h1>
                </div>
                {blog.map((item, index) => (
                    <div key={index}>
                        {/* Image */}
                        <Link className='nav-link' to={`/blog/${item._id}`}>
                            <div className="row my-5">
                                <div className="col-md-4">
                                    <img
                                        src={`${config.API_BASE_URL}/uploads/${item.img}`}
                                        alt={item.title}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                                {/* Blog Text */}
                                <div className="col-md-8 mb-5">
                                    <div className='surf_text fs-1 my-2'><b>{item.title}</b></div>
                                    <div className='fs-6 my-1'><b>By: </b>{item.author}  <span className='ms-5'>{item.createdAt}</span></div>
                                    {/* Display only the first paragraph (index 0) */}
                                    {item.data.length > 0 && <div>{item.data[0].para}</div>}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;

