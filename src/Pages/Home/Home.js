import React from 'react'
import Surfcamp from '../../Components/Surfcamp/Surfcamp'
import LIfeStyle from '../../Components/Lifestyle/LIfeStyle'
import Surfcampslider from '../../Components/Surfcampslider/Surfcampslider'
import CampReview from '../../Components/CampReview/CampReview'
import European from '../../Components/European/European'
import LIfeStyle2 from '../../Components/Lifestyle/LIfeStyle2'
import Activity from '../../Components/Activity/Activity'
import Adventure from '../../Components/Adventure/Adventure'
// import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>

    <Surfcamp/>
    <Surfcampslider/>
    <CampReview/>
    <LIfeStyle/>
    <European/>
    <LIfeStyle2/>  
    <Activity/>
    <Adventure/>
    {/* <Footer/> */}
    </div>
  )
}

export default Home
