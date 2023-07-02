import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Contact from "../src/components/pages/Contact";
import Navbar from "../src/components/inc/Navbar";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Footer from "./components/inc/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
