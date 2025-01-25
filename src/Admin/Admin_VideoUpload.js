// import React, { useState } from 'react';
// import axios from 'axios';

// const Admin_VideoUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [videoLink, setVideoLink] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert('Please select a video to upload');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('video', selectedFile);

//     try {
//       const response = await axios.post('http://localhost:5500/api/videos/upload-video', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setVideoLink(response.data.videoUrl);
//     } catch (error) {
//       console.error('Error uploading video:', error);
//       alert('Failed to upload video');
//     }
//   };

//   return (
//     <div className="video-upload">
//       <h2>Upload a Video</h2>
//       <input type="file" accept="video/*" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Video</button>

//       {videoLink && (
//         <div>
//           <h3>Video Uploaded Successfully!</h3>
//           <p>
//             <a href={videoLink} target="_blank" rel="noopener noreferrer">
//               {videoLink}
//             </a>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Admin_VideoUpload;





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin_VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoLink, setVideoLink] = useState('');
  const [videoList, setVideoList] = useState([]); // To store all saved links

  // Fetch all video links from the database
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/videos/getvedio');
        setVideoList(response.data); // Set the list of videos from the database
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Handle file input change
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a video to upload');
      return;
    }

    const formData = new FormData();
    formData.append('video', selectedFile);

    try {
      const response = await axios.post('http://localhost:5500/api/videos/upload-video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setVideoLink(response.data.video.videoUrl); // Set the uploaded video link
      alert('Video uploaded successfully!');

      // Update the list of videos after upload
      setVideoList((prevList) => [...prevList, response.data.video]);
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Failed to upload video');
    }
  };

  return (
    <div className="video-upload">
      <h2>Upload a Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>

      {videoLink && (
        <div>
          <h3>Video Uploaded Successfully!</h3>
          <p>
            <a href={videoLink} target="_blank" rel="noopener noreferrer">
              {videoLink}
            </a>
          </p>
        </div>
      )}

      <div className="video-list">
        <h3>Saved Videos</h3>
        {videoList.length > 0 ? (
          <ul>
            {videoList.map((video) => (
              <li key={video._id}>
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                  {video.videoUrl}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </div>
  );
};

export default Admin_VideoUpload;
