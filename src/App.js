import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Calculator from "./pages/Calculator";
import HowItWorks from "./pages/HowItWorks";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/how-it-works" element={<HowItWorks />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
