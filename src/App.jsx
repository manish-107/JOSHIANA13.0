// src/App.jsx
import React from "react";
import "./App.css";
import LangingPage from "./pages/LangingPage";
import Events from "./pages/Events";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import EventSchedule from "./pages/EventSchedule";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LangingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventschedule" element={<EventSchedule />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
