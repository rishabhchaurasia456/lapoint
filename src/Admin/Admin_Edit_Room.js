import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const Admin_Edit_Room = () => {
  const { id } = useParams();
  const [tripName, setTripName] = useState('');
  const [roomDetails, setRoomDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_room/${id}`);
        const trip = response.data.trip;
        setTripName(trip.tripName);
        setRoomDetails(trip.roomdetail);
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };
    fetchRoomDetails();
  }, [id]);

  const handleRoomChange = (index, field, value) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[index][field] = value;
    setRoomDetails(updatedRoomDetails);
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedRoomDetails = [...roomDetails];
      if (!updatedRoomDetails[index].newImages) {
        updatedRoomDetails[index].newImages = [];
      }
      updatedRoomDetails[index].newImages.push(file);
      setRoomDetails(updatedRoomDetails);
    }
  };

  const removeExistingImage = (roomIndex, imageIndex) => {
    const updatedRoomDetails = [...roomDetails];
    const imageToDelete = updatedRoomDetails[roomIndex].images[imageIndex];

    if (!updatedRoomDetails[roomIndex].imagesToDelete) {
      updatedRoomDetails[roomIndex].imagesToDelete = [];
    }

    updatedRoomDetails[roomIndex].imagesToDelete.push(imageToDelete);
    updatedRoomDetails[roomIndex].images.splice(imageIndex, 1);
    setRoomDetails(updatedRoomDetails);
  };

  const removeNewImage = (roomIndex, newImageIndex) => {
    const updatedRoomDetails = [...roomDetails];
    updatedRoomDetails[roomIndex].newImages.splice(newImageIndex, 1);
    setRoomDetails(updatedRoomDetails);
  };

  const removeRoom = (index) => {
    const updatedRoomDetails = roomDetails.filter((_, i) => i !== index);
    setRoomDetails(updatedRoomDetails);
  };

  const addRoomField = () => {
    setRoomDetails([
      ...roomDetails,
      { roomName: '', price: '', images: [], description: '', newImages: [] },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('tripName', tripName);

    roomDetails.forEach((room, index) => {
      formData.append(`roomdetail[${index}][roomName]`, room.roomName);
      formData.append(`roomdetail[${index}][price]`, parseFloat(room.price));
      formData.append(`roomdetail[${index}][description]`, room.description);

      room.images.forEach((image, imgIndex) => {
        formData.append(`roomdetail[${index}][images][${imgIndex}]`, image);
      });

      room.imagesToDelete?.forEach((image, deleteIndex) => {
        formData.append(`roomdetail[${index}][imagesToDelete][${deleteIndex}]`, image);
      });

      room.newImages?.forEach((file, fileIndex) => {
        formData.append(`roomdetail[${index}][newImages]`, file);
      });

      // Debugging
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

    });

    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/admin/edit_room/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        alert('Room details updated successfully!');
        navigate('/admin/room');
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
            readOnly
          />
        </div>

        <h4>Room Details</h4>
        {roomDetails.map((room, index) => (
          <div key={index} className="row mb-4">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Room Name"
                value={room.roomName}
                onChange={(e) => handleRoomChange(index, 'roomName', e.target.value)}
                required
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={room.price}
                onChange={(e) => handleRoomChange(index, 'price', e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <textarea
                className="form-control"
                placeholder="Description"
                value={room.description}
                onChange={(e) => handleRoomChange(index, 'description', e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label>Images:</label>
              <div>
                {/* {room.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={`${config.API_BASE_URL}/${image}`}
                      alt="Room"
                      style={{ width: '80px' }}
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => removeExistingImage(index, imgIndex)}
                    >
                      Remove
                    </button>
                  </div>
                ))} */}
                {room.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={`${config.API_BASE_URL}/${image.replace(/\\/g, '/')}`} // Convert backslashes to slashes
                      alt="Room"
                      style={{ width: '80px' }}
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => removeExistingImage(index, imgIndex)}
                    >
                      Remove
                    </button>
                  </div>
                ))}

              </div>
              <label>New Images:</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => handleImageUpload(index, e)}
                accept="image/*"
              />
              {room.newImages?.map((file, fileIndex) => (
                <div key={fileIndex}>
                  {file.name}
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => removeNewImage(index, fileIndex)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="col-md-12 text-end mt-3">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeRoom(index)}
              >
                Remove Room
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={addRoomField}
        >
          Add Another Room
        </button>
        <button type="submit" className="btn btn-primary mt-3">
          Update Room
        </button>
      </form>
    </div>
  );
};

export default Admin_Edit_Room;
