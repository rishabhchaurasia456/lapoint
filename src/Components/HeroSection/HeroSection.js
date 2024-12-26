import React, { useRef, useEffect, useState } from 'react';
import './HeroSection.css';

import vedio from '../../Images/Kiteactive-video1-1.mp4';
import bgcover from '../../Images/tripvedios/homecover.webp';

const HeroSection = ({ selectedLanguage }) => {
  const content = {
    en: {
      title: 'Kiteactive - Surf Camps, Work & Surf, Yoga & Waves',
      subtitle: 'ADVENTURE AWAITS: DISCOVER THE WORLD',
    },
    gr: {
      title: 'Kiteactive - Surfcamps, Work & Surf, Yoga & Wellen',
      subtitle: 'ABENTEUER ERWARTET DICH: ENTDECKE DIE WELT',
    },
    du: {
      title: 'Kiteactive - Surfkampen, Werk & Surf, Yoga & Golven',
      subtitle: 'HET AVONTUUR WACHT: ONTDEK DE WERELD',
    },
  };

  const [videoLoaded, setVideoLoaded] = useState(false);
  const containerRef = useRef(); // Use the containerRef to observe

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVideoLoaded(true); // Load the video when the container becomes visible
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="video-container">
      {!videoLoaded && <img src={bgcover} alt="Loading..." className="background-image" />}
      {/* {/ Show image before video /} */}
      {videoLoaded && (
        <video
          autoPlay
          loop
          muted
          className="background-video"
          style={{ display: videoLoaded ? 'block' : 'none' }} // Hide video until it's loaded
        >
          <source src={vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* {/ Other content /}  */}
      <div className="content">
        <p className="hero_heading1">{content[selectedLanguage].title}</p>
        <h1 className="hero_heading2">{content[selectedLanguage].subtitle}</h1>
      </div>


      <div className="container">
        <div className="row">
          <div className="col">
            <div className="select_box_div">
              <div className="inputbox_row d-flex justify-content-center align-items-center">
                <div className="col mat-input d-flex  justify-content-center">
                  <select className="form-select w-50">
                    <option value="">Any Time</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>


                  <select className="form-select w-50">
                    <option value="">Choose Style</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Beginner paradise">Beginner paradise</option>
                    <option value="Weekender">Weekender</option>
                    <option value="Featured">Featured</option>
                  </select>
                </div>
                <button className="searchbtn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default HeroSection;