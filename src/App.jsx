import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LangingPage from "./pages/LangingPage";
import Events from "./pages/Events";
import About from "./pages/About";
import EventSchedule from "./pages/EventSchedule";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of all resources
    const loadResources = async () => {
      // You can add real resource loading logic here
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 3-second delay
      setLoading(false);
    };

    loadResources();
  }, []);

  return (
    <div>
      {/* {loading ? (
        <Loader /> // Show loader while loading is true
      ) : ( */}
      <BrowserRouter>
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
      {/* )} */}
    </div>
  );
}

export default App;
