import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Home/Blog';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Trip from './Pages/Trip/Trip';
import Aboutus from './Pages/About/Aboutus';
import Kitecamp from './Pages/Kitecamps/Kitecamp';
import Contactus from './Pages/Contactus/Contactus';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  return (
    <div>
      <BrowserRouter >
      <ScrollToTop/>
      <Navbar selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        <Routes>
          {/* Home page import  */}
          <Route path='/' element={<Home selectedLanguage={selectedLanguage} />}></Route>
          
          <Route path='/Blog' element={<Blog />}></Route>
          <Route path='/about' element={<Aboutus selectedLanguage={selectedLanguage}/>}></Route>
          <Route exact path="/trip/:trip_name" element={<Trip/>} />
          <Route path='/contact' element={<Contactus/>}></Route>



          {/* kite camp  all pages routes here  */}
          <Route path='/kitecamp' element={<Kitecamp/>}></Route>

        </Routes>
        <Footer selectedLanguage={ selectedLanguage }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
