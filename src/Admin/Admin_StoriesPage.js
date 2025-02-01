import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/config';

const Admin_StoriesPage = () => {
    const [stories, setstories] = useState([]);

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const response = await axios.post(
                    `${config.API_BASE_URL}/api/admin/getall_storiespage`
                );
                const fetchedData = response.data;
                setstories(fetchedData);
                console.log("allStoriesPage", fetchedData)

                console.log("fetchedDataaaaaaaaaaaaaaa", fetchedData); // Log for debugging
            } catch (error) {
                console.error("Error fetching trip activities:", error);
            }
        };

        fetchTripData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this activity?")) {
            try {
                const response = await axios.delete(
                    `${config.API_BASE_URL}/api/admin/delete_activity/${id}`
                );
                if (response.status === 200) {
                    alert(response.data.message);
                    // Update the state to remove the deleted activity
                    setstories((prevData) => prevData.filter((activity) => activity._id !== id));
                }
            } catch (error) {
                console.error("Error deleting activity:", error);
                alert("Failed to delete the activity. Please try again.");
            }
        }
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row m-2">
                    <div className="col-6">
                        <h1>All Storie</h1>
                    </div>
                    <div className="col-6">
                        <Link to="/admin/add/stories" className="btn btn-success float-end">
                            Add New Storie
                        </Link>
                    </div>
                </div>

                <div className="row p-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Storie Name</th>
                                {/* <th>Price</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stories.map((stories, index) =>
                                <tr>
                                    <td>{stories.storiesName}</td>
                                    <td>
                                        <Link
                                            className="btn btn-primary btn-sm me-2"
                                            to={`/admin/edit/stories/${stories._id}`}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(stories._id)}
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
    );
};

export default Admin_StoriesPage;
