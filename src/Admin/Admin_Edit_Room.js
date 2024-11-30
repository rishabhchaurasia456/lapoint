import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Admin_Edit_Room = () => {
  const { id } = useParams(); // Get roomId from URL
  const [tripName, setTripName] = useState('');
  const [roomDetails, setRoomDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.post(`http://localhost:5500/api/admin/get_room/${id}`);
        console.log("response", response.data.trip);

        const trip = response.data.trip;
        
        // Set the trip name
        setTripName(trip.tripName);

        // Set the room details array (populate initially with data)
        setRoomDetails(trip.roomdetail);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    fetchRoomDetails();
  }, [id]); // Depend on id to fetch room details whenever the id changes

  // Handle changes in room details
  const handleRoomChange = (index, field, value) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[index][field] = value;
    setRoomDetails(updatedRoomDetails);
  };

  // Add a new room field (if required for editing multiple rooms)
  const addRoomField = () => {
    setRoomDetails([...roomDetails, { roomName: '', price: '' }]);
  };

  // Remove a room field
  const removeRoomField = (index) => {
    setRoomDetails(roomDetails.filter((_, i) => i !== index));
  };

  // Handle form submission to update the room
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare the payload, sending tripId and the updated room details
    const payload = {
      tripName,
      roomdetail: roomDetails.map((room) => ({
        roomName: room.roomName,
        price: parseFloat(room.price),  // Ensure price is a number
      })),
    };
  
    try {
      // Send the request to update the room details for the given tripId
      const response = await axios.post(`http://localhost:5500/api/admin/edit_room/${id}`, payload);
      if (response.status === 200) {
        alert('Room details updated successfully!');
        navigate('/admin/room'); // Navigate back to the rooms list
      }
    } catch (error) {
      console.error('Error updating room details:', error);
      alert('Failed to update room details. Please try again.');
    }
  };
  

  return (
    <div className="container">
      <h1>Edit Room Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tripName" className="form-label">
            Trip Name
          </label>
          <input
            type="text"
            className="form-control"
            id="tripName"
            value={tripName}
            readOnly // Read-only since trip name shouldn't be changed in this edit form
          />
        </div>

        <h4>Room Details</h4>
        {roomDetails.map((room, index) => (
          <div key={index} className="row mb-2">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Room Name"
                value={room.roomName}
                onChange={(e) => handleRoomChange(index, 'roomName', e.target.value)}
                required
              />
            </div>
            <div className="col-md-5">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={room.price}
                onChange={(e) => handleRoomChange(index, 'price', e.target.value)}
                required
              />
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeRoomField(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <button type="button" className="btn btn-secondary mb-3" onClick={addRoomField}>
          Add Another Room
        </button>

        <button type="submit" className="btn btn-primary">
          Update Room
        </button>
      </form>
    </div>
  );
};

export default Admin_Edit_Room;
