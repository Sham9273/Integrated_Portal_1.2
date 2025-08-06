import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import QuickLinkFooter from './Component/QuickLinkFooter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import AboutUs from './Pages/AboutUs';
import WebsitePolicy from './Pages/WebsitePolicy';
import FeedbackForm from './Pages/FeedbackForm';
import Help from './Pages/Help';


import ContactUs from './Pages/ContactUs'

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Home /> */}
      {/* <SelectActionCard/> */}
  
      {/* <Routes>
        <Route path="/intportal" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}

      <div id="main-content">
        <Routes>
          <Route path="/intportal" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/websitepolicy" element={<WebsitePolicy />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/help" element={<Help />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
      
          <Footer/>
      <QuickLinkFooter/>
    </>
  );
};
export default App;