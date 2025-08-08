import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import QuickLinkFooter from './Component/QuickLinkFooter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import WebsitePolicy from './Pages/WebsitePolicy';
import Help from './Pages/Help';
import SiteMap from './Pages/SiteMap';
import ContactUs from './Pages/ContactUs'

import AboutUs from './Pages/AboutUs';
import FeedbackForm from './Pages/FeedbackForm';

import AutoSubmitRedirect from './LoginWithEpramaan/AutoSubmitRedirect';
import LoginPageWithEpramaan from './LoginWithEpramaan/LoginPageWithEpramaan';
import HomeAfterLogin from './Pages/HomeAfterLogin'

const App = () => {
  <Router></Router>
  return (
    <>
      <Navbar />

      {/* <Home /> */}
      {/* <SelectActionCard/> */}


      <Routes>

        {/* <Routes>

        <Route path="/intportal" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/loginwithepramaan" element={<LoginPageWithEpramaan />} />

        <Route path="/login" element={<Login />} />

        <Route path="/autosubmit" element={<AutoSubmitRedirect />} />

        {/* <Route path="/aboutus" element={<AboutUs/>}/> */}

        {/* Add other routes as needed */}
      </Routes>


      <div id="main-content">
        <Routes>
          <Route path="/intportal1" element={<Home />} />
<Route path="/intportal" element={<HomeAfterLogin />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/websitepolicy" element={<WebsitePolicy />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/help" element={<Help />} />
          <Route path="/loginwithepramaan" element={<LoginPageWithEpramaan />} />

          <Route path="/intportal/contact" element={<ContactUs />} />
          <Route path="/intportal/websitepolicy" element={<WebsitePolicy />} />
          <Route path="/intportal/help" element={<Help />} />
          <Route path="/intportal/sitemap" element={<SiteMap />} />
          {/* <Route path="/intportal/login" element={<Login />} /> */}
          <Route path="/intportal/login" element={<LoginPageWithEpramaan />} />

          <Route path="/intportal/autosubmit" element={<AutoSubmitRedirect />} />
          <Route path="/intportal/loginwithepramaan" element={<LoginPageWithEpramaan />} />


          {/* Add other routes as needed */}

          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          {/* <Route path="/feedback" element={<FeedbackForm />} /> */}

        </Routes>
      </div>


      <Footer />
      <QuickLinkFooter />


     

    </>
  );
};
export default App;