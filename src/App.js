import "./App.css";
import Footer from "./Navigation/Footer";
import NavBar from "./Navigation/NavBar";
import ReservationPage from "./Reservation/ReservationPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ReservationPage />
      <Footer />
    </div>
  );
}

export default App;
