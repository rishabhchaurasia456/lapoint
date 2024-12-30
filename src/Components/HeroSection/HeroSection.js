import React, { useRef, useEffect, useState } from 'react';
import './HeroSection.css';

import vedio from '../../Images/Kiteactive-video1-1.mp4';
import bgcover from '../../Images/tripvedios/homecover.webp';
import Searchfilter from '../SearchFilter/Searchfilter';

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


      <div className='search_filter_herosection'>
        <Searchfilter />
      </div>




    </div>
  );
};

export default HeroSection;