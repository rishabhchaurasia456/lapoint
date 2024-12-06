import React, { useState } from 'react';
import axios from 'axios';
import config from '../config/config';

const Admin_Add_Room = () => {
  const [tripName, setTripName] = useState('');
  const [roomDetails, setRoomDetails] = useState([
    { roomName: '', price: '', images: [], description: '' },
  ]);

  const handleRoomChange = (index, field, value) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[index][field] = value;
    setRoomDetails(updatedRoomDetails);
  };

  const handleImageChange = (roomIndex, imageIndex, file) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[roomIndex].images[imageIndex] = file;
    setRoomDetails(updatedRoomDetails);
  };

  const addImageField = (roomIndex) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[roomIndex].images.push(null); // Add a placeholder for the new image
    setRoomDetails(updatedRoomDetails);
  };

  const removeImage = (roomIndex, imageIndex) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[roomIndex].images.splice(imageIndex, 1);
    setRoomDetails(updatedRoomDetails);
  };

  const addRoomField = () => {
    setRoomDetails([
      ...roomDetails,
      { roomName: '', price: '', images: [], description: '' },
    ]);
  };

  const removeRoomField = (index) => {
    setRoomDetails(roomDetails.filter((_, i) => i !== index));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append('tripName', tripName);

  //   roomDetails.forEach((room, roomIndex) => {
  //     formData.append(`roomdetails[${roomIndex}][roomName]`, room.roomName);
  //     formData.append(`roomdetails[${roomIndex}][price]`, parseFloat(room.price));
  //     formData.append(`roomdetails[${roomIndex}][description]`, room.description);

  //     room.images.forEach((image, imgIndex) => {
  //       if (image) {
  //         formData.append(`roomdetails[${roomIndex}][images][${imgIndex}]`, image);
  //       }
  //     });
  //   });

  //   try {
  //     const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_room`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     if (response.status === 201) {
  //       alert('Room entry created successfully!');
  //       setTripName('');
  //       setRoomDetails([{ roomName: '', price: '', images: [], description: '' }]);
  //     }
  //   } catch (error) {
  //     console.error('Error creating room entry:', error);
  //     alert('Failed to create room entry. Please try again.');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('tripName', tripName);

    // Append room details as JSON without images
    const formattedRoomDetails = roomDetails.map((room) => ({
        roomName: room.roomName,
        price: parseFloat(room.price),
        description: room.description || 'No description provided',
    }));
    formData.append('roomdetail', JSON.stringify(formattedRoomDetails));

    // Append images for each room
    roomDetails.forEach((room, index) => {
        room.images?.forEach((file) => {
            formData.append(`roomdetails[${index}][images]`, file);
        });
    });

    try {
        const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_room`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 201) {
            alert('Room entry created successfully!');
            setTripName('');
            setRoomDetails([{ roomName: '', price: '', images: [] }]);
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
          <label htmlFor="tripName" className="form-label">Trip Name</label>
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
        {roomDetails.map((room, roomIndex) => (
          <div key={roomIndex} className="room-section">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Room Name"
                value={room.roomName}
                onChange={(e) => handleRoomChange(roomIndex, 'roomName', e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={room.price}
                onChange={(e) => handleRoomChange(roomIndex, 'price', e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Description"
                value={room.description}
                onChange={(e) => handleRoomChange(roomIndex, 'description', e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <h5>Images</h5>
              {room.images.map((image, imageIndex) => (
                <div key={imageIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => handleImageChange(roomIndex, imageIndex, e.target.files[0])}
                    accept="image/*"
                  />
                  {image && (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      style={{ width: '100px', height: '100px', objectFit: 'cover', marginLeft: '10px' }}
                    />
                  )}
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeImage(roomIndex, imageIndex)}
                    style={{ marginLeft: '10px' }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => addImageField(roomIndex)}
              >
                Add More Images
              </button>
            </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeRoomField(roomIndex)}
            >
              Remove Room
            </button>
          </div>
        ))}

        <button type="button" className="btn btn-secondary mb-3" onClick={addRoomField}>
          Add Another Room
        </button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Admin_Add_Room;

