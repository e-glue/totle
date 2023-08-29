import { Route, Routes } from "react-router-dom";
import Introduction from "./pages/introduction/Introduction";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";
import Contact from "./pages/contact/Contact";
import "./styles/styles.scss";
import NavBar from "./pages/pricing/components/nav-bar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
