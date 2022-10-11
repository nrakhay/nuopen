import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Hero />

      <div className="main-info-container">
        <Schedule />
        <FAQ />
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
}

export default App;
