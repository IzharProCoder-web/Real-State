import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Properties from "./Pages/Properties";
import Service from "./Pages/Services";
import Contact from "./Pages/ContactUs";
import PropertieDetail from "./Pages/PropertieDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/service" element={<Service />} /> 
      <Route path="/contact" element={<Contact />} />
      <Route path="/propertyDetail" element={<PropertieDetail />} />
    </Routes>
  );
};

export default AppRoutes;