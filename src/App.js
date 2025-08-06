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

import AutoSubmitRedirect from './LoginWithEpramaan/AutoSubmitRedirect';
import LoginPageWithEpramaan from './LoginWithEpramaan/LoginPageWithEpramaan';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <SelectActionCard/> */}
<<<<<<< HEAD

      <Routes>
=======
  
      {/* <Routes>
>>>>>>> 19fc2714709d1f466355da7d7fdd74a4911e6baa
        <Route path="/intportal" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/loginwithepramaan" element={<LoginPageWithEpramaan />} />

        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/autosubmit" element={<AutoSubmitRedirect />} />

        {/* <Route path="/aboutus" element={<AboutUs/>}/> */}

        {/* Add other routes as needed */}
      </Routes>
      <Footer />
      <QuickLinkFooter />
=======
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
>>>>>>> 19fc2714709d1f466355da7d7fdd74a4911e6baa
    </>
  );
};
export default App;