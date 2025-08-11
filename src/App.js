import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import QuickLinkFooter from './Component/QuickLinkFooter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsitePolicy from './Pages/WebsitePolicy';
import Help from './Pages/Help';
import SiteMap from './Pages/SiteMap';
import ContactUs from './Pages/ContactUs'
import AutoSubmitRedirect from './LoginWithEpramaan/AutoSubmitRedirect';
import LoginPageWithEpramaan from './LoginWithEpramaan/LoginPageWithEpramaan';
import { useState } from 'react';
const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  <Router></Router>
  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div id="main-content">
        <Routes>
          <Route path="/intportal" element={<Home isAuthenticated={isAuthenticated}/>} />
          <Route path="/intportal/contact" element={<ContactUs />} />
          <Route path="/intportal/websitepolicy" element={<WebsitePolicy />} />
          <Route path="/intportal/help" element={<Help />} />
          <Route path="/intportal/sitemap" element={<SiteMap />} />
          <Route path="/intportal/autosubmit" element={<AutoSubmitRedirect />} />
          <Route path="/intportal/loginwithepramaan" element={<LoginPageWithEpramaan />} />



           {/* <Route path="/" element={<Home isAuthenticated={isAuthenticated}/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/websitepolicy" element={<WebsitePolicy />} />
          <Route path="/help" element={<Help />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/autosubmit" element={<AutoSubmitRedirect />} />
          <Route path="/loginwithepramaan" element={<LoginPageWithEpramaan />} /> */}
          {/* Add other routes as needed */}

          {/* <Route path="/loginwithepramaan" element={<LoginPageWithEpramaan />} /> */}
        </Routes>
      </div>
          <Footer/>
      <QuickLinkFooter/>
    </>
  );
};
export default App;