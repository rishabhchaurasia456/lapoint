import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import config from '../config/config';
import axios from 'axios';

const Admin_Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchallblog = async () => {
      try {
        const response = await axios.post(
          `${config.API_BASE_URL}/api/admin/getall_blog`
        );
        const fetchedData = response.data;
        setBlog(fetchedData);
        console.log("allStoriesPage", fetchedData)

        console.log("fetchedDataaaaaaaaaaaaaaa", fetchedData); // Log for debugging
      } catch (error) {
        console.error("Error fetching trip activities:", error);
      }
    };

    fetchallblog();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const response = await axios.delete(
          `${config.API_BASE_URL}/api/admin/delete_blog/${id}`
        );
        if (response.status === 200) {
          alert(response.data.message);
          // Update the state to remove the deleted blog
          setBlog((prevData) => prevData.filter((blog) => blog._id !== id));
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete the blog. Please try again.");
      }
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row m-2">
          <div className="col-6">
            <h1>All Blogs</h1>
          </div>
          <div className="col-6">
            <Link to="/admin/add/blog" className="btn btn-success float-end">
              Add New Blogs
            </Link>
          </div>
        </div>

        <div className="row p-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Blog Name</th>
                {/* <th>Price</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blog.map((blog, index) =>
                <tr>
                  <td>{blog.title}</td>
                  <td>
                    <Link
                      className="btn btn-primary btn-sm me-2"
                      to={`/admin/edit/blog/${blog._id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admin_Blog