import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import './assets/styles/main.css'; 


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
