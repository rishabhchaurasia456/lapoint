import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import { useState } from 'react';
import Trip from './Pages/Trip/Trip';
import Aboutus from './Pages/About/Aboutus';
import Kitecamp from './Pages/Kitecamps/Kitecamp';
import Contactus from './Pages/Contactus/Contactus';
import ScrollToTop from './Components/ScrollToTop';
import Levels from './Form/Levels';
import Datepicker from './Form/Datepicker';
import Room from './Form/Room';
import Activity from './Form/Activity';
import Checkout from './Form/Checkout';
import Userinfo from './Form/Userinfo';
import KiteLayout from './Pages/kiteLayout';
import Aff_Layout from './Affiliate/Aff_Layout';
import Aff_Dashboard from './Affiliate/Aff_Dashboard';
import NewAffiliate from './Affiliate/NewAffiliate';
import MyCreative from './Affiliate/MyCreative';
import Formlayout from './Form/Formlayout';

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Home selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />

          <Route path='/about' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Aboutus selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />

          <Route exact path="/trip/:trip_name" element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Trip selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />

          <Route path='/contact' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Contactus selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />

          {/* kite camp  all pages routes here  */}
          <Route path='/kitecamp' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Kitecamp />
            </KiteLayout>
          }>

          </Route>

          <Route path='/form' element={
            <Formlayout>
              <Levels />
            </Formlayout>
          } />
          <Route path="/datepicker" element={
            <Formlayout>
              <Datepicker />
            </Formlayout>
          } />
          <Route path="/room" element={
            <>
              <Formlayout>
                <Room />
              </Formlayout>
            </>
          } />
          <Route path="/activity" element={
            <>
              <Formlayout>
                <Activity />
              </Formlayout>
            </>
          } />
          <Route path="/checkout" element={
            <>
              <Formlayout>
                <Checkout />
              </Formlayout>
            </>
          } />
          <Route path="/userinfo" element={
            <>
              <Formlayout>
                <Userinfo />
              </Formlayout>
            </>
          } />

          <Route path="/affiliate_admin" element={
            <Aff_Layout>
              <Aff_Dashboard />
            </Aff_Layout>
          } />

          <Route path="/new_affiliate" element={
            <Aff_Layout>
              <NewAffiliate />
            </Aff_Layout>
          } />

          <Route path="/myCreative" element={
            <Aff_Layout>
              <MyCreative />
            </Aff_Layout>
          } />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
