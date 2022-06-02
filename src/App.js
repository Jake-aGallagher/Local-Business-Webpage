import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import NavBar from "./Navigation/NavBar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import ReservationPage from "./Pages/ReservationPage";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Navigation/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes> 
        <Route path="Local-Business-Webpage/" element={<Home />} />
        <Route path="Local-Business-Webpage/Menu" element={<Menu />} />
        <Route path="Local-Business-Webpage/Gallery" element={<Gallery />} />
        <Route path="Local-Business-Webpage/Reservation" element={<ReservationPage />} />
        <Route path="Local-Business-Webpage/ContactUs" element={<ContactUs />} />
        <Route path="Local-Business-Webpage/*" element={<Navigate to="Local-Business-Webpage/"/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
