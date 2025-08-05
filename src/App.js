import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import QuickLinkFooter from './Component/QuickLinkFooter';
// import SelectActionCard from './Component/SelectActionCard';
import AboutUs from './Pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

import ContactUs from './Pages/ContactUs'
import LoginPage from './Component/Login';

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Home /> */}
      {/* <SelectActionCard/> */}
  
      <Routes>
        <Route path="/intportal" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
<<<<<<< HEAD
         <Route path="/login" element={<LoginPage />} />
=======
        <Route path="/login" element={<Login />} />
        {/* <Route path="/aboutus" element={<AboutUs/>}/> */}
>>>>>>> ec05d2ab43f59990d81bf82b9fade7d293411830
        {/* Add other routes as needed */}
      </Routes>
          <Footer/>
      <QuickLinkFooter/>
    </>
  );
};
export default App;