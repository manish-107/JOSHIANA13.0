import React from "react";
import Nav from "../components/Nav.jsx";
import Card from "../components/Card";
import posterimg from "../assets/posterimg.jpg";

const rocketImg = "https://via.placeholder.com/300x200.png?text=Rocket";
const robotImg = "https://via.placeholder.com/300x200.png?text=Robot";
const alienImg = "https://via.placeholder.com/300x200.png?text=Alien";
const spaceImg = "https://via.placeholder.com/300x200.png?text=Space";

const About = () => {
  const highlights = [
    { emoji: "🚀", image: rocketImg },
    { emoji: "🤖", image: robotImg },
    { emoji: "👽", image: alienImg },
    { emoji: "🌌", image: spaceImg },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-900 via-black to-black text-white min-h-screen">
      <Nav />
      <div className="pt-28">
        <div className="relative z-0 p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">
            About JOSHIANA 13.0
          </h1>
          <p className="text-lg leading-relaxed text-justify mb-8">
            Joshiana 13.0 is a National level IT and Cultural fest organized by
            the Department of Computer Applications in association with
            TECHNOCRATS, the student Association of MCA of St. Joseph
            Engineering College, Mangaluru. This 2-day fest, themed "Science
            Fiction", invites you to explore futuristic simulations,
            cutting-edge technology, and events that stretch the boundaries of
            imagination. Join us on the 6th and 7th of September 2024 at St.
            Joseph Engineering College for an unforgettable journey into the
            realms of science fiction.
          </p>

          <div className="relative mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {highlights.map(({ emoji, image }) => (
                <Card emoji={emoji} image={image} key={emoji} />
              ))}
            </div>
          </div>
          <p className="text-lg leading-relaxed text-justify mb-8">
            Immerse yourself in a world where the lines between reality and
            fiction blur. From interactive exhibits to thought-provoking
            lectures, Joshiana 13.0 will challenge your perceptions and inspire
            your creativity. Don't miss out on this unique opportunity to
            experience the future today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
