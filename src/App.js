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
        <Route path="Italia/" element={<Home />} />
        <Route path="Italia/Menu" element={<Menu />} />
        <Route path="Italia/Gallery" element={<Gallery />} />
        <Route path="Italia/Reservation" element={<ReservationPage />} />
        <Route path="Italia/ContactUs" element={<ContactUs />} />
        <Route path="Italia/*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
