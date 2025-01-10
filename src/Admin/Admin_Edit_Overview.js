import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const Admin_Edit_Overview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State for form fields
  const [tripName, setTripName] = useState('');
  const [tripHeading, setTripHeading] = useState('');
  const [tripPara, setTripPara] = useState('');
  const [removedImages, setRemovedImages] = useState([]); // To track removed images
  const [galleryImages, setGalleryImages] = useState([]); // Current gallery images


  // State for images and previews
  const [images, setImages] = useState([
    { file: null, preview: '', url: '', head: '', para: '' },
    { file: null, preview: '', url: '', head: '', para: '' },
    { file: null, preview: '', url: '', head: '', para: '' },
    { file: null, preview: '', url: '', head: '', para: '' },
  ]);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_single_overview/${id}`);
        const trip = response.data;

        setTripName(trip.tripName);
        setTripHeading(trip.trip_heading);
        setTripPara(trip.trip_para);

        // Initialize images with backend data
        setImages([
          { file: null, preview: '', url: trip.img1, head: trip.img_head1, para: trip.img_para1 },
          { file: null, preview: '', url: trip.img2, head: trip.img_head2, para: trip.img_para2 },
          { file: null, preview: '', url: trip.img3, head: trip.img_head3, para: trip.img_para3 },
          { file: null, preview: '', url: trip.img4, head: trip.img_head4, para: trip.img_para4 },
        ]);

        // Initialize gallery images with URLs or default previews
        setGalleryImages(
          (trip.gall || []).map((image) => ({
            preview: `${config.API_BASE_URL}/${image}`,
            url: image,
          }))
        );

      } catch (error) {
        console.error('Error fetching trip details:', error);
      }
    };
    fetchRoomDetails();
  }, [id]);

  const handleImageChange = (index, file) => {
    const updatedImages = [...images];
    updatedImages[index].file = file;
    updatedImages[index].preview = URL.createObjectURL(file); // Preview the uploaded image
    setImages(updatedImages);
  };

  const addGalleryImage = () => {
    setGalleryImages([...galleryImages, { file: null, preview: null }]);
  };

  const handleGalleryImageChange = (index, file) => {
    const updatedGalleryImages = [...galleryImages];
    updatedGalleryImages[index] = {
      file: file,
      preview: URL.createObjectURL(file),
    };
    setGalleryImages(updatedGalleryImages);
  };


  const removeGalleryImage = (index) => {
    const updatedGalleryImages = [...galleryImages];
    const removedImage = updatedGalleryImages[index];

    // Add to removedImages if it exists in the backend
    if (removedImage?.url) {
      setRemovedImages([...removedImages, removedImage.url]);
    }

    // Remove from the galleryImages state
    updatedGalleryImages.splice(index, 1);
    setGalleryImages(updatedGalleryImages);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append('tripName', tripName);
  //   formData.append('trip_heading', tripHeading);
  //   formData.append('trip_para', tripPara);

  //   // Append new images
  //   galleryImages.forEach((image, index) => {
  //     if (image.file) {
  //       formData.append(`gall_${index}`, image.file);
  //     }
  //   });

  //   // Append removed images
  //   formData.append('removeGall', JSON.stringify(removedImages));

  //   try {
  //     const response = await axios.post(`${config.API_BASE_URL}/api/admin/update_overview/${id}`, formData, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });
  //     alert(response.data.message);
  //   } catch (error) {
  //     console.error('Error updating overview:', error.message);
  //     alert('Failed to update details. Please try again.');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('tripName', tripName);
    formData.append('trip_heading', tripHeading);
    formData.append('trip_para', tripPara);

    // Append main images and their details
    images.forEach((img, index) => {
        if (img.file) {
            formData.append(`img${index + 1}`, img.file); // Append the new file if provided
        }
        formData.append(`img_head${index + 1}`, img.head); // Append updated heading
        formData.append(`img_para${index + 1}`, img.para); // Append updated description
    });

    // Append new gallery images
    galleryImages.forEach((image, index) => {
        if (image.file) {
            formData.append(`gall_${index}`, image.file);
        }
    });

    // Append removed gallery images
    formData.append('removeGall', JSON.stringify(removedImages));

    try {
        const response = await axios.post(`${config.API_BASE_URL}/api/admin/update_overview/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert(response.data.message);
        navigate('/admin/overview'); // Redirect after success
    } catch (error) {
        console.error('Error updating overview:', error.message);
        alert('Failed to update details. Please try again.');
    }
};



  return (
    <div className="container mt-4">
      <h1>Edit Trip Overview</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Trip Name</label>
          <input
            type="text"
            className="form-control"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Trip Heading</label>
          <input
            type="text"
            className="form-control"
            value={tripHeading}
            onChange={(e) => setTripHeading(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Trip Description</label>
          <textarea
            className="form-control"
            rows="4"
            value={tripPara}
            onChange={(e) => setTripPara(e.target.value)}
          ></textarea>
        </div>

        {images.map((img, index) => (
          <div key={index} className="mb-4">
            <h5>Image {index + 1}</h5>
            <div className="mb-3">
              <label className="form-label">Current Image</label>
              <div>
                <img
                  src={img.preview || `${config.API_BASE_URL}/${img.url}`}
                  alt={`Image ${index + 1}`}
                  style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                />
              </div>
              <input
                type="file"
                className="form-control"
                onChange={(e) => handleImageChange(index, e.target.files[0])}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image Heading</label>
              <input
                type="text"
                className="form-control"
                value={img.head}
                onChange={(e) => {
                  const updatedImages = [...images];
                  updatedImages[index].head = e.target.value;
                  setImages(updatedImages);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image Description</label>
              <textarea
                className="form-control"
                rows="2"
                value={img.para}
                onChange={(e) => {
                  const updatedImages = [...images];
                  updatedImages[index].para = e.target.value;
                  setImages(updatedImages);
                }}
              ></textarea>
            </div>
          </div>
        ))}

        {/* Gallery Images */}
        <div className="mb-4">
          <h5>Gallery Images</h5>
          {galleryImages.map((image, index) => (
            <div key={index} className="mb-3">
              <img
                src={image.preview || `${config.API_BASE_URL}/${image.url}`}
                alt={`Image ${index + 1}`}
                style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
              />
              <input
                type="file"
                className="form-control"
                onChange={(e) => handleGalleryImageChange(index, e.target.files[0])}
              />
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => removeGalleryImage(index)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={addGalleryImage}>
            Add More Gallery Images
          </button>
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Admin_Edit_Overview;