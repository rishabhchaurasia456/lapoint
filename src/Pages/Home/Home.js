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
import Adventure from '../../Components/Adventure/Adventure'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Footer from '../../Components/Footer/Footer'
import Elementcomp from '../../Components/Elementcomp/Elementcomp'
import Level from '../../Components/Level/Level'

const Home = ({selectedLanguage}) => {
  return (
    <div>
      <Helmet>
        <title>KiteActive</title>
        <meta name="description" content="This is the home page of your website where you can find information about surfcamps, lifestyle, and more." />
        <meta name="keywords" content="surfcamp, lifestyle, adventure, activities, reviews" />
        <link rel="canonical" href="https://danstring.co.in/kiteactive/" />
      </Helmet>

      <HeroSection selectedLanguage={ selectedLanguage }/>
      <Surfcamp selectedLanguage={ selectedLanguage }/>
      <Surfcampslider selectedLanguage={ selectedLanguage }/>
      <CampReview selectedLanguage={ selectedLanguage }/>
      <Level selectedLanguage={ selectedLanguage }/>
      <LIfeStyle selectedLanguage={ selectedLanguage }/>
      <Elementcomp selectedLanguage={ selectedLanguage }/>
      {/* <European /> */}
      {/* <LIfeStyle2 /> */}
      <Faq selectedLanguage={ selectedLanguage }/>
      <Activity selectedLanguage={ selectedLanguage }/>
      <Adventure selectedLanguage={ selectedLanguage }/>
      <Textcontainer selectedLanguage={ selectedLanguage }/>
      <Bgimage selectedLanguage={ selectedLanguage }/>
      <Footer selectedLanguage={ selectedLanguage }/>
    </div>
  )
}

export default Home
