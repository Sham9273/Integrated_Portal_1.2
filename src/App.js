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
import { useState,useEffect } from 'react';
import ErrorPage from './Pages/ErrorPage'
import BaseLocal from './URLS/BaseLocal';
const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
  const clientId = localStorage.getItem("clientId"); // store on login

  const interval = setInterval(() => {
    fetch(BaseLocal+`checkLogoutStatus?clientId=${clientId}`)
      .then(res => res.json())
      .then(data => {
        if (data.logout) {
          // perform logout
          console.log("--check braodcast:--"+data.logout)
          localStorage.clear();
          sessionStorage.clear();
          // 🔥 Clear cookies (frontend side only)
        document.cookie.split(";").forEach(c => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
          window.location.href = "/intportal";
        }
      })
      .catch(err => console.error("Error checking logout:", err));
  }, 5000); // check every 5 seconds

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div id="main-content">
        <Routes>
          <Route path="/intportal" element={<Home isAuthenticated={isAuthenticated} />} />
          <Route path="/intportal/contact" element={<ContactUs />} />
          <Route path="/intportal/websitepolicy" element={<WebsitePolicy />} />
          <Route path="/intportal/help" element={<Help />} />
          <Route path="/intportal/sitemap" element={<SiteMap />} />
          <Route path="/intportal/autosubmit" element={<AutoSubmitRedirect />} />
          <Route path="/intportal/loginwithepramaan" element={<LoginPageWithEpramaan />} />
          <Route path="*" element={<ErrorPage />} />


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
      <Footer />
      <QuickLinkFooter />
    </>
  );
};
export default App;