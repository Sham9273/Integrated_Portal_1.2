import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import QuickLinkFooter from './Component/QuickLinkFooter';
// import SelectActionCard from './Component/SelectActionCard';
import AboutUs from './Pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

import ContactUs from './Pages/ContactUs'

import AutoSubmitRedirect from './LoginWithEpramaan/AutoSubmitRedirect';
import LoginPageWithEpramaan from './LoginWithEpramaan/LoginPageWithEpramaan';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <SelectActionCard/> */}

      <Routes>
        <Route path="/intportal" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/loginwithepramaan" element={<LoginPageWithEpramaan />} />

        <Route path="/login" element={<Login />} />
        <Route path="/autosubmit" element={<AutoSubmitRedirect />} />

        {/* <Route path="/aboutus" element={<AboutUs/>}/> */}

        {/* Add other routes as needed */}
      </Routes>
      <Footer />
      <QuickLinkFooter />
    </>
  );
};
export default App;