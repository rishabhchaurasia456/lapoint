import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Home/Blog';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Trip from './Pages/Trip/Trip';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  return (
    <div>
      <BrowserRouter >
      <Navbar selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        <Routes>
          {/* Home page import  */}
          <Route path='/' element={<Home selectedLanguage={selectedLanguage} />}></Route>
          
          <Route path='/Blog' element={<Blog />}></Route>
          <Route path='/trip' element={<Trip/>}></Route>

        </Routes>
        <Footer selectedLanguage={ selectedLanguage }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
