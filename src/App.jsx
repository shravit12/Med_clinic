import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./pages/contact";
import About from "./components/About";
import Footer from './components/Footer'
import Testimonial from './components/Testimonial.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About/>
              <Testimonial/>
              <Footer/>
            </>
          }
        />
        
        <Route path="/contact" element={<><Contact />
            <Footer/></>} />
      </Routes>
    </Router>
  );
}

export default App;
