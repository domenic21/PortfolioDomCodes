import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="realtive z-0  ">
        <StarsCanvas />
        <div className="bg-hero-pattern r bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
