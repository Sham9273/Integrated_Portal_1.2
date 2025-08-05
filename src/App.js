import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import QuickLinkFooter from './Component/QuickLinkFooter';
import SelectActionCard from './Component/SelectActionCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactUs from './Pages/ContactUs'

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Home /> */}
      {/* <SelectActionCard/> */}
  
      <Routes>
        <Route path="/intportal" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/aboutus" element={<AboutUs/>}/> */}
        {/* Add other routes as needed */}
      </Routes>
          <Footer/>
      <QuickLinkFooter/>
    </>
  );
};
export default App;