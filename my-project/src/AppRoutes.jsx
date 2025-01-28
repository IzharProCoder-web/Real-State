import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Properties from "./Pages/Properties";
import Service from "./Pages/Services";
import Contact from "./Pages/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/services" element={<Service />} /> {/* Corrected path */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;