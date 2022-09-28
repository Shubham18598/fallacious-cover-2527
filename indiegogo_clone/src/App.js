import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
      <>
    <Navbar/>
      <AllRoutes/>
      <Footer/>
      </>
  );
}

export default App;
