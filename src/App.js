import React from "react";
import { Header } from "./Components/Header.js";
import { Home } from "./Components/Home.js";
import { Footer } from "./Components/Footer.js";
import { Education } from "./Components/Education.js";
import { Skills } from "./Components/Skills.js";
import { Projects } from "./Components/Projects.js";
import { ContactMe } from "./Components/ContactMe";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact-me" element={<ContactMe />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
