import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Offers from './pages/Offers';
import './assets/styles/main.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:carId" element={<Offers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
