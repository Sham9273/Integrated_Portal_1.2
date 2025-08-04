import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import QuickLinkFooter from './Component/QuickLinkFooter';
import SelectActionCard from './Component/SelectActionCard';
const App = () => {
  return (
    <>
      <Navbar/>
      <Home />
      <SelectActionCard/>
      <Footer/>
      <QuickLinkFooter/>
    </>
  );
};
export default App;