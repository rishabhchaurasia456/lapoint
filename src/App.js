import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Home/Blog';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Routes>
          {/* Home page import  */}
          <Route path='kiteactive/' element={<Home />}></Route> 

          <Route path='kiteactive/Blog' element={<Blog />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
