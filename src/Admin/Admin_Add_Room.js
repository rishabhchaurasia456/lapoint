import React, { useState } from 'react';
import axios from 'axios';
import config from '../config/config';

const Admin_Add_Room = () => {
  const [tripName, setTripName] = useState('');
  const [roomDetails, setRoomDetails] = useState([{ roomName: '', price: '' }]);

  const handleRoomChange = (index, field, value) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[index][field] = value;
    setRoomDetails(updatedRoomDetails);
  };

  const addRoomField = () => {
    setRoomDetails([...roomDetails, { roomName: '', price: '' }]);
  };

  const removeRoomField = (index) => {
    setRoomDetails(roomDetails.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      tripName,
      roomdetail: roomDetails.map((room) => ({
        roomName: room.roomName,
        price: parseFloat(room.price),
      })),
    };

    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_room`, payload);
      if (response.status === 201) {
        alert('Room entry created successfully!');
        setTripName('');
        setRoomDetails([{ roomName: '', price: '' }]);
      }
    } catch (error) {
      console.error('Error creating room entry:', error);
      alert('Failed to create room entry. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Add Room Entry</h1>
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
            onChange={(e) => setTripName(e.target.value)}
            required
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin_Add_Room;
