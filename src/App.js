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

// import AboutUs from './Pages/AboutUs';
// import FeedbackForm from './Pages/FeedbackForm';

import AutoSubmitRedirect from './LoginWithEpramaan/AutoSubmitRedirect';
import LoginPageWithEpramaan from './LoginWithEpramaan/LoginPageWithEpramaan';

const App = () => {
  <Router></Router>
  return (
    <>
      <Navbar />
      
      <div id="main-content">
        <Routes>
          <Route path="/intportal" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/websitepolicy" element={<WebsitePolicy />} />
          <Route path="/help" element={<Help />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/loginwithepramaan" element={<LoginPageWithEpramaan />} />
          <Route path="/login" element={<Login />} />
           <Route path="/autosubmit" element={<AutoSubmitRedirect />} />

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