import { Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./Navigation/NavBar";
import Home from "./Pages/Home";
import StandardMenu from "./Pages/StandardMenu";
import LunchMenu from "./Pages/LunchMenu";
import DrinksMenu from "./Pages/DrinksMenu";
import PartyMenu from "./Pages/PartyMenu";
import ReservationPage from "./Reservation/ReservationPage";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Navigation/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StandardMenu" element={<StandardMenu />} />
        <Route path="/LunchMenu" element={<LunchMenu />} />
        <Route path="/DrinksMenu" element={<DrinksMenu />} />
        <Route path="/PartyMenu" element={<PartyMenu />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Reservation" element={<ReservationPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
