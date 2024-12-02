import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/config';

const Admin_Room = () => {
    const [tripRoom, setTripRoom] = useState([]);

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const response = await axios.post(
                    `${config.API_BASE_URL}/api/admin/getall_room`
                );
                const fetchedData = response.data.getallTripRoom || [];
                setTripRoom(fetchedData);
            } catch (error) {
                console.error("Error fetching trip levels:", error);
            }
        };

        fetchTripData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this trip room?")) {
          try {
            const response = await axios.delete(
              `${config.API_BASE_URL}/api/admin/delete_room/${id}`
            );
            if (response.status === 200) {
              alert(response.data.message);
              // Update the state to remove the deleted trip
              setTripRoom((prevData) => prevData.filter((trip) => trip._id !== id));
            }
          } catch (error) {
            console.error("Error deleting trip room:", error);
            alert("Failed to delete the trip room. Please try again.");
          }
        }
      };

    return (
        <div>
            <div className="container-fluid">
                <div className="row m-2">
                    <div className="col-6">
                        <h1>All Trip Rooms</h1>
                    </div>
                    <div className="col-6">
                        <Link to="/admin/add/room" className="btn btn-success float-end">
                            Add New Trip Room
                        </Link>
                    </div>
                </div>
                <div className="row p-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Trip Name</th>
                                <th>Room Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tripRoom.map((trip) => (
                                trip.roomdetail.map((room, index) => (
                                    <tr key={room._id}>
                                        {index === 0 && (
                                            <td rowSpan={trip.roomdetail.length}>{trip.tripName}</td>
                                        )}
                                        <td>{room.roomName}</td>
                                        <td>${room.price}</td>
                                        {index === 0 && (
                                        <td>
                                            <Link className="btn btn-primary btn-sm me-2" to={`/admin/edit/room/${trip._id}`} >Edit</Link>
                                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(trip._id)}>Delete</button>
                                        </td>
                                        )}
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin_Room;
