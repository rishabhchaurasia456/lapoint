import React from 'react'
import Surfcamp from '../../Components/Surfcamp/Surfcamp'
import LIfeStyle from '../../Components/Lifestyle/LIfeStyle'
import Surfcampslider from '../../Components/Surfcampslider/Surfcampslider'
import CampReview from '../../Components/CampReview/CampReview'
import European from '../../Components/European/European'
import Faq from '../../Components/Faq/Faq'
import Textcontainer from '../../Components/Textcontainer/Textcontainer'
import Bgimage from '../../Components/Bgimage/Bgimage'
import LIfeStyle2 from '../../Components/Lifestyle/LIfeStyle2'
import Activity from '../../Components/Activity/Activity'
import Adventure from '../../Components/Adventure/Adventure'
import HeroSection from '../../Components/HeroSection/HeroSection'
// import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>


      {/* all Home page Component import here  */}
      <HeroSection />
      <Surfcamp />
      <Surfcampslider />
      <CampReview />
      <LIfeStyle />
      <European />
      <LIfeStyle2 />
      <Faq />
      <Activity />
      <Adventure />
      <Textcontainer />
      <Bgimage />


      {/* <Footer/> */}
    </div>
  )
}

export default Home
