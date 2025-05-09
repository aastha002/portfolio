import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Certifications,
  Tech,
  Works,
  StarsCanvas,
  Navbar,
  Hero,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-10 bg-primary overflow-x-hidden">
        {/* Hero Section with Navbar */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Main Sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certifications />

        {/* Contact + Stars */}
        <div className="relative z-10">
          <Contact />
          <StarsCanvas />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
