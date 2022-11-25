import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
