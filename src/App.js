import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Home/Blog';
import { useState } from 'react';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  return (
    <div>
      <BrowserRouter >
      <Navbar selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        <Routes>
          {/* Home page import  */}
          <Route path='kiteactive/' element={<Home selectedLanguage={selectedLanguage} />}></Route>
          
          <Route path='kiteactive/Blog' element={<Blog />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
