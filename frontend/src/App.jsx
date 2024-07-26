import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LangingPage from "./pages/LangingPage.jsx";
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx";
import EventSchedule from "./pages/EventSchedule.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of all resources
    const loadResources = async () => {
      // You can add real resource loading logic here
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
      setLoading(false);
    };

    loadResources();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> // Show loader while loading is true
      ) : (
        <BrowserRouter basename="/JOSHIANA13.0">
          <Routes>
            <Route path="/" element={<LangingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/eventschedule" element={<EventSchedule />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
