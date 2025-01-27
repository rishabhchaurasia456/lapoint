import React, { useRef, useEffect, useState } from 'react';
import './HeroSection.css';

// import vedio from '../../Images/Kiteactive-video1-1.mp4';
import bgcover from '../../Images/tripvedios/homecover.webp';
// import Searchfilter from '../SearchFilter/Searchfilter';

const HeroSection = ({ data, selectedLanguage }) => {
  // const content = {
  //   en: {
  //     title: 'Kiteactive - Surf Camps, Work & Surf, Yoga & Waves',
  //     subtitle: 'ADVENTURE AWAITS: DISCOVER THE WORLD',
  //   },
  //   gr: {
  //     title: 'Kiteactive - Surfcamps, Work & Surf, Yoga & Wellen',
  //     subtitle: 'ABENTEUER ERWARTET DICH: ENTDECKE DIE WELT',
  //   },
  //   du: {
  //     title: 'Kiteactive - Surfkampen, Werk & Surf, Yoga & Golven',
  //     subtitle: 'HET AVONTUUR WACHT: ONTDEK DE WERELD',
  //   },
  // };

  const [videoLoaded, setVideoLoaded] = useState(false);
  const containerRef = useRef(); // Use the containerRef to observe

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

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
      {/* {!videoLoaded && <img src={bgcover} alt="Loading..." className="background-image" />} */}
      {/* {/ Show image before video /} */}
      {data ? (
        <video
          autoPlay
          loop
          muted
          onLoadedData={handleVideoLoad}
          className="background-video"
          style={{ display: videoLoaded ? 'block' : 'none' }} // Hide video until it's loaded
        >
          <source src={data?.videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={bgcover} alt="Loading..." className="placeholder-image" />
      )}

      {/* {/ Other content /}  */}
      <div className="content">
        <p className="hero_heading1">{data?.subHeading}</p>
        <h1 className="hero_heading2">{data?.heading}</h1>
      </div>

    </div>
  );
};

export default HeroSection;