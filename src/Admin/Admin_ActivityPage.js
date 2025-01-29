import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/config';

const Admin_ActivityPage = () => {
    const [activitypage, setActivitypage] = useState([]);

    useEffect(() => {
        const fetchIncluded = async () => {
            try {
                const response = await axios.post(
                    `${config.API_BASE_URL}/api/admin/getall_activitypage`
                );
                const fetchedData = response.data.getallActivitypage || [];
                setActivitypage(fetchedData);  // Set the array to state
                console.log("fetchedData", fetchedData);
            } catch (error) {
                console.error("Error fetching activity data:", error);
            }
        };

        fetchIncluded();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this activity?")) {
            try {
                const response = await axios.delete(
                    `${config.API_BASE_URL}/api/admin/delete_activitypage/${id}`
                );
                if (response.status === 200) {
                    alert(response.data.message);
                    // Update the state to remove the deleted activity
                    setActivitypage((prevData) => prevData.filter((activity) => activity._id !== id));
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
                        <h1>All Activity Pages</h1>
                    </div>
                    <div className="col-6">
                        <Link to="/admin/add/add_on_activity" className="btn btn-success float-end">
                            Add New Activity
                        </Link>
                    </div>
                </div>
                <div className="row p-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Activity Name</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activitypage.map((activity) => (
                                <tr key={activity._id}>
                                    <td>{activity.activityName}</td>
                                    <td>{activity.title}</td>
                                    <td>{activity.date}</td>
                                    <td>
                                        <Link className="btn btn-primary btn-sm me-2" to={`/admin/edit/add_on_activity/${activity._id}`}>
                                            Edit
                                        </Link>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(activity._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Admin_ActivityPage;
