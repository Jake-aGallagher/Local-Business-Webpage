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
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Reservation" element={<ReservationPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
