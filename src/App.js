// import './App.css';
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
import PageTracker from './Components/PageTracker';
import MyAffiliate from './Affiliate/MyAffiliate';
import AdminLogin from './Admin/AdminLogin';
import Admin_Layout from './Admin/Admin_Layout';
import Admin_Dashborad from './Admin/Admin_Dashborad';
import Admin_Level from './Admin/Admin_Level';
import Admin_Add_Level from './Admin/Admin_Add_Level';
import Admin_DateRange from './Admin/Admin_DateRange';
import Admin_Add_DateRange from './Admin/Admin_Add_DateRange';
import Admin_Edit_DateRange from './Admin/Admin_Edit_DateRange';
import Admin_Room from './Admin/Admin_Room';
import Admin_Add_Room from './Admin/Admin_Add_Room';
import Admin_Edit_Room from './Admin/Admin_Edit_Room';
import Admin_Activity from './Admin/Admin_Activity';
import Admin_Add_Activity from './Admin/Admin_Add_Activity';
import Admin_Edit_Activity from './Admin/Admin_Edit_Activity';
import Admin_Coupon from './Admin/Admin_Coupon';
import Admin_Add_Coupon from './Admin/Admin_Add_Coupon';
import Admin_Edit_Coupon from './Admin/Admin_Edit_Coupon';
import EditAffiliate from './Affiliate/EditAffiliate';
import NewCreative from './Affiliate/NewCreative';
import Admin_TripLink from './Admin/Admin_TripLink';
import Calendar from './Pages/Calendar/Calendar';
import Admin_Add_TripLink from './Admin/Admin_Add_TripLink';
import Admin_Edit_TripLink from './Admin/Admin_Edit_TripLink';
import Admin_Overview from './Admin/Admin_Overview';
import Admin_Edit_Overview from './Admin/Admin_Edit_Overview';
import Admin_Kitespot from './Admin/Admin_Kitespot';
import Admin_Edit_Kitespots from './Admin/Admin_Edit_Kitespots';
import Admin_Accommodation from './Admin/Admin_Accommodation';
import Admin_Edit_Accommodation from './Admin/Admin_Edit_Accommodation';
import Admin_Myteam from './Admin/Admin_Myteam';
import Admin_Edit_Myteam from './Admin/Admin_Edit_Myteam';
import Kitemember from './Pages/Kiteactiveteam/Kitemember';
import Admin_Hosted from './Admin/Admin_Hosted';
import Admin_Package from './Admin/Admin_Package';
import Admin_Add_Package from './Admin/Admin_Add_Package';
import Admin_Edit_Package from './Admin/Admin_Edit_Package';
import Admin_Included from './Admin/Admin_Included';
import Admin_Add_Included from './Admin/Admin_Add_Included';
import Admin_Edit_Included from './Admin/Admin_Edit_Included';
import Admin_ActivityTab from './Admin/Admin_ActivityTab';
import Admin_Add_ActivityTab from './Admin/Admin_Add_ActivityTab';
import Admin_Videosection from './Admin/Admin_Videosection';
import Admin_Home from './Admin/Admin_Home';

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <PageTracker>
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

            <Route path='/calendar' element={
              <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
                <Calendar />
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

            <Route path='/Kiteactive_Team/:id' element={
              <KiteLayout selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}>
                {/* <Kiteactiveteam /> */}
                <Kitemember />
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


            <Route path='/:trip_name/checkout/form' element={
              <Formlayout>
                <Levels />
              </Formlayout>
            } />
            <Route path="/:tripName/checkout/datepicker" element={
              <Formlayout>
                <Datepicker />
              </Formlayout>
            } />
            <Route path="/:tripName/checkout/room" element={
              <>
                <Formlayout>
                  <Room />
                </Formlayout>
              </>
            } />
            <Route path="/:tripName/checkout/activity" element={
              <>
                <Formlayout>
                  <Activity />
                </Formlayout>
              </>
            } />
            <Route path="/:tripName/checkout/checkout" element={
              <>
                <Formlayout>
                  <Checkout />
                </Formlayout>
              </>
            } />
            <Route path="/:tripName/checkout/userinfo" element={
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

            <Route path="/my_affiliate" element={
              <Aff_Layout>
                <MyAffiliate />
              </Aff_Layout>
            } />

            <Route path="/new_affiliate" element={
              <Aff_Layout>
                <NewAffiliate />
              </Aff_Layout>
            } />

            <Route path="/edit_affiliate/:id" element={
              <Aff_Layout>
                <EditAffiliate />
              </Aff_Layout>
            } />

            <Route path="/myCreative" element={
              <Aff_Layout>
                <MyCreative />
              </Aff_Layout>
            } />

            <Route path="/newCreative" element={
              <Aff_Layout>
                <NewCreative />
              </Aff_Layout>
            } />


            <Route path="/admin" element={
              <>
                <AdminLogin />
              </>
            } />

            <Route path="/admin/triplink" element={
              <Admin_Layout>
                <Admin_TripLink />
              </Admin_Layout>
            } />

            <Route path="/admin/add/triplink" element={
              <Admin_Layout>
                <Admin_Add_TripLink />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/triplink/:id" element={
              <Admin_Layout>
                <Admin_Edit_TripLink />
              </Admin_Layout>
            } />

            <Route path="/admin/myteam" element={
              <Admin_Layout>
                <Admin_Myteam />
              </Admin_Layout>
            } />

            <Route path="/admin/home" element={
              <Admin_Layout>
                <Admin_Home />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/myteam/:id" element={
              <Admin_Layout>
                <Admin_Edit_Myteam />
              </Admin_Layout>
            } />

            <Route path="/admin/overview" element={
              <Admin_Layout>
                <Admin_Overview />
              </Admin_Layout>
            } />

            <Route path="/admin/videosection" element={
              <Admin_Layout>
                <Admin_Videosection />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/overview/:id" element={
              <Admin_Layout>
                <Admin_Edit_Overview />
              </Admin_Layout>
            } />

            <Route path="/admin/kitespot" element={
              <Admin_Layout>
                <Admin_Kitespot />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/kitespot/:id" element={
              <Admin_Layout>
                <Admin_Edit_Kitespots/>
              </Admin_Layout>
            } />

            <Route path="/admin/accommodation" element={
              <Admin_Layout>
                <Admin_Accommodation />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/accommodation/:id" element={
              <Admin_Layout>
                <Admin_Edit_Accommodation />
              </Admin_Layout>
            } />

            <Route path="/admin/hosted" element={
              <Admin_Layout>
                <Admin_Hosted />
              </Admin_Layout>
            } />

            <Route path="/admin/packages" element={
              <Admin_Layout>
                <Admin_Package />
              </Admin_Layout>
            } />

            <Route path="/admin/add/packages" element={
              <Admin_Layout>
                <Admin_Add_Package />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/packages/:id" element={
              <Admin_Layout>
                <Admin_Edit_Package />
              </Admin_Layout>
            } />

            <Route path="/admin/included" element={
              <Admin_Layout>
                <Admin_Included />
              </Admin_Layout>
            } />

            <Route path="/admin/add/included" element={
              <Admin_Layout>
                <Admin_Add_Included />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/included/:id" element={
              <Admin_Layout>
                <Admin_Edit_Included />
              </Admin_Layout>
            } />

            <Route path="/admin/activitytab" element={
              <Admin_Layout>
                <Admin_ActivityTab />
              </Admin_Layout>
            } />

            <Route path="/admin/add/activitytab" element={
              <Admin_Layout>
                <Admin_Add_ActivityTab />
              </Admin_Layout>
            } />

            <Route path="/admin/dashboard" element={
              <Admin_Layout>
                <Admin_Dashborad />
              </Admin_Layout>
            } />

            <Route path="/admin/levels" element={
              <Admin_Layout>
                <Admin_Level />
              </Admin_Layout>
            } />

            <Route path="/admin/add/levels" element={
              <Admin_Layout>
                <Admin_Add_Level />
              </Admin_Layout>
            } />

            <Route path="/admin/dates" element={
              <Admin_Layout>
                <Admin_DateRange />
              </Admin_Layout>
            } />

            <Route path="/admin/add/dates" element={
              <Admin_Layout>
                <Admin_Add_DateRange />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/dates/:id" element={
              <Admin_Layout>
                <Admin_Edit_DateRange />
              </Admin_Layout>
            } />

            <Route path="/admin/room" element={
              <Admin_Layout>
                <Admin_Room />
              </Admin_Layout>
            } />

            <Route path="/admin/add/room" element={
              <Admin_Layout>
                <Admin_Add_Room />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/room/:id" element={
              <Admin_Layout>
                <Admin_Edit_Room />
              </Admin_Layout>
            } />

            <Route path="/admin/activity" element={
              <Admin_Layout>
                <Admin_Activity />
              </Admin_Layout>
            } />

            <Route path="/admin/add/activity" element={
              <Admin_Layout>
                <Admin_Add_Activity />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/activity/:id" element={
              <Admin_Layout>
                <Admin_Edit_Activity />
              </Admin_Layout>
            } />

            <Route path="/admin/coupon" element={
              <Admin_Layout>
                <Admin_Coupon />
              </Admin_Layout>
            } />

            <Route path="/admin/add/coupon" element={
              <Admin_Layout>
                <Admin_Add_Coupon />
              </Admin_Layout>
            } />

            <Route path="/admin/edit/coupon/:id" element={
              <Admin_Layout>
                <Admin_Edit_Coupon />
              </Admin_Layout>
            } />

          </Routes>
        </PageTracker>
      </BrowserRouter>
    </div>
  );
}

export default App;
