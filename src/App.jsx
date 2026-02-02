import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
const Home = () => (
  <div className="flex justify-center items-center min-h-screen px-4 text-center">
    <h1 className="text-3xl md:text-5xl font-bold">Azal International</h1>
  </div>
);

const Services = () => (
  <div className="flex justify-center items-center min-h-screen px-4 text-center">
    <h1 className="text-3xl md:text-5xl font-bold">Services Page</h1>
  </div>
);

const Contact = () => (
  <div className="flex justify-center items-center min-h-screen px-4 text-center">
    <h1 className="text-3xl md:text-5xl font-bold">Contact Page</h1>
  </div>
);

const About = () => (
  <div className="flex justify-center items-center min-h-screen px-4 text-center">
    <h1 className="text-3xl md:text-5xl font-bold">About Us Page</h1>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
