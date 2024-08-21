import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
