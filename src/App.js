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
import Faqs from "./pages/Faqs";
import CalculatorWorks from "./pages/CalculatorWorks";
import SubscriptionWorks from "./pages/SubscriptionWorks";
import TrackYourCarbonImpact from "./pages/TrackYourCarbonImpact";
import PartnershipWithCNaught from "./pages/PartnershipWithCNaught";

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
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/calculator-works" element={<CalculatorWorks />} />
        <Route exact path="/subscription-works" element={<SubscriptionWorks />} />
        <Route exact path="/track-your-carbon-impact" element={<TrackYourCarbonImpact />} />
        <Route exact path="/partnership-with-cnaught" element={<PartnershipWithCNaught />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
