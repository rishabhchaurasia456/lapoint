import React from 'react'
import Surfcamp from '../../Components/Surfcamp/Surfcamp'
import LIfeStyle from '../../Components/Lifestyle/LIfeStyle'
import Surfcampslider from '../../Components/Surfcampslider/Surfcampslider'
import CampReview from '../../Components/CampReview/CampReview'
import European from '../../Components/European/European'
import Faq from '../../Components/Faq/Faq'
import Textcontainer from '../../Components/Textcontainer/Textcontainer'
import Bgimage from '../../Components/Bgimage/Bgimage'

const Home = () => {
  return (
    <div>

    <Surfcamp/>
    <Surfcampslider/>
    <CampReview/>
    <LIfeStyle/>
    <European/>
    <Faq/>
    <Textcontainer/>   
    <Bgimage/>


    </div>
  )
}

export default Home
