import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin_Level = () => {
  const [tripLevels, setTripLevels] = useState([]); // State to store trip data
  const [editTrip, setEditTrip] = useState(null); // State to manage the trip being edited
  const [showEditModal, setShowEditModal] = useState(false); // To toggle the edit modal

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5500/api/admin/admin_get_form_level"
        );
        const tripData = response.data.getAllTripLevelDate || [];
        console.log("API Response:", tripData);
        setTripLevels(tripData); // Set the data in state
      } catch (error) {
        console.error("Error fetching trip levels:", error);
      }
    };

    fetchTripData();
  }, []);

  // Handle opening the edit modal with the selected trip data
  const handleEdit = (trip) => {
    setEditTrip({ ...trip }); // Clone the selected trip for editing
    setShowEditModal(true);
  };

  // Handle changes to the edit form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTrip((prev) => ({
      ...prev,
      [name]: name === "days" ? value.split(",") : value, // Update days as an array
    }));
  };

  // Handle saving the edited data
  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5500/api/admin/edit_trip_level/${editTrip._id}`, editTrip);
      setTripLevels((prev) =>
        prev.map((trip) => (trip._id === editTrip._id ? editTrip : trip))
      );
      setShowEditModal(false);
    } catch (error) {
      console.error("Error saving edited trip level:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      try {
        const response = await axios.delete(
          `http://localhost:5500/api/admin/delete_form_level/${id}`
        );
        if (response.status === 200) {
          alert(response.data.message);
          // Update the state to remove the deleted activity
          setTripLevels((prevData) => prevData.filter((trip) => trip._id !== id));
        }
      } catch (error) {
        console.error("Error deleting activity:", error);
        alert("Failed to delete the activity. Please try again.");
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row m-2">
        <div className="col-6">
          <h1>All Trip Levels Days</h1>
        </div>
        <div className="col-6">
          <Link to="/admin/add/levels" className="btn btn-success float-end">
            Add New Trip Date
          </Link>
        </div>
      </div>
      <div className="row p-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Trip Name</th>
              <th>Days</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tripLevels.length > 0 ? (
              tripLevels.map((trip) => (
                <tr key={trip._id}>
                  <td>{trip.trip_name}</td>
                  <td>{trip.days.join(", ")}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleEdit(trip)}
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(trip._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Trip Level</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Trip Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="trip_name"
                    value={editTrip.trip_name}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Days (comma-separated)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="days"
                    value={editTrip.days.join(", ")}
                    onChange={handleEditChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowEditModal(false)}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin_Level;
