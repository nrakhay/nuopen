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

      <Schedule />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
