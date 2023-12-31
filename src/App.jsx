import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
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
        <Projects />
       
        <div className="relative z-0">
          <Contact />
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
