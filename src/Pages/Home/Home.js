import React from 'react'
import { Helmet } from 'react-helmet'
import Surfcamp from '../../Components/Surfcamp/Surfcamp'
import LIfeStyle from '../../Components/Lifestyle/LIfeStyle'
import Surfcampslider from '../../Components/Surfcampslider/Surfcampslider'
import CampReview from '../../Components/CampReview/CampReview'
// import European from '../../Components/European/European'
import Faq from '../../Components/Faq/Faq'
import Textcontainer from '../../Components/Textcontainer/Textcontainer'
import Bgimage from '../../Components/Bgimage/Bgimage'
// import LIfeStyle2 from '../../Components/Lifestyle/LIfeStyle2'
import Activity from '../../Components/Activity/Activity'
// import Adventure from '../../Components/Adventure/Adventure'
import HeroSection from '../../Components/HeroSection/HeroSection'
// import Footer from '../../Components/Footer/Footer'
import Elementcomp from '../../Components/Elementcomp/Elementcomp'
import Level from '../../Components/Level/Level'

const Home = ({ selectedLanguage }) => {
  return (
    <div>

 {/* for home page seo  */}
 
      <Helmet>
        <title>Kitesurf Holidays - Adventurous Kitesurf Trips | KiteActive </title>

        <meta name="description" content="Discover the perfect kitesurf holiday with KiteActive! Enjoy top destinations worldwide, with kite surfing lessons & coaching. Book your adventurous kite trip." />

        <meta name="keywords" content="kite surfing, kitesurfing trips, kitesurf spots, kite surfing lessons, kitesurfing lessons worldwide, kitesurf vacation, kite travel, kitesurf holiday" />

        <link rel="canonical" href="https://kiteactiveventures.com/" />
      </Helmet>






      {/* all home page Components section import here  */}



      <HeroSection selectedLanguage={selectedLanguage} />
      <Surfcamp selectedLanguage={selectedLanguage} />
      <Surfcampslider selectedLanguage={selectedLanguage} />
      <CampReview selectedLanguage={selectedLanguage} />
      <Level selectedLanguage={selectedLanguage} />
      <LIfeStyle selectedLanguage={selectedLanguage} />
      <Elementcomp selectedLanguage={selectedLanguage} />
      {/* <European /> */}
      {/* <LIfeStyle2 /> */}
      <Faq selectedLanguage={selectedLanguage} />
      <Activity selectedLanguage={selectedLanguage} />
      {/* <Adventure selectedLanguage={ selectedLanguage }/> */}
      <Textcontainer selectedLanguage={selectedLanguage} />
      <Bgimage selectedLanguage={selectedLanguage} />
      {/* <Footer selectedLanguage={ selectedLanguage }/> */}
    </div>
  )
}

export default Home
