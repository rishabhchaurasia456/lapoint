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

import Stories from './Pages/Stories/Stories';
import School from './Pages/School/School';
import Discoverkiteactive from './Pages/Discoverkite/Discoverkiteactive';
import Kiteactiveteam from './Pages/Kiteactiveteam/Kiteactiveteam';
import Becomepartner from './Pages/Becomaparter/Becomepartner';
import Dentvtas from './Pages/Stories/Storiespage/Dentvtas';
import Teamrider from './Pages/Stories/Storiespage/Teamrider';
import Downwinders from './Pages/Stories/Storiespage/Downwinders';
import Whyzanzibar from './Pages/Stories/Storiespage/Whyzanzibar';
import Kitegear from './Pages/Stories/Storiespage/Kitegear';
import Thankyou from './Form/Thankyou'
import BookingPayment from './Pages/Bookingpayment/BookingPayment';
import PrivacyPolicy from './Pages/Privacypolicy/PrivacyPolicy';
import Termcondition from './Pages/Termcondition/Termcondition';
import Annemaj from './Pages/Kiteactiveteam/Teammembers/Annemaj';
import Felix from './Pages/Kiteactiveteam/Teammembers/Felix';
import Roderick from './Pages/Kiteactiveteam/Teammembers/Roderick';
import Aj from './Pages/Kiteactiveteam/Teammembers/Aj';
import Arnaud from './Pages/Kiteactiveteam/Teammembers/Arnaud';
import Boaz from './Pages/Kiteactiveteam/Teammembers/Boaz';
import Basboode from './Pages/Kiteactiveteam/Teammembers/Basboode';
import Emielrense from './Pages/Kiteactiveteam/Teammembers/Emielrense';
import Jurretvan from './Pages/Kiteactiveteam/Teammembers/Jurretvan';

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
          <Route path='/School' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <School selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />

          <Route path='/stories' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Stories selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />


          {/* stories inner pages ------------------------------------ */}

          <Route path='/den-tv-tas' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Dentvtas selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />

          <Route path='/teamrider' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Teamrider selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />


          <Route path='/DownWinder' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Downwinders selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />

          <Route path='/WhyZanzibar' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Whyzanzibar selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />

          <Route path='/kiteGear' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Kitegear selectedLanguage={selectedLanguage} />
            </KiteLayout>
          } />






          {/* kite camp  all pages routes here  */}
          <Route path='/kitecamp' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Kitecamp />
            </KiteLayout>
          }>
          </Route>

          <Route path='/thankyou' element={
            <Formlayout>
              <Thankyou />
            </Formlayout>
          } />


          {/* ---------------------------------------- */}
          {/* footer pages links here */}
          {/* ---------------------------------------- */}

          <Route path='/Discover_Kiteactive' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Discoverkiteactive />
            </KiteLayout>
          }>
          </Route>


          <Route path='/Kiteactive_Team' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Kiteactiveteam />
            </KiteLayout>
          }>
          </Route>

          {/* ----------------------ALL TEAM MEMBERS pages------------------------------  */}

          <Route path='/Annemaj' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Annemaj />
            </KiteLayout>
          }>
          </Route>


          <Route path='/Felix_Maks' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Felix />
            </KiteLayout>
          }>
          </Route>


          <Route path='/Roderickje_Pijls' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Roderick />
            </KiteLayout>
          }>
          </Route>

          <Route path='/aj' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Aj />
            </KiteLayout>
          }>

          </Route>
          <Route path='/Arnaud_Plas' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Arnaud />
            </KiteLayout>
          }>
          </Route>
          <Route path='/Boaz_Oketch' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Boaz />
            </KiteLayout>
          }>
          </Route>
          <Route path='/Bas_Boode' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Basboode />
            </KiteLayout>
          }>
          </Route>

          <Route path='/EmielRense' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Emielrense />
            </KiteLayout>
          }>
          </Route>
          <Route path='/Jurret_Van' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Jurretvan />
            </KiteLayout>
          }>
          </Route>






          {/* ------------------------------------------ */}


          <Route path='/Become_Partner' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Becomepartner />
            </KiteLayout>
          }>
          </Route>

          <Route path='/Booking_Payment' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <BookingPayment />
            </KiteLayout>
          }>
          </Route>


          <Route path='/PrivacyPolicy' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <PrivacyPolicy />
            </KiteLayout>
          }>
          </Route>

          <Route path='/Term_Condition' element={
            <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
              <Termcondition />
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
