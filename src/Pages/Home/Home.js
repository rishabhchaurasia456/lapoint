import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet'
import HeroSection from '../../Components/HeroSection/HeroSection'
import LIfeStyle from '../../Components/Lifestyle/LIfeStyle'
import Surfcampslider from '../../Components/Surfcampslider/Surfcampslider'
import CampReview from '../../Components/CampReview/CampReview'
// import Faq from '../../Components/Faq/Faq'
import Elementcomp from '../../Components/Elementcomp/Elementcomp'
import Level from '../../Components/Level/Level'
import Fourcard from '../../Components/fourcardsec/Fourcard';
import Bgdark from '../../Components/Bgdarksec/Bgdark';
import Whykiteactive from '../../Components/Whykiteactive/Whykiteactive';
import config from '../../config/config';
import axios from 'axios';



const Home = ({ selectedLanguage }) => {
  // const HeroSection = React.lazy(() => import('../../Components/HeroSection/HeroSection'));

  const [homeData, setHomeData] = useState(null)
  useEffect(() => {
    axios
      .post(`${config.API_BASE_URL}/api/admin/get_home`)
      .then((response) => {
        setHomeData(response.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // console.log("homeData", homeData)
  return (
    <div>
      {/* for home page seo  */}


      <Helmet>
        <title>Kitesurf Holidays - Adventurous Kitesurf Trips | KiteActive </title>

        <meta name="description" content="Discover the perfect kitesurf holiday with KiteActive! Enjoy top destinations worldwide, with kite surfing lessons & coaching. Book your adventurous kite trip." />

        <meta name="keywords" content="kite surfing, kitesurfing trips, kitesurf spots, kite surfing lessons, kitesurfing lessons worldwide, kitesurf vacation, kite travel, kitesurf holiday" />
        <link rel="icon" href="./logo192.png" />
        <link rel="icon" href="./logo512.png" />
        <link rel="canonical" href="https://kiteactiveventures.com/" />
      </Helmet>



      {/* all home page Components section import here  */}

      <div>
        {/* Use Suspense to handle the lazy loading */}
        {/* <Suspense fallback={<div>Loading...</div>}>
        <HeroSection selectedLanguage={selectedLanguage} />
      </Suspense> */}
      </div>

      <HeroSection data={homeData} selectedLanguage={selectedLanguage} />
      <Fourcard data={homeData} selectedLanguage={selectedLanguage} />
      {/* <Surfcamp selectedLanguage={selectedLanguage} /> */}
      <Surfcampslider data={homeData} selectedLanguage={selectedLanguage} />
      <Bgdark data={homeData} />
      <CampReview selectedLanguage={selectedLanguage} />
      <Whykiteactive data={homeData} />
      <Level selectedLanguage={selectedLanguage} />
      <Elementcomp data={homeData} selectedLanguage={selectedLanguage} />
      <LIfeStyle data={homeData} selectedLanguage={selectedLanguage} />
      {/* <Faq selectedLanguage={selectedLanguage} /> */}

    </div>
  )
}

export default Home
